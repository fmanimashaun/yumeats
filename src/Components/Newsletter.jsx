import React from 'react';

const Newsletter = () => (
  <div className="max-w-[1520px] m-auto text-white p-4">
    <div className="mx-auto grid lg:grid-cols-3">
      <div className="lg:col-span-2 my-4">
        <h3>Need advice on how to imporove your flow?</h3>
        <p>Sign up to jopin our newsletter and stay up to date.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 flex w-full rounded-md text-black"
        />
        <button
          type="button"
          className="bg-[#00df9a] text-white p-3 rounded-md w-[200px] ml-4 mt-6 mr-6 mb-6"
        >
          Notify me
        </button>
      </div>
      <p>
        We are concerned about the secutity of your data, rea
        {' '}
        <span className="text-[#00df9a]"> Privacy Policy</span>
      </p>
    </div>
    <hr className="my-8 border-gray-700 border-1 border-opacity-75" />
  </div>
);

export default Newsletter;
