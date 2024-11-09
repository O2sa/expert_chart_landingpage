import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { sections_features } from "../data";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CardComponent, { CardComponentSkeleton } from "../components/ui/Card";
import SectionHeader from "../components/SectionHeader";
import Section from "../components/Section";
import { IconCoinBitcoin } from "@tabler/icons-react";
import { IconZoomMoney } from "@tabler/icons-react";
import { IconShoppingBag } from "@tabler/icons-react";
import { IconBrandStocktwits } from "@tabler/icons-react";
import { IconChartArea } from "@tabler/icons-react";
import { Element } from "react-scroll";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("sections.cryptocurrencies.header_section_one"),
      description: (
        <span className="text-sm">
          {t(
            "We provide advanced analytical tools to help you understand and analyze the performance of various cryptocurrencies."
          )}
        </span>
      ),
      header: <SkeletonOne />,
      className: "md:col-span-1",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("sections.Investment.header_section_one"),
      description: (
        <span className="text-sm">
          {t(
            "We provide advanced tools to help you choose investment funds that match your financial goals and risk tolerance."
          )}
        </span>
      ),
      header: <SkeletonTwo />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("sections.options.header_section_one"),
      description: (
        <span className="text-sm">
          {t(
            "Customized recommendations and strategies for options trading, including various buying and selling strategies."
          )}
        </span>
      ),
      header: <SkeletonThree />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("sections.financial_markets.header_section_one"),
      description: <span className="text-sm"></span>,
      header: <SkeletonFour />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },

    {
      title: t("Market Indicators"),
      description: (
        <span className="text-sm">
          {t(
            "Use advanced market indicators to track trends and identify investment opportunities in the cryptocurrency market."
          )}
        </span>
      ),
      header: <CardComponentSkeleton />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <Element name="Features" className="relative">

    <Section>
      <SectionHeader
        title={t("sections.about.header_section_one")}
        desc={t("sections.discover.paragraph")}
      />
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>{" "}
    </Section>
    </Element>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    // <motion.div
    //   initial="initial"
    //   animate="animate"
    //   variants={variants}
    //   transition={{
    //     duration: 5,
    //     repeat: Infinity,
    //     repeatType: "reverse",
    //   }}
    //   className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
    //   style={{
    //     background:
    //       "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    //     backgroundSize: "400% 400%",
    //     // backgroundImage:'url(money.jpg)'
    //   }}
    // >
    <motion.div className="h-full w-full rounded-lg">
      <div className=" flex  justify-center ">
        <img src="./money.jpg" className="w-[200px]" />
      </div>
    </motion.div>
    // </motion.div>
  );
};
const SkeletonFour = () => {
  const { t } = useTranslation();
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <IconChartArea
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 text-p2"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          {t(sections_features.financial_markets[0].header)}
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <IconZoomMoney
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 text-p2"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          {t(sections_features.financial_markets[1].header)}
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <IconShoppingBag
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 text-p2"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          {t(sections_features.financial_markets[2].header)}
        </p>
      </motion.div>{" "}
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <IconCoinBitcoin
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 text-p2"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          {t(sections_features.financial_markets[3].header)}
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
