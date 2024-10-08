import { useState } from "react";
import { categories } from "../db/data";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";

const Categories = ({ isSticky }: { isSticky: boolean }) => {
  let cartData = JSON.parse(localStorage.getItem("user-cart") || "[]");
  let navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("combo");
  const handleClick = (val: string) => {
    window.location.href = `#${val}`;
    setActiveCategory(val);
  };

  return (
    <div className="max-w-xl w-[100%] flex items-center py-2 relative px-2 md:px-0">
      <img
        className={`${
          isSticky ? `w-[28px] md:w-[35px] md:ml-6` : "w-[0px]"
        } transition-all duration-200 mr-4`}
        src="https://bellissimo.uz/_next/image?url=%2Fimages%2Ficon.png&w=1920&q=75"
        alt=""
      />
      <div
        className={`flex gap-4 overflow-x-auto w-[95%] ${isSticky ? "w-[87%]" : ""}`}
        id="scrollnav"
      >
        {categories.map((val: any, i) => {
          return (
            <div
              className={`${
                activeCategory === val ? "bg-green text-white" : "hover:bg-hoverGreen"
              }  py-[5px] px-3.5 bg-graybtn text-sm capitalize rounded-full cursor-pointer transition duration-150`}
              onClick={() => handleClick(val)}
              key={i}
            >
              {val}
            </div>
          );
        })}
      </div>
      <div
        id="cart"
        className="hidden md:flex absolute right-2 w-[140px] py-1.5 bg-cartbtnred text-white rounded-full text-md font-normal cursor-pointer transition-all duration-300 hover:w-[160px] justify-center"
        onClick={() => navigate("/cart")}
      >
        Savatcha | {cartData.length}
      </div>
    </div>
  );
};

export default Categories;
