import whatsappLogo from "../assets/whatsapp.svg";
import child from "../assets/img (3).png";
export default function Hero() {
  return (
    <>
      <div className="hero my-24 mx-auto w-[90%] md:w-[80%] lg:w-[70%] flex gap-4 flex-col md:flex-row justify-center items-center">
        <div className="left flex flex-col gap-4">
          <h1 className="text-[var(--color-black)] text-xl font-extrabold w-[30ch]">
            Empowering Women and Girls From Across Africa
          </h1>
          <p className="text-base w-[50ch]">
            Bridging divides, fostering leadership, and igniting opportunities
            for growth and prosperity continent-wide.
          </p>
          <div className="flex items-center  gap-4">
            <button className="bg-[var(--color-main)] font-[inherit] text-white px-2 py-1 rounded-md">
              Donate
            </button>

            <a
              href="https://wa.link/xtyxnt"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center"
            >
              <img src={whatsappLogo} alt="Whatsapp Logo" className="w-8 h-8" />{" "}
              &nbsp; +2348034637460
            </a>
          </div>
        </div>

        <div className="right w-[80%] md:w-[80vh]">
          <img src={child} alt="An image of a child" />
        </div>
      </div>
    </>
  );
}
