import Block from "./components/Block/Block";
import EducationItem from "./components/EducationItem/EducationItem";
import kgeu from "../../assets/educations/kgeu.jpg";
import Tools from "./components/Tools/Tools";
import Jobs from "./components/Jobs/Jobs.js";
import { jobs, tools } from "../../data/data.js";
import "./MainSide.scss";

const MainSide = () => {
  return (
    <div className="main-side">
      <Block title="Education">
        <EducationItem
          educationTitle={"Kazan State Power Engineering University"}
          educationProfile={"Software Development Technologies"}
          educationYears={"2015 - 2020"}
          educationImg={kgeu}
        />
      </Block>
      <Block title="Tools/Skills">
        <Tools tools={tools} />
      </Block>
      <Block title="Latest jobs">
        <Jobs jobs={jobs} />
      </Block>
    </div>
  );
};
export default MainSide;
