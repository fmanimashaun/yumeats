import React from 'react'
import appImage from 'assets/img/quick-delivery-app.webp';

const QuickDelivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center mb-4">
        Quick Delivery App
      </h3>
      <div className="max-w-[1240px] w-full mx-auto grid md:grid-cols-2 md:items-center">
        <img
          className="w-[550px] mx-auto my-4 order-1 md:order-0"
          src={appImage}
          alt="quick delivery app"
        />
        <div className="flex flex-col justify-center order-0 md:order-1">
          <p className="text-[#00df9a] font-bold">Get the App</p>
          <h3 className="text-2xl md:text-3xl lg:4xl font-bold py-2">
            Limitless Convenience on-demand
          </h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
            voluptate reprehenderit dolore autem cum ullam sed odit
            perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuickDelivery
