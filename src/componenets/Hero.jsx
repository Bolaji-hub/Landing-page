import Profile from "../componenets/Profile";

const Hero = () => {
  return (
    <div className="flex justify-between font-bold">
      <div>
        <p className="text-xl font-light ">Welcome to Tukay</p>
        <h1 className="text-4xl font-medium">Owolabi</h1>
      </div>
      <Profile />
    </div>
  );
};

export default Hero;
