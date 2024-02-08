import { RxAvatar } from "react-icons/rx";

const Profile = () => {
  return (
    <div className="flex gap-2">
      <RxAvatar size={50} className="flex gap-2 rounded-lg mt-1" />
      <div className="mt-2">
        <h3 className="text-sm">Muiz Owolabi</h3>
        <h6 className="text-sm font-light">TukayID:theFrontendGuy</h6>
      </div>
    </div>
  );
};

export default Profile;
