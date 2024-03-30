import "./SideBar.css";
import { Link } from "react-router-dom";
import { GoHomeFill, GoLinkExternal, GoSearch } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { CgAddR, CgProfile } from "react-icons/cg";
import { PiAtThin } from "react-icons/pi";
import { IoReorderThreeSharp } from "react-icons/io5";
import { useState } from "react";

const SideBar = () => {
  const [showLink, setShowLink] = useState(false);

  const linkStyle =
    "flex gap-4 items-center py-2 pl-2 rounded-md hover:bg-[#1A1A1A] duration-300";

  return (
    <div className=" h-screen fixed w-64 p-4 border-r-[1px]  border-gray-500">
      <div className="h-full relative">
        <Link
          to={`/`}
          className="text-3xl font-extrabold butterfly-kids-regular "
        >
          BanterBeam
        </Link>
        <section className="text-base mt-10 flex gap-1 flex-col transform">
          <Link className={` ${linkStyle} `} to={`/`}>
            <GoHomeFill className="duration-75" /> Home
          </Link>
          <button className={` ${linkStyle}`}>
            <GoSearch /> Search
          </button>
          <Link className={` ${linkStyle}`}>
            <MdOutlineExplore /> Explore
          </Link>
          <Link className={` ${linkStyle}`} to={`/reels`}>
            <BsCameraReelsFill /> Reels
          </Link>
          <Link className={` ${linkStyle}`} to={`/messages`}>
            <LiaFacebookMessenger /> Messages
          </Link>
          <Link className={` ${linkStyle}`} to={`/messages`}>
            <CgAddR /> Creator
          </Link>
          <button className={` ${linkStyle}`}>
            <FaRegHeart /> Notification
          </button>
          <Link className={` ${linkStyle}`} to={`/profile`}>
            <CgProfile /> Profile
          </Link>
        </section>
        <section className="absolute bottom-0 w-full  flex flex-col">
          <Link to={"/"}>
            <div
              className={` ${linkStyle} justify-between pr-2`}
              onMouseEnter={() => setShowLink(true)}
              onMouseLeave={() => setShowLink(false)}
            >
              <span className="flex gap-3">
                <PiAtThin className="text-2xl" />
                Threads
              </span>
              <GoLinkExternal className={showLink ? "flex" : "hidden"} />
            </div>
          </Link>
          <button className={` ${linkStyle}`}>
            <IoReorderThreeSharp className="text-2xl" /> More
          </button>
        </section>
      </div>
    </div>
  );
};

export default SideBar;
