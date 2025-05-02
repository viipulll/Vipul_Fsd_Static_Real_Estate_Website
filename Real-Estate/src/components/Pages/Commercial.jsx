import React from 'react';

function Commercial() {
  return (
    <>
     <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-4 lg:p-0">
      <div className="lg:w-1/2 lg:mr-4">
        <img src="https://www.dlf.in/offices/gurugram/dlfcybercity/images/cyberprojects/Bldg14.jpg" alt="Commercial Building" className="w-full lg:w-[700px] rounded-lg shadow-lg object-cover mb-4 lg:mb-0 lg:ml-3" />
      </div>
      <div className="lg:w-1/2 p-4 lg:p-0">
        <p className="text-center lg:text-left font-bold text-2xl lg:text-3xl mb-4 text-gray-800">🌟 Prime Commercial Building Available for Lease 🌟</p>
        <hr className="my-4 border-t-2 border-gray-400" />
        <p className="text-center lg:text-left font-medium text-base lg:text-lg text-gray-700 mb-4 lg:mb-0">
          Looking for the perfect space to elevate your business? Look no further! Our newly renovated commercial building offers the ideal environment for success.
          Whether you're a startup, expanding company, or established enterprise, this commercial building is designed to enhance your productivity and leave a lasting impression.
        </p>
        <hr className="my-4 border-t-2 border-gray-400" />
        <p className="text-center lg:text-left font-semibold text-base lg:text-lg text-blue-600">Schedule a tour today and step into your business's bright future! Contact us at [xxx xxx 4561] to learn more.</p>
      </div>
    </div>

      <hr className="my-8 border-t-2 border-gray-400" />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-4 lg:p-0">
        <div className="lg:w-1/2 p-4 lg:p-0">
          <p className="text-center lg:text-left font-bold text-2xl lg:text-3xl mb-4 text-gray-800">🌟 Prime Commercial Building Available for Lease 🌟</p>
          <hr className="my-4 border-t-2 border-gray-400" />
          <p className="text-center lg:text-left font-medium text-base lg:text-lg text-gray-700 mb-4 lg:mb-0">
            Are you searching for the perfect workspace that aligns with your business goals? Your search ends here! Discover our premium office space designed to elevate your professional endeavors.
            Whether you're a startup looking to establish a presence, a growing team in need of expansion, or an established firm seeking a prestigious address, our office space offers the ideal setting for success.
          </p>
          <hr className="my-4 border-t-2 border-gray-400" />
          <p className="text-center lg:text-left font-semibold text-base lg:text-lg text-blue-600">Schedule a tour today and step into your business's bright future! Contact us at [xxx xxx 4561] to learn more.</p>
        </div>
        <div className="lg:w-1/2 lg:ml-4">
          <img src="https://www.dlf.in/offices/gurugram/dlfcybercity/images/cyberprojects/Epitome.jpg" alt="Commercial Building" className="w-full lg:w-[700px] rounded-lg shadow-lg object-cover mb-4 lg:mb-0" />
        </div>
      </div>
    </>
  );
}

export default Commercial;
