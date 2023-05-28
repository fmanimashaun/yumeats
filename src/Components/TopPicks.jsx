import React from 'react';
import { topPicks } from 'data/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const importAll = (r) => {
  const images = {};
  r.keys().forEach((key) => {
    const imageName = key.replace(/^.+\/([^/]+)\.[^.]+$/, '$1'); // Extracts the image name from the path
    images[imageName] = {
      name: imageName.replace(/_/g, ' '), // Replaces underscores with spaces
      path: r(key),
    };
  });
  return Object.values(images);
};

const TopPicks = () => {
  const topPicksImages = importAll(
    require.context('assets/img/toppicks', false, /\.(png|jpe?g|svg)$/),
  );

  const updatedTopPicks = topPicks.map((item) => {
    const matchingImage = topPicksImages.find(
      (image) => image.name.toLowerCase() === item.title.toLowerCase(),
    );

    if (matchingImage) {
      return {
        ...item,
        img: matchingImage.path,
      };
    }

    return item;
  });

  return (
    <div className="hidden lg:block">
      <h3 className="text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h3>
      <div className="hidden lg:flex max-w-[1520px] m-auto p-2">
        <Splide
          options={{
            perPage: 4,
            gap: '0.5rem',
            drag: 'free',
            arrows: false,
          }}
        >
          {updatedTopPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="rounded-3xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                  <p className="px-4 pt-4 font-bold">{item.title}</p>
                  <p className="px-4">{item.price}</p>
                  <button
                    type="button"
                    className="border-dotted border-white text-white mx-4 absolute bottom-4"
                  >
                    Add to Card
                  </button>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default TopPicks;
