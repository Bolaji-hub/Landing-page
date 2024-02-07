import Profile from "../componenets/Profile";

const Hero = () => {
  return (
    <div className=" flex  justify-between  font-bold ">
      <p className="text-2xl ">Welcome to Tukay</p>
      <h1 className="text-6xl font-medium flex-col ">Owolabi</h1>
      <Profile />
    </div>
  );
};

export default Hero;
