import crowd from "../assets/img (5).webp";

export default function Mission() {
  return (
    <>
      <div id="mission">
        <h2 className="text-xl font-bold text-[var(--color-main)] text-center w-[100%]">
          Our Mission
        </h2>

        <div className="mission my-24 mx-auto w-[90%] md:w-[80%] lg:w-[70%] flex gap-5 flex-col md:flex-row justify-center items-center">
          <div className="left w-[80%] md:w-[80vh]">
            <img
              src={crowd}
              alt="An image of a child"
              className="md:min-w-[20rem] h-auto "
            />
          </div>

          <div className="right flex flex-col gap-4 text-base">
            Our mission is to empower indigent women, and children to live a
            fulfilled life, free from intimidation, violence, exploitation and
            other forms of vices that make them vulnerable in a male dominated
            society.
          </div>
        </div>
      </div>
    </>
  );
}
