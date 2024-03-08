import img1 from "../../public/resources/img (1).jpg";
import img2 from "../../public/resources/img (2).jpg";
import img3 from "../../public/resources/img (3).jpg";
import img4 from "../../public/resources/img (4).jpg";
import img5 from "../../public/resources/img (5).jpg";
import img6 from "../../public/resources/img (6).jpg";
import img7 from "../../public/resources/img (7).jpg";
import img8 from "../../public/resources/img (8).jpg";
import img9 from "../../public/resources/img (9).jpg";
import img10 from "../../public/resources/img (10).jpg";
import img11 from "../../public/resources/img (11).jpg";
import img12 from "../../public/resources/img (12).jpg";

export default function Resources() {
  return (
    <>
      <div id="resources">
        <h1 className="text-center text-[var(--color-main)] text-xl font-bold my-8">
          Resources
          <div className="my-4 w-[90%] mx-auto grid gap-4 grid-cols-2 md:grid-cols-4 resources">
            <img src={img1} alt={img1} />
            <img src={img2} alt={img2} />
            <img src={img3} alt={img3} />
            <img src={img4} alt={img4} />
            <img src={img5} alt={img5} />
            <img src={img6} alt={img6} />
            <img src={img7} alt={img7} />
            <img src={img8} alt={img8} />
            <img src={img9} alt={img9} />
            <img src={img10} alt={img10} />
            <img src={img11} alt={img11} />
            <img src={img12} alt={img12} />
          </div>
        </h1>
      </div>
    </>
  );
}
