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
    <div className="p-4 w-70 text-white fixed md:sticky top md:left-0 top-0 bg-[#07231c]">
      <ul className=" text-[#07421f]">
        {links.map(({ id, title, Icon, to }) => (
          <li
            key={id}
            className=" flex gap-4 px-4 cursor-pointer py-6 font-semibold text-white hover:scale-105 duration-300"
          >
            <a className="flex gap-4 mb-1 " href={to}>
              <Icon className="mt-1" />
              {title}
            </a>
          </li>
        ))}
      </ul>
      <button className="text-white bg-[#ff0600] rounded-md py-2 px-6 mt-auto">
        <icon src={IoLogOutOutline} alt="" />
        LogOut
      </button>
    </div>
  );
};

export default SideBar;
