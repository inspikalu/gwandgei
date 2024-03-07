function Navbar() {
  return (
    <>
      <div className="nav fixed top-0 left-0 w-[100%] bg-white shadow-lg flex justify-between items-center flex-row min-h-[4rem] px-[1rem] ">
        <a
          href="/"
          className="logo text-xl font-black flex flex-row items-center gap-[2px]"
        >
          GWANDGEI <div className="circle w-3 h-3 rounded-xl"></div>
        </a>
        <div className="nav_links hidden md:flex">
          <ul className=" md:flex flex-row gap-2 mr-auto">
            <li>
              <a href="#">Mission</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>
        <button className="bg-[var(--color-main)] font-[inherit] text-white px-2 py-1 rounded-md">
          Donate
        </button>
      </div>
    </>
  );
}

export default Navbar;
