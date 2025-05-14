import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="relative my-30">
        <img
          src="./header_img.png"
          alt="img is loading"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 rounded-xl">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            Order your <br /> favourite food here
          </h1>
          <p className="w-1/2 mb-6 hidden lg:flex">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, debitis. Nulla culpa ea officia aliquid pariatur distinctio commodi accusamus repellat reiciendis possimus! Veritatis aspernatur incidunt cumque cum eligendi debitis fugiat.
          </p>
          <button className="w-[130px] h-[30px]  md:w-[150px] md:h-[40px] text-gray-600 rounded-3xl font-bold bg-white">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
