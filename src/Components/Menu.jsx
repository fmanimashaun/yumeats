import React, { useState} from 'react';
import { mealData } from 'data/data';
import { HiArrowNarrowRight } from 'react-icons/hi';

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

const Menu = () => {
  const menuImages = importAll(
    require.context('assets/img/meals', false, /\.(png|jpe?g|svg)$/),
  );

  const updatedMeals = mealData.map((item) => {
    const matchingImage = menuImages.find(
      (image) => image.name.toLowerCase() === item.name.toLowerCase(),
    );

    if (matchingImage) {
      return {
        ...item,
        img: matchingImage.path,
      };
    }

    return item;
  });

  const [meals, setMeals] = useState(updatedMeals);
  const [activeCategory, setActiveCategory] = useState('All');

  const filterMeal = (category) => {
    if (category === 'All') {
      setMeals(updatedMeals);
      setActiveCategory('All');
      return;
    }
    const filteredMeal = updatedMeals.filter(
      (meal) => meal.category.toLowerCase() === category.toLowerCase(),
    );
    setMeals(filteredMeal);
    setActiveCategory(category);
  };

  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h3 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meals
      </h3>
      <div className="flex flex-col lg:flex-row justify-center mb-4">
        <button
          className={
            activeCategory === 'All'
              ? 'bg-white m-1 border-orange-700 text-orange-700'
              : 'bg-orange-700 m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700'
          }
          type="button"
          onClick={() => filterMeal('All')}>
          All
        </button>
        <button
          className={
            activeCategory === 'Pizza'
              ? 'bg-white m-1 border-orange-700 text-orange-700'
              : 'bg-orange-700 m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700'
          }
          type="button"
          onClick={() => filterMeal('Pizza')}>
          Pizza
        </button>
        <button
          className={
            activeCategory === 'Chicken'
              ? 'bg-white m-1 border-orange-700 text-orange-700'
              : 'bg-orange-700 m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700'
          }
          type="button"
          onClick={() => filterMeal('Chicken')}>
          Chicken
        </button>
        <button
          className={
            activeCategory === 'Salad'
              ? 'bg-white m-1 border-orange-700 text-orange-700'
              : 'bg-orange-700 m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700'
          }
          type="button"
          onClick={() => filterMeal('Salad')}>
          Salad
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {meals.map((item) => (
          <div
            key={item.id}
            className="border-none hover:scale-105 duration-330">
            <img
              src={item.img}
              alt={item.name}
              className="rounded-lg w-full h-[200px] object-cover"
            />
            <div className="flex justify-between py-0 px-4">
              <p className="font-bold">{item.name}</p>
              <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold">
                {item.price}
              </p>
            </div>
            <button
              type="button"
              className="flex items-center px-4 -mt-2 border-none cursor-pointer text-indigo-600 text-center">
              View More <HiArrowNarrowRight className="w-5 ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
