// const Spline = React.lazy(() => import("@splinetool/react-spline"));

import { ReactLenis, useLenis } from "lenis/react";

import { gsap } from "gsap";
import { useRef } from "react";

export default function Hero() {
  const firstName = "Brian";
  const lastName = "Melgar";
  const elementRef = useRef(null);

  useLenis(({ scroll }) => {
    const element = elementRef.current;
    if (element) {
      const opacity = 1 - Math.min(scroll / 200, 0.5);
      const translateY = Math.min(scroll / 2.5, 80);
      const scale = 1 - Math.min(scroll / 1000, 0.5);

      gsap.to(element, {
        opacity: opacity,
        y: translateY,
        scale: scale,
        ease: "elastic",
        duration: 0.1,
      });
    }
  });

  return (
    <ReactLenis root>
      <div className="px-6 items-center self-center lg:px-16">
        <div className="px-6 mx-auto grid grid-cols-12 gap-5 fixed inset-0 lg:px-16">
          {[...Array(12)].map((_, index) => (
            <div key={index} className={`line animate-fall`} />
          ))}
        </div>
      </div>

      <div
        ref={elementRef}
        className="flex h-svh top-0 items-end px-6 pb-40 lg:items-center lg:h-auto"
      >
        <div className=" opacity-1 transform-none relative  z-10 flex w-full flex-col">
          <div className="flex flex-col justify-between  lg:px-14 ">
            <div className="text-darkGray tracking-tighter font-medium overflow-hidden grid grid-cols-1 md:grid-cols-1 grid-col-start-1 md:gap-3 lg:font-bold lg:text-blackPearl lg:tracking-wide lg:grid-cols-2 lg:gap-10">
              <h2 className="cols-start-1 cols-end-1 text-6xl  justify-self-start  font-GeneralSans uppercase animate-text md:justify-self-start md:text-7xl lg:text-12xl lg:cols-start-1 cols-end-1 lg:justify-self-end">
                {firstName.match(/./gu)!.map((char, index) => (
                  <span
                    className="animate-text-reveal"
                    key={`${char}-${index}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>

              <h2 className="text-6xl justify-self-start font-GeneralSans uppercase animate-text md:text-7xl lg:text-12xl">
                {lastName.match(/./gu)!.map((char, index) => (
                  <span
                    className="animate-text-reveal"
                    key={`${char}-${index}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>
            </div>

            <div className="relative grid justify-between grid-cols-12 gap-y-10">
              <div className="col-span-12 flex flex-col justify-between items-start  pt-4  lg:col-span-4">
                <div className="flex flex-col ">
                  <div className="sr-only">
                    <span>
                      Frontend & Mobile Developer yearning to grow & learn
                      wherever he possibly can.
                    </span>
                  </div>
                  <div className=" overflow-clip gap-y-10 lg:flex flex-col ">
                    <div className="flex-flex-col block animate-block-reveal">
                      <p className="text-balance text-md text-darkGray leading-tight font-medium font-GeneralSans lg:text-3xl">
                        I'm Brian, a full-stack web and mobile developer, always
                        yearning to learn more wherever that may be
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-4 flex flex-col items-start ">
                <div className="flex h-fit w-fit overflow-hidden rounded-lg ">
                  <div className="h-[15vh] max-w-lg rounded-lg">
                    <img
                      alt="Headshot of Huy wearing a grey knit sweater with foliage in the background."
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full object-cover object-center grayscale"
                      src="https://i.pinimg.com/736x/60/af/e8/60afe87be8cddda4f290b0877796074a.jpg"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-8 flex h-full flex-col items-end justify-end lg:col-span-4">
                <div className="overflow-clip text-right ">
                  <span className="block animate-block-reveal  font-Montreal text-sm tracking-tight text-dimGray font-normal uppercase">
                    Looking For Work
                  </span>
                </div>
                <div className="overflow-clip text-right">
                  <span className="animate-block-reveal block font-Grotesk text-3xl tracking-tight text-pearlBlack font-bold uppercase">
                    CONTACT ME
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
