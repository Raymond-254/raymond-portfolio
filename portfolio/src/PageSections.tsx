import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";

export default function PageSections() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
