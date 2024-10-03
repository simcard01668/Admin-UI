import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from "@mui/icons-material";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper flex justify-between items-center h-[51px] border-b-[1px] p-[20px] text-[14px]">
        <div className="search border-gray-400 border-[1px] px-2 flex items-center">
          <input type="text" placeholder="Search..." className="border-none outline-none bg-transparent placeholder:text-[12px]"/>
          <SearchOutlined />
        </div>

        <div className="items flex items-center">
          <div className="item flex items-center navIcon">
            <LanguageOutlined sx={{fontSize:"20px"}}/>
            <span>English</span>
          </div>

          <div className="item navIcon">
            <DarkModeOutlined sx={{fontSize:"20px"}}/>
          </div>

          <div className="item navIcon">
            <FullscreenExitOutlined sx={{fontSize:"20px"}}/>
          </div>

          <div className="item navIcon flex items-center justify-center relative">
            <NotificationsNoneOutlined sx={{fontSize:"20px"}}/>
            <div className="counter size-[15px] justify-center items-center rounded-[50%] text-[11px] bg-red-600 text-center text-white absolute top-[-5px] right-[-5px]">2</div>
          </div>

          <div className="item navIcon flex items-center justify-center relative">
            <ChatBubbleOutlineOutlined sx={{fontSize:"20px"}}/>
            <div className="counter size-[15px] rounded-[50%] text-[11px] bg-red-600 text-center text-white absolute top-[-5px] right-[-5px]">2</div>
          </div>

          <div className="item navIcon">
            <ListOutlined sx={{fontSize:"20px"}}/>
          </div>

          <div className="item">
            <img className="size-[30px] rounded-full" src="https://images.pexels.com/photos/9072375/pexels-photo-9072375.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
