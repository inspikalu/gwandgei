// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import facebook from "../assets/facebook.svg";
export default function Footer() {
  return (
    <>
      <div
        id="contacts"
        className="footer flex flex-col bg-[var(--color-black)] min-h-[12rem] w-[100%]"
      >
        <div className="mt-3"></div>
        <h2 className="text-2xl font-extrabold text-center text-[var(--color-main)] block">
          Contacts
        </h2>
        {/* <FontAwesomeIcon icon={"fa-brand fa-facebook"} /> */}
        <div className="footer_items w-[100%] py-4 relative">
          <div className="hr w-[100%] bg-white h-1 "></div>
          <div className="grid grid-cols-4 gap-4 w-[70%] md:w-[50%]">
            <a className="social_link" href="/" target="_blank">
              <img src={facebook} alt="" />
            </a>
            <a className="social_link" href="/" target="_blank">
              <img src={facebook} alt="" />
            </a>
            <a className="social_link" href="/" target="_blank">
              <img src={facebook} alt="" />
            </a>
            <a className="social_link" href="/" target="_blank">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>

        <a
          href="/"
          className="text-center w-full logo text-xl font-black flex flex-row items-center justify-center mt-6 mb-2 gap-[2px]"
        >
          GWANDGEI <div className="circle w-3 h-3 rounded-xl"></div>
        </a>
        <p className="text-center text-white block">
          {" "}
          &copy; Copyright gwandgei corporation{" "}
        </p>

        <ul className="footer_links flex flex-row flex-wrap items-center justify-center w-[80%] gap-7 mx-auto my-3 text-white">
          <li>
            <a href="#mission text">Mission</a>
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
      </div>
    </>
  );
}
