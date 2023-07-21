import HomePage from "./components/HomePage";
import { desktopClasses, mobileClasses } from "./AppClasses";
import HomepageMob from "./components/MobileComponents/HomepageMob";
const App = () => {
  return (
    <>
      <div className={desktopClasses.mainDivClass}>
        <HomePage />
      </div>
      <div className={mobileClasses.mainDivClass}>
        <HomepageMob />
      </div>
    </>
  );
};

export default App;
