import "./App.css";
import { Header } from "./components/header";
import { ProfilePage } from "./components/profile";
import { SkillsPage } from "./components/skills";
import { EducationPage } from "./components/education";
import { ContactUSPage } from "./components/contactUs";
import { ServicesPage } from "./components/services";
import { ProjectsPage } from "./components/projects";
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
      <div id={"Projects"}>
        <ProjectsPage />
      </div>
      <div id={"Education"}>
        <EducationPage />
      </div>
      <div id={"Services"}>
        <ServicesPage />
      </div>
      <div id={"Contact"}>
        <ContactUSPage />
      </div>
    </div>
  );
};

export default App;
