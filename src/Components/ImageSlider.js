import ImageData from "./ImageData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevslide = () => {
    current === 0 ? setCurrent(ImageData.length - 1) : setCurrent(current - 1);
  };

  const nextslide = () => {
    current === ImageData.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  return (
    <section className="slider">
      <AiOutlineArrowLeft className="arrowleft" onClick={prevslide} />
      <AiOutlineArrowRight className="arrowright" onClick={nextslide} />
      {ImageData.map((data, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {current === index && (
              <div>
                <img src={data.image} alt={data.title} className="image" />
                <p>{data.title}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
