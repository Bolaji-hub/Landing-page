import { IoMdHome } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoIosChatbubbles } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

const links = [
  {
    id: 1,
    title: "Home",
    to: "/home",
    Icon: IoMdHome,
  },
  {
    id: 2,
    title: "Scheduler",
    to: "/scheduler",
    Icon: FaRegClock,
  },

  {
    id: 3,
    title: "Notifications",
    to: "/notifications",
    Icon: IoIosNotifications,
  },
  {
    id: 4,
    title: "Profile",
    to: "/profile",
    Icon: CgProfile,
  },
  {
    id: 5,
    title: "Chats",
    to: "/chat",
    Icon: IoIosChatbubbles,
  },
];

const SideBar = () => {
  return (
    <div className="flex flex-col text-white sticky bg-[#07231c] py-12 basis-60">
      <h2 className=" self-center mb-10">LOGO</h2>
      <ul className="text-[#07421f]">
        {links.map(({ id, title, Icon, to }) => (
          <li
            key={id}
            className="px-4 py-5 cursor-pointer font-semibold text-white hover:scale-105 duration-300"
          >
            <a className="flex gap-4" href={to}>
              <Icon size={20} className="" />
              {title}
            </a>
          </li>
        ))}
      </ul>
      <button className="flex items-center self-center text-white text-sm bg-[#ff0600] rounded-md py-2 px-4 mt-auto">
        <IoLogOutOutline size={18} />
        LogOut
      </button>
    </div>
  );
};

export default SideBar;
