/* eslint-disable react/prop-types */
import { GoBell } from "react-icons/go";

const Notification = ({ text, time }) => {
  return (
    <div className="flex items-center mb-2 ">
      <GoBell size={20} />
      <p className=" mr-auto ml-4"> {text}</p>
      <span className=" pr-8">{time}</span>
    </div>
  );
};

export default Notification;
