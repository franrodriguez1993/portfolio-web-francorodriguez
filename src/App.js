import "./App.css";
import Navbar from "./components/accesories/Navbar";
import LandingPage from "./routes/LandingPage";
import { useRef } from "react";
function App() {
  const projectRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar
        scrollToSection={scrollToSection}
        contactRef={contactRef}
        projectRef={projectRef}
        skillsRef={skillsRef}
      />

      <LandingPage
        contactRef={contactRef}
        projectRef={projectRef}
        skillsRef={skillsRef}
      />
    </div>
  );
}

export default App;
