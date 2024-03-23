import { NavLink, Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import { IoIosListBox, IoMdPlayCircle } from "react-icons/io";
import { RiAppsFill, RiAppsLine } from "react-icons/ri";
import { GiHelp } from "react-icons/gi";
import { MdFeedback } from "react-icons/md";
import { FaCaretSquareLeft } from "react-icons/fa";

const Deashboad = () => {
  return (
    <div>
      <Navber></Navber>

      <div className="flex gap-4">
        <div className="md:w-[241PX] pl-[10px] ">
          <ul className="menu text-xl flex flex-col  h-screen justify-between">
            <div>
              <div className="border-b  ">
                <li>
                  {" "}
                  <NavLink to="/myproject" className="flex gap-2 items-center">
                    {" "}
                    <IoIosListBox />
                    My Projects
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/addprojects"
                    className="flex gap-2 items-center my-5"
                  >
                    {" "}
                    <RiAppsFill />
                    Add Card
                  </NavLink>
                </li>
                {/* <NavLink
                to="/addprojects"
                className="flex gap-2 items-center my-5"
              >
                {" "}
                <RiAppsFill />
                Update Card
              </NavLink> */}
              </div>
              <div className="">
                <NavLink
                  to="/myprojects"
                  className="flex gap-2 items-center my-5"
                >
                  {" "}
                  <RiAppsLine />
                  Apps
                </NavLink>
                <NavLink to="/myprojects" className="flex gap-2 items-center">
                  {" "}
                  <IoMdPlayCircle />
                  Intro to Necleo
                </NavLink>
              </div>
            </div>
            <div className="flex">
              <div className=" bottom-0">
                <NavLink
                  to="/myprojects"
                  className="flex gap-2 items-center my-5"
                >
                  {" "}
                  <GiHelp />
                  Help & Support
                </NavLink>
                <NavLink to="/myprojects" className="flex gap-2 items-center">
                  {" "}
                  <MdFeedback />
                  Feedback
                </NavLink>
                <NavLink to="/myprojects" className="flex gap-2 items-center">
                  {" "}
                  <FaCaretSquareLeft />
                  Collapse
                </NavLink>
              </div>
            </div>
          </ul>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deashboad;
