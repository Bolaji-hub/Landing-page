import Profile from "../componenets/Profile";

const Hero = () => {
  return (
    <div className="flex justify-between  font-bold ">
      <h2 className="text-2xl">
        Welcome to Tukay <span className="text-6xl font-medium ">Owolabi</span>
      </h2>
      <Profile />
    </div>
  );
};

export default Hero;
