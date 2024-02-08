import { IoMdEyeOff } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const IconButton = ({ children }) => (
  <button className="bg-[#5edd9f] w-10 h-10 flex items-center justify-center  hover:scale-110 duration-300 rounded-full">
    {children}
  </button>
);

const Balance = () => {
  return (
    <div className="bg-[#07231c] justify-between rounded-lg  h-[100px] p-4 mt-8 flex items-center w-[460px]">
      <div>
        <div className="flex items-center gap-4 text-white">
          <h5 className="">Available Balance</h5>
          <IoMdEyeOff size={18} />
        </div>
        <p className="font-bold text-2xl mt-1 text-white">#2000</p>
      </div>
      <div className="flex gap-4">
        <IconButton>
          <IoPaperPlaneOutline />
        </IconButton>
        <IconButton>
          <IoIosArrowForward />
        </IconButton>
      </div>
    </div>
  );
};

export default Balance;
