import { MdOutlineSendToMobile } from "react-icons/md";
import { PiNotebookFill } from "react-icons/pi";
import { MdLock } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import App from "../componenets/App";

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
const Guild = () => {
  return (
    <div className="flex justify-between gap-10 mt-6 bg-[#07231c] p-4 rounded-lg w-[500px] py-2">
      <ul className=" text-[#07421f] gap-2 mt-2">
        {links.map(({ id, title, Icon }) => (
          <li
            key={id}
            className="cursor-pointer pb-4 font-semibold text-white hover:scale-105 duration-300"
          >
            <a className="p-2 flex items-center gap-4 ">
              <Icon className="flex" />
              {title}
            </a>
          </li>
        ))}
      </ul>
      <App />
    </div>
  );
};

export default Guild;
