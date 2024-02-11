import Hero from "../componenets/Hero";
import Balance from "../componenets/Balance";
import Options from "../componenets/Options";
import Guild from "../componenets/Guild";
import Transactions from "../componenets/Transactions";

const Home = () => {
  return (
    <>
      <Hero />
      <div className=" flex justify-between p-4 gap-6">
        <div>
          <Balance />
          <Options />
          <Guild />
        </div>
        <Transactions />
      </div>
    </>
  );
};

export default Home;
