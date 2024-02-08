import Hero from "./Hero";
import Balance from "./Balance";
import Options from "./Options";
import Guild from "./Guild";
import Transactions from "./Transactions";

const Main = () => {
  return (
    <main className="bg-[#123a30] flex-1 text-white p-10 overflow-auto">
      <Hero />
      <div className=" flex justify-between p-4 gap-6">
        <div>
          <Balance />
          <Options />
          <Guild />
        </div>
        <Transactions />
      </div>
    </main>
  );
};

export default Main;
