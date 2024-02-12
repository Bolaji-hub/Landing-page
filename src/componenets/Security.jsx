import { IoIosArrowDown } from "react-icons/io";

const Security = () => {
  return (
    <div className="p-4 py-4 px-2 bg-[#0a221c] rounded-lg flex-1">
      <div className="rounded-md bg-[#113a2f] p-2">
        <div className="flex gap-2 p-6 mb-2 items-center border-b border-solid border-[#0a221c] border-opacity-45 mt-2">
          <IoIosArrowDown className="bg-[#5edd9f] w-7 h-7 flex items-center justify-center  hover:scale-110 duration-300 rounded-full text-black" />
          <div>
            <h3 className="font-semibold">Security</h3>
            <p className="text-[#8a9390] text-xs">
              Password and Transaction pins
            </p>
          </div>
        </div>
        <div className=" mt-6 border-b border-solid border-[#5edd9f] mb-6 p-6 px-8 py-8 mx-10">
          <button className="text-black bg-[#4bf0a5] py-2 px-8 rounded-md">
            Password
          </button>
          <button className="text-white bg-[#0a221c] py-2 px-6 rounded-md">
            Transaction Pin
          </button>
        </div>
        <div className=" p-4 px-10 font-medium">
          <h3 className="mb-2">Current Password</h3>
          <p className="text-[#2e5248]">Enter Current Password</p>
          <h3 className="mt-8">New Password</h3>
          <p className="text-[#2e5248] mt-2 mb-8">Enter new Password</p>
          <button className="bg-[#4bf0a5] text-black px-8 py-4 rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;
