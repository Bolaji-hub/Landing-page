import Kyc from "../componenets/Kyc";
import Security from "../componenets/Security";

const Profiles = () => {
  return (
    <div className="flex gap-5">
      <Security />
      <Kyc />
    </div>
  );
};

export default Profiles;
