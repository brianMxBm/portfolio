export default function Hero() {
  const lastName = "Brian A Melgar";

  return (
    <div className="flex flex-col justify-between pt-4 px-16">
      {/* <div className="grid grid-cols-10 lg:grid-cols-12 gap-5 w-4/5 mx-auto">
        <h2 className=" tracking-tight text-5xl leading-snug font-GeneralSans font-bold uppercase col-start-3 col-end--1 md:text-6xl md:col-start-6 md:col-end--1 lg:text-9xl lg:col-start-8 -col-end-1 z-10 space-x-2 animate-text">
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
        <h2 className="tracking-tight text-5xl leading-snug font-GeneralSans font-bold uppercase col-start-1 col-end--1 md:text-6xl md:col-start-2 md:col-end--1 lg:text-9xl lg:col-start-2 -col-end-1 z-10 space-x-2  animate-text">
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
      </div> */}

      <div>
        <h2 className="tracking-tight text-5xl leading-snug font-GeneralSans font-bold uppercase col-start-1 col-end--1 md:text-6xl md:col-start-2 md:col-end--1 lg:text-9xl   animate-text">
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

      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-4 flex items-start">
          <div className="max-w-[30ch]">
            <span className="text-3xl font-Grotesk font-normal text-dimGray">
              A freelance front-end developer and web designer helping startups
              all around the world gain their unfair advantage.
            </span>
          </div>
        </div>

        <div className="col-span-4 flex items-center justify-center">
          <img
            src="path/to/your/image.jpg"
            alt="Profile Image"
            className="rounded-full"
          />
        </div>

        <div className="col-span-4 flex flex-col items-end justify-end text-right">
          <div>
            <span className="block font-mono text-base-small text-dimGray font-medium uppercase text-secondary-100">
              Available for work
            </span>
          </div>
          <div>
            <span className="lg:text-7xl font-Grotesk font-bold">SEP '24</span>
          </div>
        </div>
      </div>
    </div>
  );
}
