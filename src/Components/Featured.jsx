import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from "react-icons/rx";

const importAll = (r) => {
  const images = {};
  r.keys().forEach((key) => {
    const imageName = key.replace(/^.+\/([^/]+)\.[^.]+$/, '$1'); // Extracts the image name from the path
    images[imageName] = {
      name: imageName,
      path: r(key),
      key: r(key).match(/\.([^.]+)\./)[1], // Assign a unique key to each image object
    };
  });
  return Object.values(images);
};

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredImages = importAll(
    require.context('assets/img/featured', false, /\.(png|jpe?g|svg)$/),
  );

  return (
    <div className="max-w-[1520px] h-[500px] w-full p-4 relative mx-auto group">
      <img
        src={featuredImages[currentIndex].path}
        alt={featuredImages[currentIndex].name}
        className="block w-full h-full object-cover rounded-2xl duration-500"
      />
      <div className=" hidden group-hover:flex justify-between items-center absolute w-full h-full top-0 left-0 px-8">
        <button
          type="button"
          onClick={() =>
            setCurrentIndex(
              (currentIndex - 1 + featuredImages.length) %
                featuredImages.length,
            )
          }
          className="bg-orange-700 text-white rounded-full text-2xl p-2 cursor-pointer">
          <BsChevronCompactLeft />
        </button>
        <button
          type="button"
          onClick={() =>
            setCurrentIndex((currentIndex + 1) % featuredImages.length)
          }
          className="bg-orange-700 text-white rounded-full text-2xl p-2 cursor-pointer">
          <BsChevronCompactRight />
        </button>
      </div>
      <div
        className="flex justify-center absolute w-full bottom-4 left-0">
        {featuredImages.map((image, index) => (
          <button
            type="button"
            key={image.key}
            onClick={() => setCurrentIndex(index)}
            className="cursor-pointer p-0 border-none">
            {currentIndex === index ? (
              <RxDotFilled size={50} className="text-white" />
            ) : (
              <RxDotFilled size={50} className="text-gray-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Featured;
