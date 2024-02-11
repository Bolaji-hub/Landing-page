import Notification from "./Notification";

/* eslint-disable react/prop-types */
const Notifications = ({ title, notifications }) => {
  return (
    <div className="bg-[#0A221C] px-10 py-6 rounded-lg ">
      <h2 className="text-lg mt-4 mb-4">{title}</h2>
      {notifications.map((notification, i) => (
        <Notification key={i} {...notification} />
      ))}
    </div>
  );
};

export default Notifications;
