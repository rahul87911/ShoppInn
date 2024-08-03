import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from './../../../data/mens_kurta';

const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const totalItems = mens_kurta.slice(0, 10).length;
  const visibleItems = responsive[1024].items;

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  const items = data.slice(0, 10).map((item, index) => (
    <div key={index} className="p-2">
      <HomeSectionCard product={item} />
    </div>
  ));

  const atStart = activeIndex === 0;
  const atEnd = activeIndex >= totalItems - visibleItems;

  return (
    <div className="px-4 lg:px-8 py-6 bg-white shadow-lg rounded-lg border-t-4 border-blue-500">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-extrabold text-gray-800">{sectionName}</h2>
      </div>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {!atEnd && (
          <button
            className="z-50 absolute top-32 right-0 transform translate-x-1/2 rotate-90 bg-gray-100 text-black p-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200"
            aria-label="next"
            onClick={slideNext}
          >
            <KeyboardArrowLeftIcon
              style={{ transform: "rotate(90deg)", color: "black" }}
            />
          </button>
        )}

        {!atStart && (
          <button
            className="z-50 absolute top-32 left-0 transform -translate-x-1/2 -rotate-90 bg-gray-100 text-black p-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200"
            aria-label="previous"
            onClick={slidePrev}
          >
            <KeyboardArrowLeftIcon
              style={{ transform: "rotate(90deg)", color: "black" }}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
