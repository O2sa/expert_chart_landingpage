import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";

import { IconBrightnessDown } from "@tabler/icons-react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { isDarkModeChecker } from "../utils/utils";

import { IconMoonStars } from "@tabler/icons-react";
import { IconMenu2 } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {t}=useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(isDarkModeChecker);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-black dark:text-white uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {t(title)}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 start-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 dark:text-white bg-white dark:bg-gray-900 backdrop-blur-[8px]"
      )}
      // style={{
      //   width: "100%",
      //   background: "transparent",
      //   boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 0px",
      // }}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img
            src="/PNG/small_logo.png"
            width={54}
            // height={55}
            alt="logo"
            className=""
          />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:start-0 max-lg:w-full max-lg:bg-white dark:max-lg:bg-black max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="About" />
                  <NavLink title="Features" />
                  <NavLink title="Academy" />
                  <NavLink title="FAQ" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <img
                      src={
                        isDarkMode
                          ? "/PNG/logo_dark.png"
                          : "/PNG/logo_light.png"
                      }
                      className={isDarkMode ? "w-[16rem]" : "w-[24rem]"}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <LanguageSwitcher />
                  <button
                    onClick={toggleDarkMode}
                    type="button"
                    className="text-black dark:text-white  dark:bg-white-700 dark:hover:bg-white-800 bg-black-700 hover:bg-black-800  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
                  >
                    {isDarkMode ? <IconBrightnessDown /> : <IconMoonStars />}
                  </button>
                  <Link
                    className="cursor-pointer relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl"
                    to="/login"
                  >
                    {t('Sign in')}
                  </Link>
                  <Link
                    className="cursor-pointer bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
                    to="/signup"
                  >
                    {t('Get Started')}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* <div className="lg:hidden block absolute top-1/2 start-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div> */}
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10  text-black dark:border-white dark:text-white rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen ? (
            <IconX alt="magic" className="size-1/2  object-contain" />
          ) : (
            <IconMenu2 alt="magic" className="size-1/2  object-contain" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

const RightSection = () => {
  return (
    <div className="flex space-x-2 items-center">
      <a
        className="cursor-pointer relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl"
        href="/login"
      >
        Sign in
      </a>
      <a
        className="cursor-pointer bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
        href="/signup"
      >
        Get Started
      </a>
    </div>
  );
};
