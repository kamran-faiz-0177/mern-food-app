import React from 'react';

const MobileApp = () => {
  return (
    <div id='mobile-app' className="w-full min-h-[40vh] flex items-center justify-center overflow-x-hidden px-4 py-10">
      <div className="text-center max-w-[90vw]">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold break-words">
          For Better Experience <br className="hidden sm:block" /> Tomato App
        </h1>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <img
            src="./app_store.png"
            alt="Download on the App Store"
            className="w-40 sm:w-48 h-auto"
          />
          <img
            src="./play_store.png"
            alt="Get it on Google Play"
            className="w-40 sm:w-48 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
