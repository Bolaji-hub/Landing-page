import { IoMdEyeOff } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const Balance = () => {
  return (
    <div className="bg-[#07231c] rounded-lg  h-20 p-4 mt-8 flex w-[360px]">
      <div className="flex gap-4 text-white">
        <h5>Available Balance</h5>
        <IoMdEyeOff className="mt-2" />
        <p className="font-bold text-2xl text-white">#2000</p>
      </div>
      <div className="flex mt-2 gap-4  rounded-lg">
        <IoPaperPlaneOutline className="rounded-lg bg-[#5edd9f]" />
        <IoIosArrowForward className="bg-[#5edd9f] rounded-md" />
      </div>
    </div>
  );
};

export default Balance;
