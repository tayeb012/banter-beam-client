import React from "react";
import Stories from "../../Components/Stories/Stories";

const Home = () => {
  return (
    <div className="flex justify-center w-full gap-10 mt-8 mx-32">
      <section className="w-[32rem]">
        {" "}
        <div className="h-20">
          <Stories></Stories>
        </div>
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
