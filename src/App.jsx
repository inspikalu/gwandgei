import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import About from "./components/About";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <div className="flex flex-row-reverse">
      <div
        className={`md:hidden sideBar nav_links ${
          navOpen ? "hidden" : "flex"
        } flex-col gap-5 p-4 bg-[var(--color-black)]`}
        onClick={() => setNavOpen(!navOpen)}
      >
        <ul className=" md:flex flex-row gap-5 mr-auto text-white">
          <li>
            <a href="#mission">Mission</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
        <button className="bg-[var(--color-main)] font-[inherit] text-white px-2 py-1 rounded-md">
          Donate
        </button>
      </div>
      <div className="App">
        <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
        <Hero />
        <Mission />
        <About />
        <Resources />
        <Footer />
      </div>
    </div>
  );
}

export default App;
