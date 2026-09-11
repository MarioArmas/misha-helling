import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Equitacion from "./components/Equitacion";
import PremiumBarf from "./components/PremiumBarf";
import Libros from "./components/Libros";
import TheHive from "./components/TheHive";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Equitacion />
      <PremiumBarf />
      <Libros />
      <TheHive />
      <Footer />
    </div>
  );
}

export default App;
