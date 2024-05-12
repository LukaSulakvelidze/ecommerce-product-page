import { FiShoppingCart } from "react-icons/fi";
import Profile_Avatar from "../assets/Profile_Avatar.jpg";
import { Header_props } from "../interfaces";

const Header = ({ quantity, cartIcon_onClick }: Header_props) => {
  return (
    <header className="flex items-center justify-between py-[20px] px-[6.4%] xl:py-[28px] xl:px-[11.4%] ">
      <h1>
        <a className="text-[28px] font-bold text-[#1D2026]" href="#">
          sneakers
        </a>
      </h1>

      <div className="flex items-center gap-[22px]">
        <div>
          {quantity > 0 && (
            <p className="text-[10px] font-bold text-center w-[19px] h-[13px] rounded-[6.5px] text-white bg-[#ff7e1b]">
              {quantity}
            </p>
          )}
          <FiShoppingCart
            className="w-6 h-6 cursor-pointer text-[#69707D] hover:text-black"
            onClick={cartIcon_onClick}
          />
        </div>
        <img
          className="w-[24px] rounded-[50%] xl:w-[50px] cursor-pointer hover:border-2 hover:border-[#FF7E1B]"
          src={Profile_Avatar}
          alt="User Image"
        />
      </div>
    </header>
  );
};

export default Header;
