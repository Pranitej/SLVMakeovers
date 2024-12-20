import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Images from "./components/Images";
import About from "./components/About";
import Contact from "./components/Contact";
import Slogan from "./components/Slogan";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Images />
      <About />
      {/* <Contact /> */}
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;
