import NotificationList from "../componenets/Notifications";

const today = Array(4)
  .fill(null)
  .map(() => ({
    text: "hdbsjhdfgdgfvdksgv",
    time: "9:20am",
  }));

const yesterday = Array(10)
  .fill(null)
  .map(() => ({
    text: "hdbsjhdfgdgfvdksgv",
    time: "9:20am",
  }));

const Notifications = () => {
  return (
    <div className="flex flex-col gap-8">
      <NotificationList title="Today" notifications={today} />
      <NotificationList title="Yesterday" notifications={yesterday} />
    </div>
  );
};

export default Notifications;
