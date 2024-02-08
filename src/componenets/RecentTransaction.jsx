// eslint-disable-next-line react/prop-types
const RecentTransaction = ({ Icon, text }) => {
  return (
    <div className="flex gap-5 mt-6 ">
      <Icon size={50} className=" hover:scale-105 duration-300 mt-2" />
      <h3 className="mt-2 text-sm">{text}</h3>
    </div>
  );
};

export default RecentTransaction;
