import Hero from "./Hero";
import Balance from "./Balance";
import Options from "./Options";

const Main = () => {
  return (
    <main className="bg-[#123a30] flex-1 text-white p-10">
      <Hero />
      <Balance />
      <Options />
    </main>
  );
};

export default Main;
