import {
  fadeIn,
  staggerReveal,
  staggerRevealClose,
  staggerText,
} from "../utils/animations";
import { useEffect, useRef } from "react";

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
    <div
      ref={(el) => (menu = el)}
      className="fixed inset-0 w-full h-full z-10000 hidden"
    >
      <div className="relative w-full h-full">
        <div
          ref={(el) => (revealMenuBG = el)}
          className="absolute inset-0 w-full h-full bg-blackPearl z--1"
        ></div>
        <div
          ref={(el) => (revealMenu = el)}
          className="relative w-full h-full bg-white overflow-hidden"
        >
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <div className="text-blackPearl text-sm font-semibold absolute bottom-[-80px]">
                Locations:
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
