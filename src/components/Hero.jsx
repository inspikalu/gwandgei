import whatsappLogo from "../assets/whatsapp.svg";
import child from "../assets/img (3).png";
export default function Hero() {
  return (
    <>
      <div className="hero my-5 mx-auto w-[90%] flex gap-4 flex-col md:flex-row justify-center items-center">
        <div className="left flex flex-col gap-4">
          <h1 className="text text-xl font-extrabold w-[30ch]">
            Empowering Women and Girls From Across Africa
          </h1>
          <p className="text-sm w-[50ch]">
            Bridging divides, fostering leadership, and igniting opportunities
            for growth and prosperity continent-wide.
          </p>
          <div className="flex items-center  gap-4">
            <button className="bg-[var(--color-main)] font-[inherit] text-white px-2 py-1 rounded-md">
              Donate
            </button>

            <a
              href="tel:2348034637460"
              className="flex items-center justify-center"
            >
              <img src={whatsappLogo} alt="Whatsapp Logo" className="w-8 h-8" />{" "}
              +2348034637460
            </a>
          </div>
        </div>

        <div className="right w-[100%] md:w-[80vh]">
          <img src={child} alt="An image of a child" />
        </div>
      </div>
    </>
  );
}
