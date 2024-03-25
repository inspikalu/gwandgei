function Navbar({ navOpen, setNavOpen }) {
  return (
    <>
      <div className="nav w-[100%] bg-white shadow-lg flex justify-between items-center flex-row min-h-[4rem] px-[1rem] ">
        <a
          href="/"
          className="logo text-xl font-black flex flex-row items-center gap-[2px]"
        >
          GWANDGEI <div className="circle w-3 h-3 rounded-xl"></div>
        </a>
        <div className="nav_links hidden md:flex items-center">
          <ul className=" md:flex flex-row gap-2 mr-auto">
            <li>
              <a href="#mission">Mission</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#vision">Our Vision</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
          <button className="ml-12 bg-[var(--color-main)] font-[inherit] text-white px-2 py-1 rounded-md">
            Donate
          </button>
        </div>
        <span
          className={`bar ${"closed"} block md:hidden text-xl font-bold cursor-pointer`}
          onClick={() => setNavOpen(!navOpen)}
        ></span>
      </div>
    </>
  );
}

export default Navbar;
