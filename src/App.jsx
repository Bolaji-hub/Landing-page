import SideBar from "./componenets/SideBar";
import Main from "./componenets/Main";

const App = () => {
  return (
    <div className="min-h-screen flex items-stretch">
      <SideBar />
      <Main />
    </div>
  );
};

export default App;
