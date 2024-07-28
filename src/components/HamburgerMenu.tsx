import {
  fadeIn,
  staggerReveal,
  staggerRevealClose,
  staggerText,
} from "../utils/animations";
import { useEffect, useRef } from "react";

import { GoArrowDownRight } from "react-icons/go";
import { colors } from "../utils/style";
import gsap from "gsap";

const Menu = ({ state }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBG = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      staggerRevealClose(revealMenu, revealMenuBG);
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menu, {
        duration: 0,
        css: { display: "flex" },
      });
      gsap.to([revealMenuBG, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBG, revealMenu);
      fadeIn(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={(el) => (menu = el)} className="fixed inset-0  hidden z-40 ">
      <div className="relative w-full h-full">
        <div
          ref={(el) => (revealMenuBG = el)}
          className="absolute inset-0 w-full h-full bg-blackPearl z--1"
        />
        <div
          ref={(el) => (revealMenu = el)}
          className="relative w-full h-full bg-white overflow-hidden"
        >
          <div className=" flex flex-col justify-between p-6 gap-y-10">
            <div className="mt-20 flex-col flex ">
              <span className="text-md font-Montreal uppercase max-w-xl">
                Welcome to
              </span>
              <span className="text-md font-Montreal uppercase max-w-xl ">
                my portfolio 2024
              </span>
            </div>
            <nav className="block">
              <ul>
                <li className="mb-10">
                  <div className="flex flex-row items-start gap-x-2 ">
                    <GoArrowDownRight
                      className="h-10 w-10"
                      color={colors.charcoal}
                    />

                    <span className="uppercase font-semibold font-GeneralSans text-4xl ">
                      WELCOME
                    </span>
                  </div>
                </li>
                <li className="mb-10">
                  <div className="flex flex-row items-start gap-x-2 ">
                    <GoArrowDownRight
                      className="h-10 w-10"
                      color={colors.charcoal}
                    />

                    <span className="uppercase font-semibold  font-GeneralSans text-4xl ">
                      ABOUT
                    </span>
                  </div>
                </li>
                <li className="mb-10">
                  <div className="flex flex-row items-start gap-x-2 ">
                    <GoArrowDownRight
                      className="h-10 w-10"
                      color={colors.charcoal}
                    />

                    <span className="uppercase font-GeneralSans font-semibold text-4xl ">
                      CONTACT
                    </span>
                  </div>
                </li>
                <li className="mb-10">
                  <div className="flex flex-row items-start gap-x-2 ">
                    <GoArrowDownRight
                      className="h-10 w-10"
                      color={colors.charcoal}
                    />

                    <span className="uppercase font-GeneralSans font-semibold text-4xl ">
                      WORKS
                    </span>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="flex flex-row justify-between align-items-center border-t-2 border-darkGray">
              <a className="font-Montreal  leading-snug text-charcoal uppercase">
                GITHUB
              </a>
              <a className="font-Montreal  leading-snug text-charcoal uppercase">
                LINKEDIN
              </a>
              <a className="font-Montreal leading-snug text-charcoal uppercase">
                EMAIL
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
