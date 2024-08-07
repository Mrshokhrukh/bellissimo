import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { calculateSum, decreseQTY, increaseQTY } from "../redux/CartSlice";
type Props = {
  product: any;
};

const CartProduct = ({ product }: Props) => {
  let dispatch = useDispatch();
  return (
    <div className="w-[100%] p-3 py-3.5 px-2 pr-6 flex justify-between bg-white shadow-cardshadow rounded-2xl cursor-pointer">
      <div className="flex items-center">
        <img src={product?.img} alt="" className="w-[120px]" />
        <div className="ml-5">
          <p className="font-light text-lg">{product?.name}</p>
          <span className="text-gray font-light ">{"qalin"}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <button className="rounded-xl p-1 bg-graybtn py-1.5 flex items-center justify-around">
          <span
            className="cursor-pointer"
            onClick={() => {
              dispatch(decreseQTY(product.id));
              dispatch(calculateSum());
            }}
          >
            <FiMinus />
          </span>
          <p>{product?.quantity}</p>
          <span
            className="cursor-pointer"
            onClick={() => {
              dispatch(increaseQTY(product.id));
              // dispatch(calculateSum());
            }}
          >
            <FiPlus />
          </span>
        </button>
        <p className="font-semibold">{product.price} so'm</p>
      </div>
    </div>
  );
};

export default CartProduct;
