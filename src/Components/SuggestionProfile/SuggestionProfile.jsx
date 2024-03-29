import React from "react";

const SuggestionProfile = ({
  userName = "Tanvir",
  userPhoto = "",
  subTitle = "BanterBean recommended",
  haveTodo = false,
}) => {
  return (
    <div className="flex justify-between items-center text-[12px]">
      <span className="flex gap-2 items-center">
        <section className="size-10 rounded-full overflow-hidden">
          <img src={userPhoto} alt="" />
        </section>
        <section>
          <h3 className="font-bold">{userName}</h3>
          <p className="font-extralight">{subTitle}</p>
        </section>
      </span>
      <section className="text-[#2eabff] hover:text-white cursor-pointer">
        {haveTodo}
      </section>
    </div>
  );
};

export default SuggestionProfile;
