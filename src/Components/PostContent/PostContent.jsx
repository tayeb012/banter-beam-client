import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import { IoSaveOutline } from "react-icons/io5";
import { FaRegFaceGrin } from "react-icons/fa6";

const PostContent = () => {
  return (
    <>
      <div className="mt-3 h-max flex flex-col  items-center">
        <section className=" py-2 w-[468px]">
          <div className="flex justify-between items-center text-[13px]">
            <span className="flex gap-1 items-center">
              <div className="bg-instagram-gradient size-10 rounded-full rotate-[120deg] flex justify-center items-center">
                <div className="rounded-full size-[45px]  overflow-hidden -rotate-[120deg] border-[2px] border-black">
                  <img
                    src="https://t4.ftcdn.net/jpg/03/96/46/43/240_F_396464388_dDXhg2Q1RdqxQpXMdH4sTAUEbRkLLsvo.jpg"
                    alt="Alice"
                    className="rounded-full"
                  />
                </div>
              </div>
              <section>
                <span className="flex items-center gap-1">
                  <h3 className="font-bold">Robin_pande</h3>
                  <h3 className="text-[#A2A2A2] text-[14px] font-extrabold">
                    .
                  </h3>
                  <h3 className="text-[#A2A2A2]">3h</h3>
                </span>
                <p className="font-normal">Ujala</p>
              </section>
            </span>
            <section className="cursor-pointer text-base">
              <BsThreeDots />
            </section>
          </div>
        </section>
        {/* content section */}
        <section className=" border-[1px] border-[#3d3d3d] rounded-sm w-[468px] h-[585px]"></section>
        {/* like &  */}
        <section className="mt-1 flex flex-col gap-1 w-[468px]">
          <div className="flex w-full justify-between ">
            <span className="flex justify-between text-2xl w-24 ">
              <FaRegHeart className="cursor-pointer" />
              <FiMessageCircle className="cursor-pointer" />
              <FiSend className="cursor-pointer" />
            </span>
            <IoSaveOutline className="text-2xl" />
          </div>
          <p className="text-[14px]">Like by bob458 and other</p>
          <div className="text-[14px] ">
            <span className="font-bold inline-flex">Robin_pande</span>
            <span className="text-[14px] ml-2">
              This is a beautiful caption This is a beautiful caption This is a
              beautiful caption beautiful caption beautiful caption
            </span>
          </div>
        </section>
        {/* Comment section */}
        <section className="text-[14px] w-[468px]">
          <p className=" text-[#A2A2A2] cursor-pointer ">View all 2 comments</p>
          <span className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Add a comments"
              className="border-b-[1px] border-[#A2A2A2] pb-3 w-full outline-none  bg-transparent"
            />
            <FaRegFaceGrin className="text-[#A2A2A2] absolute right-1 top-0 cursor-pointer" />
          </span>
        </section>
      </div>
      {/* post end */}
    </>
  );
};

export default PostContent;
