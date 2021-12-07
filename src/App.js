import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Footer from "./components/main/Footer";
import Services from "./components/main/Services";
import Navs from "./components/main/Navs";
import NotFound from "./components/load&errors/NotFound";
import Contact from "./components/load&errors/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navs />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about/" element={<About />} />
          <Route exact path="/services/" element={<Services />} />
          <Route exact path="/contact/" element={<Contact />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
