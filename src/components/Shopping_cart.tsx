import nike from "../../public/Nike-land.jpg";
import { FaTrashAlt } from "react-icons/fa";
import { Shopping_cart_props } from "../interfaces";
const Shopping_cart = ({
  quantity,
  deleteItem,
  checkoutClick,
}: Shopping_cart_props) => {
  return (
    <div
      style={{ boxShadow: "0px 20px 50px -20px rgba(29, 32, 38, 0.50)" }}
      className="absolute z-[2] top-[14%] xl:top-[94px] right-[2%] xl:right-[89px] w-[90%] sm:w-[360px] h-[256px] pt-6 pb-8 rounded-[10px] bg-white"
    >
      <span className="font-bold text-[#1d2026] ml-[24px]">Cart</span>
      <hr className="h-[1px] mt-6 mb-6 bg-[#E4E9F2]" />
      <div className="flex">
        {quantity ? (
          <div className="flex flex-col w-full gap-6 px-6">
            <div className="flex items-center justify-between">
              <img className="w-[50px] rounded " src={nike} alt="" />
              <div>
                <p className="font-normall leading-6 text-[#69787d] ">
                  Fall Limited Edition Sneakers
                </p>
                <p className="font-normall leading-6 text-[#69787d]">
                  $125 x {`${quantity} `}
                  <strong className="font-bold text-[#1d2026]">
                    ${`${125 * quantity}`}
                  </strong>
                </p>
              </div>
              <FaTrashAlt
                className="cursor-pointer text-[#C3CAD9]"
                onClick={deleteItem}
              />
            </div>
            <button
              onClick={checkoutClick}
              className="w-full h-14 rounded-[10px] text-white font-bold bg-[#ff7e1b] hover:bg-[#FFAB6A]"
            >
              Checkout
            </button>
          </div>
        ) : (
          <span className="font-normall leading-6 text-[#69787d] mt-10 mx-auto">
            Your cart is empty.
          </span>
        )}
      </div>
    </div>
  );
};

export default Shopping_cart;
