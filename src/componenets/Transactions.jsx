import { RxAvatar } from "react-icons/rx";
import RecentTransaction from "./RecentTransaction";

const transactionsItems = [
  {
    id: 1,
    text: "#2000 Recieved from Oyinkansola Maryam. Today 12:30PM",
    Icon: RxAvatar,
  },
  {
    id: 2,
    text: "#2000 Transfer to Mubarak Owolabi. Today 12:30PM",
    Icon: RxAvatar,
  },
  {
    id: 3,
    text: "#2000 Transfer to Segun Remilekun. Yesterday 3:00PM",
    Icon: RxAvatar,
  },
  {
    id: 4,
    text: "#2000 Transfer to Awodokun Oluwatomiwa. Friday 12:03PM",
    Icon: RxAvatar,
  },
  {
    id: 5,
    text: "#2000 Recieved from Oluwafemi Daniel. Today 12:09PM",
    Icon: RxAvatar,
  },
  {
    id: 6,
    text: "#2000 Recieved from Oluwatomiwa Bolaji. Thursday 12:30PM",
    Icon: RxAvatar,
  },
];

const Transactions = () => {
  return (
    <div className="bg-[#07231c] rounded-lg text-white p-6">
      <h1 className="text-xl">Recent Transactions</h1>
      <div>
        {transactionsItems.map((item) => (
          <RecentTransaction key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
