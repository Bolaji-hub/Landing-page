import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Notifications from "../pages/Notifications";
import Scheduler from "../pages/Scheduler";
import Profile from "../pages/Profile";
import Chat from "../pages/Chat";

const Main = () => {
  return (
    <main className="bg-[#123a30] flex-1 text-white p-10 overflow-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Scheduler" element={<Scheduler />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </main>
  );
};

export default Main;
