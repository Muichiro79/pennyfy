// import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-gray-900">
      <h2 className="text-4xl font-bold text-indigo-600 mb-4">Contact Us</h2>
      <p className="text-xl text-gray-600 mb-6 text-center max-w-2xl">
        Have questions or feedback? Feel free to reach out to us, and we'll be happy to assist you. 
        You can contact us through the details below or by filling out the form.
      </p>
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Email: support@yourcompany.com</h3>
        <h3 className="text-2xl font-semibold text-gray-800 mt-2">Phone: +1 234 567 890</h3>
      </div>
      <a
        href="/"
        className="mt-8 text-lg text-white bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-full transition duration-300"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default Contact;
