import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function CustomerCount() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className="mx-auto mt- grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
        <article className="flex max-w-xl flex-col items-start justify-center md:ml-40 ">
          {/* <div className="countup-main flex text-black justify-center  "> */}
          <h4 className=" font-bold text-5xl md:pl-40 ">Happy Customer</h4>
        </article>
        <article className="flex max-w-xl flex-col items-start justify-between  ">
          <div className="pl-24 md:pl-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 m-4 "
              viewBox="0 0 640 512"
            >
              {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
              <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" />
            </svg>
            <div className="countup text-5xl text-orange-500 m-4">
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
                    <CountUp start={0} end={5000} duration={2} delay={0} />
                  )}
                  +
                </h1>
              </ScrollTrigger>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default CustomerCount;
