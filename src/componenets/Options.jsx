import { MdOutlineSendToMobile } from "react-icons/md";
import { PiNotebookFill } from "react-icons/pi";
import { MdLock } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";

const links = [
  {
    id: 1,
    title: "Send",
    Icon: MdOutlineSendToMobile,
  },
  {
    id: 2,
    title: "Recieve",
    Icon: PiNotebookFill,
  },
  {
    id: 3,
    title: "Save",
    Icon: MdLock,
  },
  {
    id: 4,
    title: "Request",
    Icon: IoIosWifi,
  },
];
const Options = () => {
  return (
    <div className="flex gap-4 mt-6">
      <ul className=" text-[#07421f] flex gap-10 mt-2">
        {links.map(({ id, title, Icon }) => (
          <li
            key={id}
            className="cursor-pointer pb-4 font-semibold text-white hover:scale-105 duration-300"
          >
            <a className="p-2 items-center ">
              <Icon className=" bg-[#09231c] rounded-lg mb-2 h-[50px] w-[75px]" />
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
