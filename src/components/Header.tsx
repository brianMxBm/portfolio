import { useEffect, useState } from "react";

import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Menu from "./HamburgerMenu";
import { TypeWriter } from "./Typewriter";
import { colors } from "../utils/style";
import { useMedia } from "react-use";

export default function Header() {
  const [disabled, setDisabled] = useState(false);

  const [menuState, setMenuState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  const isWide = useMedia("(min-width: 640px)"); //TODO: Abstract this logic someplace else.

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
  // document.body.style.overflow = "hidden"; //@SEE: This is not an effective solution. Come back and refactor this

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
        className={`px-6 relative grid grid-cols-2 items-center h-24 mx-auto  text-white lg:grid-cols-3 lg:px-16 duration-1000  bg-transparent  z-50 `}
      >
        <div className="items-center justify-self-start">
          <Link
            className=" text-3xl font-GeneralSans font-bold text-blackPearl  "
            to="/"
          >
            Mx
          </Link>

          <div className=" ">
            <span className="uppercase text-md font-Montreal font-normal text-dimGray">
              {isWide ? `BASED IN LOS ANGELES, CA` : `LA BASED`}
            </span>
          </div>
        </div>

        <div className="hidden place-self-center lg:flex">
          <TypeWriter
            prefixText="Embrace "
            typedText={[
              "Quality",
              "Scalability",
              "Performance",
              "Aesthetics",
              "Adaptability",
              "Interactivity",
            ]}
          />
        </div>

        <div className=" justify-self-end ">
          <nav className="col-span-4  font-Montreal hidden lg:flex">
            <ul className="flex gap-x-2 uppercase text-md font-normal text-darkGray  ">
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
          <div
            className="flex text-pearlBlack lg:hidden z-50"
            onClick={() => handleMenu()}
          >
            <FaBars className="h-8 w-8" color={colors.blackPearl} />
          </div>
        </div>
      </div>

      <Menu state={menuState} />
    </>
  );
}
