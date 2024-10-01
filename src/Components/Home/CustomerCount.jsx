import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function CustomerCount() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-12 gap-y-16 border-t border-gray-200 pt-12 sm:mt-20 sm:pt-20 lg:mx-0 lg:max-w-full lg:grid-cols-2 ">
      {/* Left Side */}
      <article className="flex flex-col items-center lg:items-start justify-center px-4 lg:px-16 mb-0 pb-0">
        <h4 className="font-bold text-4xl md:text-5xl lg:text-5xl text-gray-900 text-center lg:text-left leading-tight">
          Happy Customers
        </h4>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-600 text-center lg:text-left">
          We have served thousands of satisfied customers with top-notch
          service.
        </p>
      </article>

      {/* Right Side */}
      <article className="flex flex-col items-center justify-center px-4 lg:px-16 mb-0 pb-0">
        <div className="text-center lg:text-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 md:h-28 mb-6 mx-auto lg:mx-0"
            viewBox="0 0 640 512"
          >
            <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" />
          </svg>
          <div className="text-6xl md:text-7xl lg:text-6xl text-orange-500 font-bold">
            <ScrollTrigger
              onEnter={() => {
                setCounterOn(true);
              }}
              onExit={() => {
                setCounterOn(false);
              }}
            >
              <h1>
                {counterOn && (
                  <CountUp start={0} end={5000} duration={3} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger>
          </div>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-700">
            Customers Served
          </p>
        </div>
      </article>
    </div>
  );
}

export default CustomerCount;
