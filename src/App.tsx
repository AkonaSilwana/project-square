import Header from "./components/Header";
import Footer from "./components/Footer";
import Brands from "./components/Brands";
import Hero from "./components/Hero";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <CaseStudies />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
