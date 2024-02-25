import "./App.scss";
import Aside from "./components/Aside/Aside";
import MainSide from "./components/MainSide/MainSide";

function App() {
  return (
    <div className="body">
      <div className="wrapper">
        <div className="main">
          <Aside />
          <MainSide />
        </div>
      </div>
    </div>
  );
}

export default App;
