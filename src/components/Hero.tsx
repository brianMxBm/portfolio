import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const firstName = "Brian Melgar";
  const elementRef = useRef(null);

  useLenis(({ scroll }) => {
    const element = elementRef.current;
    if (element) {
      const opacity = 1 - Math.min(scroll / 200, 0.5);
      const translateY = Math.min(scroll); // Limiting the translateY value
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

  useEffect(() => {
    const element = elementRef.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      onEnter: () => gsap.to(element, { zIndex: -10 }),
      onLeaveBack: () => gsap.to(element, { zIndex: 10 }),
    });
  }, []);

  return (
    <ReactLenis root>
      <div className="relative z-20 px-6 items-center self-center lg:px-16">
        <div className="px-6 mx-auto grid grid-cols-12 gap-5 fixed inset-0 lg:px-16">
          {[...Array(12)].map((_, index) => (
            <div key={index} className={`line animate-fall`} />
          ))}
        </div>
      </div>

      <div
        ref={elementRef}
        className="relative z-10 flex h-svh top-0 items-end px-6 pb-52 lg:items-center lg:h-auto"
      >
        <div className="relative z-10 flex w-full flex-col">
          <div className="flex flex-col justify-between lg:px-14">
            <div className="text-darkGray tracking-tighter font-medium overflow-hidden grid grid-cols-1 md:grid-cols-1 grid-col-start-1 md:gap-3 lg:font-bold lg:text-blackPearl lg:tracking-wide  lg:gap-10">
              <h2 className="cols-start-1 cols-end-1 text-6xl justify-self-start font-GeneralSans uppercase animate-text md:justify-self-start md:text-7xl lg:text-14xl lg:cols-start-1 ">
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
            </div>

            <div className="relative grid w-full justify-between grid-cols-12 gap-y-10">
              <div className="col-span-12 flex flex-col justify-between items-start pt-4 md:col-span-4">
                <div className="flex flex-col">
                  <div className="sr-only">
                    <span>
                      Frontend & Mobile Developer yearning to grow & learn
                      wherever he possibly can.
                    </span>
                  </div>
                  <div className="overflow-clip gap-y-10 lg:flex flex-col">
                    <div className="flex-flex-col block animate-block-reveal">
                      <p className="text-balance text-md text-darkGray leading-tight font-medium font-GeneralSans lg:text-3xl">
                        I'm Brian, a full-stack web and mobile developer, always
                        yearning to learn more wherever that may be
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-4 flex flex-col items-start md:items-center">
                <div className="flex h-fit w-fit overflow-hidden rounded-lg">
                  <div className="h-[15vh] max-w-lg rounded-lg md:h-[50vh]">
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
                <div className="overflow-clip text-right">
                  <span className="block animate-block-reveal font-Montreal text-sm tracking-tight text-dimGray font-normal uppercase">
                    Looking For Work
                  </span>
                </div>
                <div className="overflow-clip text-right">
                  <span className="animate-block-reveal block font-Grotesk text-3xl tracking-tight text-pearlBlack font-bold uppercase lg:text-7xl">
                    CONTACT ME
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 min-h-screen w-full overflow-x-clip">
        <section
          id="services"
          className="section-padding rounded-t-3xl bg-blackPearl"
        >
          <div className="flex w-full flex-col gap-y-space-lg md:gap-y-space-2xl">
            <h2 className="section-heading col-span-6 text-accent-400">
              <span aria-hidden="true" className="">
                <span className="inline-block">
                  <span className="relative inline-flex overflow-hidden">
                    <span
                      style={{ transform: "translateY(0px) translateZ(0px)" }}
                    >
                      W
                    </span>
                  </span>
                  <span className="relative inline-flex overflow-hidden">
                    <span
                      style={{ transform: "translateY(0px) translateZ(0px)" }}
                    >
                      h
                    </span>
                  </span>
                  <span className="relative inline-flex overflow-hidden">
                    <span
                      style={{ transform: "translateY(0px) translateZ(0px)" }}
                    >
                      a
                    </span>
                  </span>
                  <span className="relative inline-flex overflow-hidden">
                    <span
                      style={{ transform: "translateY(0px) translateZ(0px)" }}
                    >
                      t
                    </span>
                  </span>
                  <span className="inline-block">&nbsp;</span>
                </span>
                <span className="inline-block">
                  <span className="relative inline-flex overflow-hidden">
                    <span
                      style={{ transform: "translateY(0px) translateZ(0px)" }}
                    >
                      I
                    </span>
                  </span>
                  <span className="inline-block">&nbsp;</span>
                </span>
                <span className="inline-block">
                  <span className="relative inline-flex overflow-hidden">
                    <span
                      style={{ transform: "translateY(0px) translateZ(0px)" }}
                    >
                      d
                    </span>
                  </span>
                  <span className="relative inline-flex overflow-hidden">
                    <span
                      style={{ transform: "translateY(0px) translateZ(0px)" }}
                    >
                      o
                    </span>
                  </span>
                  <span className="inline-block">&nbsp;</span>
                </span>
                <span className="inline-block">
                  <span className="relative inline-flex overflow-hidden">
                    <span
                      style={{ transform: "translateY(0px) translateZ(0px)" }}
                    >
                      /
                    </span>
                  </span>
                  <span className="inline-block">&nbsp;</span>
                </span>
              </span>
            </h2>
            <div className="grid-gap flex grid-cols-12 sm:justify-end 2xl:grid">
              <div className="col-span-6 flex flex-col gap-x-space-xl gap-y-space-2xs sm:flex-row md:col-start-7">
                <span className="tracking-mono flex h-fit overflow-clip font-mono">
                  <span
                    className="flex h-full text-base font-medium uppercase text-nowrap text-secondary-75"
                    style={{ transform: "translateY(0%) translateZ(0px)" }}
                  >
                    (Services)
                  </span>
                </span>
                <p className="sr-only">
                  My obsession is to craft memorable digital experiences that
                  represent your brand, serve a meaningful purpose, and drive
                  tangible business results.
                </p>
                <p
                  aria-hidden="true"
                  className="w-full max-w-[29ch] text-balance text-base-large font-medium leading-base text-secondary-50"
                >
                  <span aria-hidden="true" className="leading-base">
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        My
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        obsession
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        is
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        to
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        craft
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        memorable
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        digital
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        experiences
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        that
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        represent
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        your
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        brand,
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        serve
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        a
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        meaningful
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        purpose,
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        and
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        drive
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        tangible
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        business
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                    <span className="relative inline-flex overflow-hidden">
                      <span
                        style={{ transform: "translateY(0px) translateZ(0px)" }}
                      >
                        results.
                      </span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full pt-space-lg">
            <div className="mt-12 gap-y-16 flex flex-col justify-between">
              <div
                className="sticky top-0 border-t border-t-secondary-300 bg-secondary-400"
                style={{ top: "calc(20vh + 0em)", marginBottom: "17.25em" }}
              >
                <div className="flex items-center justify-between gap-x-space-2xs">
                  <h3 className="py-space-md text-left text-heading-2 font-bold text-accent-500 2xl:py-space-sm">
                    Web Development
                  </h3>
                  <img
                    alt=""
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="h-6 w-6 opacity-30 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8"
                    style={{ color: "transparent" }}
                    src="//images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"
                  />
                </div>
                <div className="grid-gap pb-12 relative flex min-h-[20vh] flex-col place-items-start lg:grid lg:grid-cols-12">
                  <p className="col-span-12 max-w-[40ch] text-balance pt-space-3xs text-base font-medium text-secondary-50 lg:col-span-6">
                    I create unique, custom-coded websites that are tailored to
                    your brand. I focus on scalability, performance,
                    accessibility, and engaging animations for a memorable
                    experience.
                  </p>
                  <div className="col-span-6 flex w-full flex-col divide-y divide-secondary-200 pt-space-sm text-heading-4">
                    <span className="flex items-start gap-x-space-sm py-space-3xs font-bold text-accent-500 xl:gap-x-space-md xl:py-space-2xs">
                      <span className="font-mono text-base font-medium leading-[200%] text-secondary-75">
                        01
                      </span>
                      CMS Integration
                    </span>
                    <span className="flex items-start gap-x-space-sm py-space-3xs font-bold text-accent-500 xl:gap-x-space-md xl:py-space-2xs">
                      <span className="font-mono text-base font-medium leading-[200%] text-secondary-75">
                        02
                      </span>
                      Motion & Animations
                    </span>
                    <span className="flex items-start gap-x-space-sm py-space-3xs font-bold text-accent-500 xl:gap-x-space-md xl:py-space-2xs">
                      <span className="font-mono text-base font-medium leading-[200%] text-secondary-75">
                        03
                      </span>
                      3D Development
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="sticky top-0 border-t border-t-secondary-300 bg-secondary-400"
                style={{ top: "calc(20vh + 5.75em)", marginBottom: "11.5em" }}
              >
                <div className="flex items-center justify-between gap-x-space-2xs">
                  <h3 className="py-space-md text-left text-heading-2 font-bold text-accent-500 2xl:py-space-sm">
                    Web Design
                  </h3>
                  <img
                    alt=""
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="h-6 w-6 opacity-30 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8"
                    style={{ color: "transparent" }}
                    src="//images.ctfassets.net/fwy0yv14lkat/5X88SBFFc4hVAjMYmFK4js/7c8ae3f8120db2ff6f7ee315d3096266/Q8.svg"
                  />
                </div>
                <div className="grid-gap pb-12 relative flex min-h-[20vh] flex-col place-items-start lg:grid lg:grid-cols-12">
                  <p className="col-span-12 max-w-[40ch] text-balance pt-space-3xs text-base font-medium text-secondary-50 lg:col-span-6">
                    I design user-centric websites that enhance your brand and
                    drive business goals. Clean typography and minimal layouts
                    has my full attention to create a compelling online
                    presence.
                  </p>
                  <div className="col-span-6 flex w-full flex-col divide-y divide-secondary-200 pt-space-sm text-heading-4">
                    <span className="flex items-start gap-x-space-sm py-space-3xs font-bold text-accent-500 xl:gap-x-space-md xl:py-space-2xs">
                      <span className="font-mono text-base font-medium leading-[200%] text-secondary-75">
                        01
                      </span>
                      Responsive Design
                    </span>
                    <span className="flex items-start gap-x-space-sm py-space-3xs font-bold text-accent-500 xl:gap-x-space-md xl:py-space-2xs">
                      <span className="font-mono text-base font-medium leading-[200%] text-secondary-75">
                        02
                      </span>
                      Wireframing
                    </span>
                    <span className="flex items-start gap-x-space-sm py-space-3xs font-bold text-accent-500 xl:gap-x-space-md xl:py-space-2xs">
                      <span className="font-mono text-base font-medium leading-[200%] text-secondary-75">
                        03
                      </span>
                      UX Writing
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="sticky top-0 border-t border-t-secondary-300 bg-secondary-400"
                style={{ top: "calc(20vh + 11.5em)", marginBottom: "5.75em" }}
              >
                <div className="flex items-center justify-between gap-x-space-2xs">
                  <h3 className="py-space-md text-left text-heading-2 font-bold text-accent-500 2xl:py-space-sm">
                    SEO
                  </h3>
                  <img
                    alt=""
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="h-6 w-6 opacity-30 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8"
                    style={{ color: "transparent" }}
                    src="//images.ctfassets.net/fwy0yv14lkat/4tOmYgqGG5ImynJhHuG6k6/bfdee331cc56aa0f1ab40a4c83510a28/L9.svg"
                  />
                </div>
                <div className="grid-gap pb-12 relative flex min-h-[20vh] flex-col place-items-start lg:grid lg:grid-cols-12">
                  <p className="col-span-12 max-w-[40ch] text-balance pt-space-3xs text-base font-medium text-secondary-50 lg:col-span-6">
                    Beyond crafting visually memorable websites, I also optimize
                    your online presence to elevate your visibility in search
                    rankings so your voices can be heard in the digital
                    landscape.
                  </p>
                  <div className="col-span-6 flex w-full flex-col divide-y divide-secondary-200 pt-space-sm text-heading-4">
                    <span className="flex items-start gap-x-space-sm py-space-3xs font-bold text-accent-500 xl:gap-x-space-md xl:py-space-2xs">
                      <span className="font-mono text-base font-medium leading-[200%] text-secondary-75">
                        01
                      </span>
                      Technical SEO
                    </span>
                    <span className="flex items-start gap-x-space-sm py-space-3xs font-bold text-accent-500 xl:gap-x-space-md xl:py-space-2xs">
                      <span className="font-mono text-base font-medium leading-[200%] text-secondary-75">
                        02
                      </span>
                      On-Page Optimization
                    </span>
                    <span className="flex items-start gap-x-space-sm py-space-3xs font-bold text-accent-500 xl:gap-x-space-md xl:py-space-2xs">
                      <span className="font-mono text-base font-medium leading-[200%] text-secondary-75">
                        03
                      </span>
                      SEO Audits & Analysis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
