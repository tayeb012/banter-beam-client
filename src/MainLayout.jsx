import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className=" h-full  bg-black  text-white">
      <div className="flex ">
        <div className="">
          <SideBar></SideBar>
        </div>
        <section className="ml-64 ">
          <Outlet></Outlet>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
