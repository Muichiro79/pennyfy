// import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-100 text-gray-900">
      <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Us</h2>
      <p className="text-xl text-gray-600 mb-6 text-center max-w-2xl">
        We are a passionate team dedicated to providing quality products and services to our customers.
        Our mission is to create value through innovation and customer satisfaction.
      </p>
      <a
        href="/contact"
        className="mt-4 text-lg text-white bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-full transition duration-300"
      >
        Contact Us
      </a>
    </div>
  );
};

export default About;
