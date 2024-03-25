import img1 from "../../public/resources/webp/img (1).webp";
import img2 from "../../public/resources/webp/img (2).webp";
import img3 from "../../public/resources/webp/img (3).webp";
import img4 from "../../public/resources/webp/img (4).webp";
import img5 from "../../public/resources/webp/img (5).webp";
import img6 from "../../public/resources/webp/img (6).webp";
import img7 from "../../public/resources/webp/img (7).webp";
import img8 from "../../public/resources/webp/img (8).webp";
import img9 from "../../public/resources/webp/img (9).webp";
import img10 from "../../public/resources/webp/img (10).webp";
import img11 from "../../public/resources/webp/img (11).webp";
import img12 from "../../public/resources/webp/img (12).webp";

export default function Resources() {
  return (
    <>
      <div id="resources" loading="lazy">
        <h1 className="text-center text-[var(--color-main)] text-xl font-bold my-8">
          Resources
          <div className="my-4 w-[90%] mx-auto grid gap-4 grid-cols-2 md:grid-cols-4 resources">
            <img loading="lazy" src={img1} alt={img1} />
            <img loading="lazy" src={img2} alt={img2} />
            <img loading="lazy" src={img3} alt={img3} />
            <img loading="lazy" src={img4} alt={img4} />
            <img loading="lazy" src={img5} alt={img5} />
            <img loading="lazy" src={img6} alt={img6} />
            <img loading="lazy" src={img7} alt={img7} />
            <img loading="lazy" src={img8} alt={img8} />
            <img loading="lazy" src={img9} alt={img9} />
            <img loading="lazy" src={img10} alt={img10} />
            <img loading="lazy" src={img11} alt={img11} />
            <img loading="lazy" src={img12} alt={img12} />
          </div>
        </h1>
      </div>
    </>
  );
}
