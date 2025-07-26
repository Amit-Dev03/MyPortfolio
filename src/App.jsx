import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import Contact from "./components/Contact";
import LogoScroller from "./components/LogoScroller";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <LogoScroller />
      <TechnicalSkills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
