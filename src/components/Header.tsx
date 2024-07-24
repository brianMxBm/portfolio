import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Menu from "./HamburgerMenu";
import { TypeWriter } from "./Typewriter";

export default function Header() {
  const [disabled, setDisabled] = useState(false);
  const [menuState, setMenuState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // New state for the transition
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMenuState({ clicked: false, menuName: "Menu" });
  }, []);

  useEffect(() => {
    // Trigger the transition after the component mounts
    setIsVisible(true);
  }, []);

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  const handleMenu = () => {
    //TODO: Refactor function.
    setIsVisible(false);
    disableMenu();
    if (menuState.initial === false) {
      setMenuState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (menuState.clicked === true) {
      //TODO: Make a callback function instead.
      setMenuState({
        clicked: !menuState.clicked,
        menuName: "Menu",
      });
    } else if (menuState.clicked === false) {
      //TODO: Make a callback function instead.
      setMenuState({
        clicked: !menuState.clicked,
        menuName: "Close",
      });
    }
  };

  return (
    <>
      <div
        className={`grid grid-cols-2 items-center h-24 mx-auto px-10 text-white sm:grid-cols-3 px-10 duration-1000   ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } `}
      >
        <div className="items-center justify-self-start">
          <Link
            className="text-3xl font-GeneralSans font-bold text-blackPearl"
            to="/"
          >
            Brian Mx
          </Link>

          <div className="hidden sm:block">
            <span className="uppercase text-md font-Montreal font-normal text-dimGray">
              BASED IN LOS ANGELES, CA
            </span>
          </div>
        </div>

        <div className="hidden place-self-center sm:flex">
          <TypeWriter
            prefixText="I Embrace "
            typedText={["Quality", "Scalability", "Performance", "Aesthetics"]}
          />
        </div>

        <div className="flex justify-self-end">
          <nav className="col-span-4 flex font-Montreal">
            <ul className="flex flex-col gap-x-2 uppercase text-md font-normal text-darkGray md:flex-row ">
              <li className="flex leading-snug">
                <a
                  onClick={() => handleMenu()}
                  className="group relative block h-fit overflow-hidden "
                >
                  <span>menu</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-2 bg-dimGray transition-all group-hover:w-full"></span>
                </a>
                <span className="leading-snug text-sm">,</span>
              </li>

              <li className="flex leading-snug">
                <a className="group relative block h-fit overflow-hidden ">
                  <span>About</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-2 bg-dimGray transition-all group-hover:w-full"></span>
                </a>
                <span className="leading-snug text-sm">,</span>
              </li>

              <li className="flex leading-snug">
                <a className="group relative block h-fit overflow-hidden ">
                  <span>Contact</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-2 bg-dimGray transition-all group-hover:w-full"></span>
                </a>
                <span className="leading-snug text-sm">,</span>
              </li>

              <li className="flex leading-snug">
                <a className="group relative block h-fit overflow-hidden">
                  <span>works</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-2 bg-dimGray transition-all group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Menu state={menuState} />
    </>
  );
}
