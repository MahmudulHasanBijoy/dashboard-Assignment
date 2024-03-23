import { FaCaretDown } from "react-icons/fa";
import profile from "../../assets/profile.jfif";
import logo from "../../assets/logo.png";

const Navber = () => {
  return (
    <div className="flex justify-between w-11/12 mx-auto items-center py-5  ">
      <div>
        <img src={logo} alt="" className="w-[76px] h-[26px] " />
      </div>
      <div className="flex gap-4 items-center ">
        <div>
          <h1>
            <span className="font-semibold text-[14px]">Free Trial | </span>
            2days left
          </h1>
          <p className="text-[#FA782F] text-[11px] ">Extend free trail</p>
        </div>
        <div>
          <img
            src={profile}
            alt=""
            className="w-[36px] h-[36px] rounded-full"
          />
        </div>
        <span>
          <FaCaretDown />
        </span>
      </div>
    </div>
  );
};

export default Navber;
