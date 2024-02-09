import { useState } from "react";
import {
  Search,
  YoutubeLogo,
  VoiceSearchIcon,
  YoutubeApps,
  Notifications,
  Profile1,
  HamburgerMenu,
  Close,
} from "../Assets/AssetsPaths";
const Header = () => {
  const [menuShown, toggleMenu] = useState(true);
  const toggle = () => {
    toggleMenu((prev) => !prev);
  };

  return (
    <section className="w-full h-[10vh] max-w-[4280px] mx-auto fixed">
      <div className="w-[100%] h-[10vh] flex bg-gray-100 justify-between items-center gap-[3vh] px-5 sm:px-10 ">
        <div className="w-[18vh] sm:w-[30vh]  h-[70%] flex items-center justify-between cursor-pointer">
          <img
            src={menuShown ? HamburgerMenu : Close}
            alt=""
            className=" hidden sm:w-[20%] sm:block"
            onClick={toggle}
          />
          <img src={YoutubeLogo} alt="yt logo" className="w-[90%] sm:w-[60%]" />
        </div>
        <div className="w-[40%] sm:w-[60%]  h-[70%] text-black flex justify-center items-center">
          <div className="hidden sm:flex">
            <input
              type="text"
              className="bg-gray-300 rounded-tl-full rounded-bl-full outline-none pl-4 focus:shadow-sm focus:border-black focus:border placeholder:text-md font-light"
              placeholder="search"
            />
            <img
              src={Search}
              alt="search img"
              className=" bg-gray-300 w-[30px] h-[30px] rounded-tr-full rounded-br-full justify-center items-center cursor-pointer p-1"
            />
          </div>
        </div>
        <div className="w-[8vh] sm:w-[30vh]  h-[70%] flex justify-center items-center justify-evenly">
          {[VoiceSearchIcon, YoutubeApps, Notifications, Profile1].map(
            (i, id) => {
              return (
                <img
                  src={i}
                  key={id}
                  className={
                    id !== 3
                      ? "w-[28px] h-[28px] hidden sm:block cursor-pointer"
                      : "w-[28px] h-[28px] cursor-pointer"
                  }
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};
export default Header;
