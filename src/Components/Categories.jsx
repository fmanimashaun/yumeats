import React from 'react';

const importAll = (r) => {
  const images = {};
  r.keys().forEach((key) => {
    const imageName = key.replace(/^.+\/([^/]+)\.[^.]+$/, '$1'); // Extracts the image name from the path
    images[imageName] = {
      name: imageName,
      path: r(key),
      id: r(key).match(/\.([^.]+)\./)[1], // Assign a unique key to each image object
    };
  });
  return Object.values(images);
};

const Categories = () => {
  const categoryImages = importAll(
    require.context('assets/img/categories', false, /\.(png|jpe?g|svg)$/),
  );

  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h3 className="text-orange-500 font-bold text-2xl text-center py-2">
        Trending Categories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-1 py-5 px-2">
        {categoryImages.map((item) => (
          <div key={item.id} className="p-4 flex justify-center items-center hover:scale-105 duration-300">
            <img src={item.path} alt={item.name} className="object-contain rounded-xl w-60 h-20 p-1 cursor-pointer shadow-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
