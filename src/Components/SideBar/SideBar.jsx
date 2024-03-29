import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const tanvir = 4;

  return (
    <div className="bg-purple-300 h-screen fixed w-64 p-5">
      <div className="bg-amber-300 h-full relative">
        <h1 className="text-3xl">BANTER-BEAM</h1>
        <section className="bg-cyan-400 mt-10 flex flex-col">
          <Link className="py-2 hover:bg-slate-700" to={`/`}>
            Home
          </Link>
          <button className="py-2 hover:bg-slate-700">Search</button>
          <Link className="py-2 hover:bg-slate-700" to={`/explore`}>
            Explore
          </Link>
          <Link className="py-2 hover:bg-slate-700" to={`/reels`}>
            Reels
          </Link>
          <Link className="py-2 hover:bg-slate-700" to={`/messages`}>
            Messages
          </Link>
          <button className="py-2 hover:bg-slate-700">Notification</button>
          <Link className="py-2 hover:bg-slate-700" to={`/profile`}>
            Profile
          </Link>
        </section>
        <section className="absolute bottom-0 w-full bg-indigo-400 flex flex-col">
          <Link className="py-2 hover:bg-slate-700" to={"/"}>
            Threads
          </Link>
          <button className="py-2 hover:bg-slate-700">More</button>
        </section>
      </div>
    </div>
  );
};

export default SideBar;
