import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const FooterNav = () => (
  <div className="max-w-[1520px] mx-auto px-4 py-2">
    <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="">
        <h3 className="w-full text-3xl font-bold text-orange-500">YumEats</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          aspernatur neque ut sapiente adipisci corporis reprehenderit Quisquam,
          quibusdam. Quisquam, quibusdam.
        </p>
        <div className="flex justify-normal gap-4 my-6">
          <FaFacebookSquare size={30} />
          <FaDribbbleSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-col md:flex-row justify-between mt-6 gap-6">
        <div className="w-1/2">
          <h6 className="font-medium text-[#9b9b9b]">Location</h6>
          <ul>
            <li className="py-2 text-sm">New York</li>
            <li className="py-2 text-sm">USA</li>
            <li className="py-2 text-sm">India</li>
            <li className="py-2 text-sm">Canada</li>
          </ul>
        </div>
        <div className="w-1/2">
          <h6 className="font-medium text-[#9b9b9b]">Location</h6>
          <ul>
            <li className="py-2 text-sm">New York</li>
            <li className="py-2 text-sm">USA</li>
            <li className="py-2 text-sm">India</li>
            <li className="py-2 text-sm">Canada</li>
          </ul>
        </div>
        <div className="w-1/2">
          <h6 className="font-medium text-[#9b9b9b]">Location</h6>
          <ul>
            <li className="py-2 text-sm">New York</li>
            <li className="py-2 text-sm">USA</li>
            <li className="py-2 text-sm">India</li>
            <li className="py-2 text-sm">Canada</li>
          </ul>
        </div>
        <div className="w-1/2">
          <h6 className="font-medium text-[#9b9b9b]">Location</h6>
          <ul>
            <li className="py-2 text-sm">New York</li>
            <li className="py-2 text-sm">USA</li>
            <li className="py-2 text-sm">India</li>
            <li className="py-2 text-sm">Canada</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default FooterNav;
