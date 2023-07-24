import HomePage from "./pages/HomePage";
import { desktopClasses, mobileClasses } from "./AppClasses";
import HomepageMob from "./pages/HomepageMob";
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
