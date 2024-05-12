import Slider from "./Slider";
import { FiShoppingCart } from "react-icons/fi";
import { TiPlus, TiMinus } from "react-icons/ti";
import Shopping_cart from "./Shopping_cart";
import { Main_props } from "../interfaces";

const Main = ({
  show,
  quantity,
  deleteItem,
  checkoutClick,
  decreament,
  count,
  increment,
  addCart,
}: Main_props) => {
  return (
    <main className=" pb-[88px] xl:flex xl:items-center xl:gap-[125px] xl:px-[13%] xl:mt-24">
      {show && (
        <Shopping_cart
          quantity={quantity}
          deleteItem={deleteItem}
          checkoutClick={checkoutClick}
        />
      )}
      <Slider />
      <div className="flex flex-col gap-[24px] px-[6.4%] xl:p-0 xl:w-[61.3%] mt-6 xl:mt-0">
        <div className="flex flex-col gap-[15px] xl:gap-[32px]">
          <div className="flex flex-col gap-[19px] xl:gap-[27px]">
            <p className="text-[12px] font-bold tracking-[1.8px] uppercase text-[#FF7E1B] xl:text-[13px] xl:tracking-[2px]">
              Sneaker Company
            </p>
            <h1 className="text-[28px] font-bold leading-[32px] text-[#1d2026] xl:text-[44px] xl:leading-[48px]">
              Fall Limited Edition Sneakers
            </h1>
          </div>
          <div className="flex flex-col gap-[24px] xl:gap-[28px]">
            <p className="text-[15px] font-normal leading-[25px] text-[#69707D] xl:text-[16px] xl:leading-[26px]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex justify-between items-center xl:flex-col xl:gap-[10px] xl:justify-normal xl:items-baseline">
              <div className="flex items-center gap-4">
                <strong className="text-[28px] text-[#1d2026]">$125.00</strong>
                <p className="font-bold text-center leading-[28px] text-[#ff7e1b] w-[51px] h-[27px] rounded-[6px] bg-[#FFEEE2]">
                  50%
                </p>
              </div>
              <p className="font-bold leading-[26px] line-through decoration-1 text-[#b6bcc8]">
                $250.00
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full xl:flex-row xl:justify-between">
          <div className="flex justify-around items-center h-14 rounded-[10px] bg-[#f6f8fd] xl:w-40">
            <button onClick={decreament}>
              <TiMinus className="font-black text-center text-[#ff7e1b]  hover:text-[#FFAB6A]" />
            </button>
            <p className="font-bold text-center text-[#1d2026]">{count}</p>
            <button
              onClick={increment}
              className="font-black text-center w-[12px] h-[12px] text-[#ff7e1b] hover:text-[#FFAB6A]"
            >
              <TiPlus />
            </button>
          </div>
          <button
            onClick={addCart}
            style={{ boxShadow: "0px 20px 50px -20px #FF7E1B" }}
            className="flex justify-center items-center gap-4 h-14 rounded-[10px] font-bold text-white bg-[#FF7E1B]  hover:bg-[#FFAB6A] xl:w-56"
          >
            <FiShoppingCart className="text-white" /> Add to cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
