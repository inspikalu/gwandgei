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
    <div className="flex flex-row-reverse ">
      <div
        className={`md:hidden w-[50%] fixed top-0 right-0 h-[100vh] z-20 sideBar nav_links ${
          navOpen ? "hidden" : "flex"
        } flex-col gap-5 p-4 bg-[var(--color-black)]`}
        onClick={() => setNavOpen(!navOpen)}
      >
        <div className="py-2"></div>
        <span className="bar open"></span>
        <div className="py-2"></div>

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
