import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/Skills";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
