import {
  FaCat,
  FaEnvelope,
  FaGamepad,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import Marquee from "react-fast-marquee";
import { colors } from "../utils/style";

export default function Footer() {
  return (
    <footer className=" relative flex flex-col items-center justify-center  ">
      <Marquee speed={30} autoFill>
        <div className="bg-blackPearl py-3">
          <p className="font-Bitxmap text-lg text-oliveDrab leading-snug ">
            &lt;title&gt; brian a melgar &lt;/title&gt; &lt;h1&gt; contact me
            &lt;/h1&gt; &lt;p&gt; brian.melgar.mx@gmail.com &lt;/p&gt;
            &lt;title&gt; brian a melgar &lt;/title&gt; &lt;h1&gt; contact me
            &lt;/h1&gt; &lt;p&gt; brian.melgar.mx@gmail.com &lt;/p&gt;
            &lt;title&gt; brian a melgar &lt;/title&gt; &lt;h1&gt; contact me
            &lt;/h1&gt; &lt;p&gt; brian.melgar.mx@gmail.com &lt;/p&gt;
            &lt;title&gt; brian a melgar &lt;/title&gt; &lt;h1&gt; contact me
            &lt;/h1&gt; &lt;p&gt; brian.melgar.mx@gmail.com &lt;/p&gt;
            &lt;/h1&gt; &lt;p&gt; brian.melgar.mx@gmail.com &lt;/p&gt;
            &lt;/h1&gt; &lt;p&gt; brian.melgar.mx@gmail.com &lt;/p&gt;
            &lt;/h1&gt; &lt;p&gt; brian.melgar.mx@gmail.com &lt;/p&gt;
          </p>
        </div>
      </Marquee>
      <div className=" p-6 grid w-full grid-cols-2 gap-x-14 gap-y-7 md:grid-cols-12">
        <div className="flex flex-col gap-y-4 md:col-span-6">
          <h3 className="text-blackPearl font-medium uppercase border-b-2 border-oliveDrab">
            Pages
          </h3>
          <ul className="flex flex-col gap-y-1 font-Montreal uppercase">
            <li>
              <a
                target="_blank"
                className="text-md group relative flex h-fit w-fit overflow-hidden font-Montreal leading-snug text-oliveDrab"
                href="/"
              >
                <span className="link1">Menu</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link-text group relative flex h-fit w-fit overflow-hidden font-Montreal leading-snug text-oliveDrab"
                href="#services"
              >
                <span className="link1">About</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link-text group relative flex h-fit w-fit overflow-hidden font-Montreal leading-snug text-oliveDrab"
                href="#works"
              >
                <span className="link2">Contact</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link-text group relative flex h-fit w-fit overflow-hidden font-Montreal leading-snug text-oliveDrab"
                href="#about"
              >
                <span className="link1">Works</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4 md:col-span-3">
          <h3 className="text-blackPearl  font-medium uppercase border-b-2 border-oliveDrab">
            SOCIALS
          </h3>
          <ul className="flex flex-col gap-y-1 font-Montreal uppercase">
            <li>
              <a
                target="_blank"
                className="group-hover:w-full flex-row gap-x-1 justify-center text-md group relative flex h-fit w-fit overflow-hidden font-Montreal leading-snug text-oliveDrab"
                href="/"
              >
                <span className="link1">GITHUB </span>{" "}
                <FaGithub className="h-5 w-5" color={colors.blackPearl} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="group-hover:w-full flex-row gap-x-1 link-text group relative flex h-fit w-fit overflow-hidden font-Montreal leading-snug text-oliveDrab"
                href="#services"
              >
                <span className="link1">LINKEDIN</span>
                <FaLinkedin className="h-5 w-5" color={colors.blackPearl} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="group-hover:w-full flex-row gap-x-1 link-text group relative flex h-fit w-fit overflow-hidden font-Montreal leading-snug text-oliveDrab"
                href="#works"
              >
                <span className="link2">EMAIL</span>
                <FaEnvelope className="h-5 w-5" color={colors.blackPearl} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="group-hover:w-full flex-row gap-x-1 link-text group relative flex h-fit w-fit overflow-hidden font-Montreal leading-snug text-oliveDrab"
                href="https://www.op.gg/summoners/na/OfficialMx-NA1"
              >
                <span className="link1">OP.GG</span>
                <FaGamepad className="h-5 w-5" color={colors.blackPearl} />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 gap-y-4 flex flex-col md:col-span-3">
          <h3 className="text-blackPearl font-medium uppercase border-b-2 border-oliveDrab">
            More
          </h3>
          <ul className="flex flex-col gap-y-1 font-Montreal uppercase">
            <li>
              <a
                target="_blank"
                className="text-md group relative flex h-fit w-fit overflow-hidden font-Montreal leading-snug text-oliveDrab"
                href="/"
              >
                <span className="link1">Menu</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link-text group relative flex h-fit w-fit overflow-hidden font-Montreal leading-snug text-oliveDrab"
                href="#services"
              >
                <span className="link1">About</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link-text group relative flex h-fit w-fit overflow-hidden font-Montreal leading-snug text-oliveDrab"
                href="#works"
              >
                <span className="link2">Contact</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link-text group relative flex h-fit w-fit overflow-hidden font-Montreal leading-snug text-oliveDrab"
                href="#about"
              >
                <span className="link1">Works</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-5 w-full items-end justify-between md:grid md:grid-cols-12">
          <FaCat className="h-10 w-10" color={colors.blackPearl} />
        </div>
      </div>
    </footer>
  );
}
