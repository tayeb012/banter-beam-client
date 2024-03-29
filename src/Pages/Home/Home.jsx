import React from "react";

const Home = () => {
  return (
    <div className="flex ml-72 justify-center w-full gap-10">
      <section className="bg-amber-200 w-2/5">
        {" "}
        <div className="bg-teal-300 h-16">days</div>
        <div className="bg-sky-300 h-screen overflow-y-visible">
          Post Content
        </div>
      </section>
      <section className=" w-60">
        <div className="bg-indigo-300 h-16">Profile switch</div>
        <div className="bg-slate-600 h-fit">
          <h1> user suggestion</h1>
          <h1> user suggestion</h1>
          <h1> user suggestion</h1>
          <h1> user suggestion</h1>
          <h1> user suggestion</h1>
          <h1> user suggestion</h1>
          <h1> user suggestion</h1>
          <h1> user suggestion</h1>
          <h1> user suggestion</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
