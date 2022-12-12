import React from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Gallery.css";

const galleryImages = [
  images.Gallery1,
  images.Gallery2,
  images.Gallery3,
  images.Gallery4,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 500;
    } else {
      current.scrollLeft += 500;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="The Hidden Street" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At commodi
          unde ratione explicabo ea! Inventore.
        </p>
        <button className="custom__button"> View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => {
            return (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image- ${index + 1}`}
              >
                <img src={image} alt="gallery" />
              </div>
            );
          })}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
