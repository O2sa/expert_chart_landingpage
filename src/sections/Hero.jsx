import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { Cover } from "../components/ui/cover";
import { BackgroundLines } from "../components/ui/background-lines";
import { useTranslation } from "react-i18next";
import { Compare } from "../components/ui/compare";
import { FlipWords } from "../components/ui/flip-words";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();
  const words = [
    "ChartExpert",
    t("Advanced Technical Analysis"),
    t("Live Market Data"),
    t("Active Trader Community"),
    t("Trading Strategies"),
  ];

  return (
    <div className="mt-10">
      <BackgroundLines className=" flex items-center justify-center w-full flex-col px-4">
        <div className="">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-8 relative z-20 font-bold tracking-tight">
            {t("sections.hero.header_section_one")} <br />{" "}
            {/* {t("sections.hero.header_section_two")} */}
            <div style={{ direction: "rtl" }}>
              <FlipWords className={"dark:text-p2 text-p2 "} words={words} />{" "}
            </div>
          </h2>

          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">            {t("sections.hero.paragraph")}
          </p>

          <Link to={'signup'} className="m-10 flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className=" bg-blue-700 hover:bg-blue-800 text-white flex items-center space-x-2 "
            >
              <img
                src="/images/small_icon_light.png"
                className=" h-3 w-3 text-black dark:text-white  me-1"
              />
              <span>{t("Get Started")}</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </BackgroundLines>
      <div className="mx-auto w-3/4 h-[270px] lg:h-[36rem] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d] my-10">
        <div
          style={{
            transform: "rotateX(15deg) translateZ(80px)",
          }}
          className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-full"
        >
          <Compare
            firstImage="images/dash.png"
            secondImage="images/dash.png"
            firstImageClassName="object-cover object-left-top w-full"
            secondImageClassname="object-cover object-left-top w-full"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </div>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
