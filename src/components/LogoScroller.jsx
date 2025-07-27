import { data } from "../constant/constants";

const LogoScroller = () => {
  // Create a duplicated array for the seamless scroll effect
  const duplicatedArray = [...data, ...data, ...data, ...data];
  return (
<div className="LOGO_SCROLLER_CONTAINER w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      {/* Incorrect: .map((src, alt) => ...)
        Correct: Destructure the object { src, alt }
      */}
      <div className="inline-flex w-max animate-scroll hover:[animation-play-state:paused] hover:animate-p motion-reduce:animate-none">
        {/* Map over the DUPLICATED array */}
        {duplicatedArray.map(({ src, alt }, index) => (
          <div
            key={`${alt}-${index}`}
            className="mx-10 flex-shrink-0 relative w-[100px] h-[100px] flex justify-center" // Optional: Give logos a fixed width for consistency
          >
            <img
              src={src}
              alt={alt}
              className=" max-w-fit rounded-2xl p-2 grayscale hover:grayscale-0 transition duration-300 ease-in-out" //using object contain to prevent stretching
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;
