import { cn } from "../lib/utils";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { sections_features } from "../data";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CardComponentSkeleton } from "../components/ui/Card";
import Section from "../components/Section";
import { IconCoinBitcoin } from "@tabler/icons-react";
import { IconZoomMoney } from "@tabler/icons-react";
import { Element } from "react-scroll";
import { IconTableOptions } from "@tabler/icons-react";
import { IconBuilding } from "@tabler/icons-react";
import { IconShoe } from "@tabler/icons-react";
import { IconCoinBitcoinFilled } from "@tabler/icons-react";
import { IconCoinEuroFilled } from "@tabler/icons-react";
import { IconCoinTakaFilled } from "@tabler/icons-react";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("sections.options.header_section_one"),
      description: (
        <span className="text-sm">
          {t(
            "Customized recommendations and strategies for options trading, including various buying and selling strategies."
          )}
        </span>
      ),
      header: <CardComponentSkeleton type="options" />,
      className: "md:col-span-1",
      icon: <IconTableOptions className="h-4 w-4 text-neutral-500" />,
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
      icon: <IconZoomMoney className="h-4 w-4 text-neutral-500" />,
    },
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
      icon: <IconCoinBitcoin className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("sections.company.header_section_one"),
      description: <span className="text-sm"></span>,
      header: <SkeletonFour />,
      className: "md:col-span-2",
      icon: <IconBuilding className="h-4 w-4 text-neutral-500" />,
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
      icon: <IconShoe className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <Element name="Features">
      <Section>
        <div className="mt-10" />
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
        </BentoGrid>
      </Section>
    </Element>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
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
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <IconCoinBitcoinFilled className="h-6 w-6 rounded-full text-p2 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <IconCoinEuroFilled className="h-6 w-6 rounded-full text-p2 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <IconCoinTakaFilled className="h-6 w-6 rounded-full text-p2 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: { duration: 0.2 },
    },
    hover: {
      width: ["0%", "100%"],
      transition: { duration: 2 },
    },
  };

  const arr = new Array(4).fill(0);

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
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        />
      ))}
    </motion.div>
  );
};

const SkeletonFour = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap h-full w-full">
      {sections_features.company.map((val, idx) => (
        <div key={idx} className="text-center">
          <div className="flex justify-center items-center mb-2 w-16 h-16 bg-blue-100 dark:bg-blue-900">
            <val.icon className="text-blue-600 w-8 h-8 dark:text-blue-300" />
          </div>
          <h3 className="mb-2 text-xl text-black dark:text-white">
            {t(val.header)}
          </h3>
        </div>
      ))}
    </div>
  );
};
