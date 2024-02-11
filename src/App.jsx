import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./componenets/SideBar";
import Main from "./componenets/Main";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <div className="h-screen flex items-stretch">
        <SideBar />
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
