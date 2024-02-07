import { IoMdEyeOff } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const Balance = () => {
  return (
    <div className="bg-[#07231c] justify-between rounded-lg  h-[100px] p-4 mt-8 flex w-[400px]">
      <div className="flex gap-4 text-white">
        <h5 className="">Available Balance</h5>
        <IoMdEyeOff className="flex gap-4" />
        <p className="font-bold text-2xl text-white mb-10">#2000</p>
      </div>
      <div className=" flex mt-2 gap-4  rounded-lg">
        <IoPaperPlaneOutline className="rounded-lg bg-[#5edd9f] h-[30px] w-[75px]" />
        <IoIosArrowForward className="bg-[#5edd9f] rounded-md h-[30px] w-[75px]" />
      </div>
    </div>
  );
};

export default Balance;
