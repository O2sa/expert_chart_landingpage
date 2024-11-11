const Footer = () => {
  const { t } = useTranslation();
  const payments = [
    "google_pay.svg",
    "mada_pay.png",
    "master_card.svg",
    "paypal.svg",
    "visa.svg",
    "stc_pay.jpg",
  ];

  const social = [
    {
      name: "X",
      link: "https://x.com/ChartXpert_io",
      icon: <IconBrandX />,
    },
    {
      name: "TikTok",
      link: "https://tiktok.com/@chartxpert.io",
      icon: <IconBrandTiktok />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/chartxpert-io",
      icon: <IconBrandLinkedin />,
    },
    {
      name: "SnapChat",
      link: "https://snapchat.com/add/chartxpert",
      icon: <IconBrandSnapchat />,
    },
    {
      name: "Telegram",
      link: "https://t.me/labotiocommunity",
      icon: <IconBrandTelegram />,
    },
  ];

  return (
    <footer className="text-black dark:text-white bg-white dark:bg-black text-center md:text-start ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6  flex flex-col md:mb-0 justify-center items-cente md:items-start">
            <a href="" className="flex justify-center">
              <img
                src="/images/small_logo.png"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                ChartExpert
              </span>
            </a>
            <div className="mt-6">
              <h6 className="">{t("Accepted Payment Methods")}</h6>
              <div className="flex items-center my-4 flex-wrap justify-center">
                {payments.map((val, idx) => (
                  <img
                    src={`./images/payment/${val}`}
                    key={idx}
                    width={"60"}
                    alt=""
                    className="me-2 h-fit"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap justify-center ">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t("Contacts")}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="matilto:support@chartxpert.io"
                    className="hover:underline "
                  >
                    support@chartxpert.io
                  </a>
                </li>
                <li className="mb-4">
                  <a href="tel:+966-11-590-5500" className="hover:underline">
                    +966-11-590-5500
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    {t("Newark, zip code 19713,Delaware, U.S")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t("Pages")}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to={"/"} className="hover:underline">
                    {t("Home")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to={"/privacy"} className="hover:underline ">
                    {t("Privacy Policy")}
                  </Link>
                </li>{" "}
                <li>
                  <Link to={"/terms"} className="hover:underline">
                    {t("Terms & Conditions")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {` ${new Date().getFullYear()} `}
            <a href="" className="hover:underline">
              ChartExpert
            </a>
            {` ${t("All Rights Reserved.")}`}
          </span>
          <div className="flex mt-4 justify-center sm:mt-0 gap-2">
            {social.map((val, idx) => (
              <a
                href={val.link}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                key={idx}
                target="_blank"
              >
                {val.icon}
                <span className="sr-only">{val.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <SparklesPreview />
    </footer>
  );
};

import { t } from "i18next";
import { SparklesCore } from "../components/ui/sparkles";
import { Link } from "react-router-dom";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandX } from "@tabler/icons-react";
import { IconBrandTiktok } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandSnapchat } from "@tabler/icons-react";
import { IconBrandTelegram } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export function SparklesPreview() {
  return (
    <div className="h-[20rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="text-6xl lg:text-9xl font-bold text-center bg-gradient-to-b from-white via-slate-100 dark:from-black dark:via-slate-700 to-blue-500 bg-clip-text text-transparent relative z-20">
        ChartExpert
      </h1>
    </div>
  );
}

export default Footer;
