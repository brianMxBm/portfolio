import { FaGithub, FaLinkedin } from "react-icons/fa6";

// const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  const firstName = "Brian";
  const lastName = "Melgar";

  return (
    <>
      <div className="px-16 items-center self-center">
        <div className=" px-16 mx-auto grid grid-cols-12 gap-5 fixed  inset-0">
          {[...Array(12)].map((_, index) => (
            <div key={index} className={`line animate-fall`} />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between pt-4 px-14 ">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-3 lg:grid-cols-2 lg:gap-10">
          <h2 className="cols-start-1 cols-end-1 text-4xl justify-self-start tracking-wide font-GeneralSans font-bold uppercase leading-snug animate-text md:justify-self-end md:text-7xl lg:text-12xl lg:cols-start-1 cols-end-1 lg:justify-self-end">
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

          <h2 className="text-4xl justify-self-start tracking-wide font-GeneralSans font-bold uppercase leading-snug animate-text md:text-7xl lg:text-12xl">
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

        <div className="relative grid justify-between grid-cols-12 pt-10">
          <div className="col-span-12 flex flex-col justify-between items-start gap-y-5 lg:col-span-4">
            <div className="flex flex-col ">
              <div className="sr-only">
                <span className="text-3xl font-GeneralSans font-light text-dimGray">
                  Frontend & Mobile Developer yearning to grow & learn wherever
                  he possibly can.
                </span>
              </div>
              <div className="hidden overflow-clip gap-y-10 lg:flex flex-col ">
                <span className="flex flex-row gap-x-5">
                  <FaLinkedin className="w-8 h-8" />
                  <FaGithub className="w-8 h-8" />
                </span>
                <div className="flex-flex-col block">
                  <p className="text-3xl font-GeneralSans w-[30ch]">
                    I'm Brian, a full-stack web and mobile developer, always
                    yearning to learn more whereever that may be
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-12 justify-self-center items-center lg:col-span-4 ">
            <div className="h-[15vh] max-w-lg rounded-lg md:h-[60vh]">
              <img
                alt="Headshot of Huy wearing a grey knit sweater with foliage in the background."
                decoding="async"
                data-nimg="1"
                className="h-full w-full object-cover object-center grayscale"
                src="https://i.pinimg.com/736x/60/af/e8/60afe87be8cddda4f290b0877796074a.jpg"
              />
            </div>
          </div>

          <div className="col-span-8 flex flex-col items-end justify-end text-right lg:col-span-4">
            <div>
              <span className="animate-text-reveal block font-Montreal text-base-small tracking-tight text-dimGray font-normal uppercase">
                Actively Looking For Work
              </span>
            </div>
            <div>
              <span className="animate-text-reveal lg:text-7xl uppercase font-Grotesk font-bold text-blackPearl text-opacity-1">
                HIRE ME
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen">faf</div>
    </>
  );
}
