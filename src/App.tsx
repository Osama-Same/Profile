import "./App.css";
import { Header } from "./components/header";
import { ProfilePage } from "./components/profile";
import { SkillsPage } from "./components/skills";
import { EducationPage } from "./components/education";
import { ContactUSPage } from "./components/contactUs";
const App = () => {
  return (
    <div className="App">
      <Header />
      <div id={"About"}>
        <ProfilePage />
      </div>
      <div id={"Skills"}>
        <SkillsPage />
      </div>
      <div id={"Education"}>
        <EducationPage />
      </div>
      <div id={"Contact"}>
        <ContactUSPage />
      </div>
    </div>
  );
};

export default App;
