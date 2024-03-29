import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className=" h-full  bg-black  text-white">
      <div className="flex ">
        <div className="flex-1">
          <SideBar></SideBar>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
