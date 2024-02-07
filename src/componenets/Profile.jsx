import { RxAvatar } from "react-icons/rx";

const Profile = () => {
  return (
    <div className="flex gap-2">
      <RxAvatar className="flex gap-2 rounded-lg mt-1" />
      <div>
        <h3>Muiz Owolabi</h3>
        <h6>TukayID:theFrontendGuy</h6>
      </div>
    </div>
  );
};

export default Profile;
