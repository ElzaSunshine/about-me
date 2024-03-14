import "./App.scss";
import Aside from "./components/Aside/Aside";
import MainSide from "./components/MainSide/MainSide";

function App() {
  return (
    <div className="main">
      <Aside />
      <MainSide />
    </div>
  );
}

export default App;
