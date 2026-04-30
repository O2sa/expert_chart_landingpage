import { animate, motion } from "framer-motion";
import { useEffect } from "react";
import { cn } from "../../lib/utils";
import { IconCoinPound } from "@tabler/icons-react";
import { IconChartBarPopular } from "@tabler/icons-react";
import { IconZoomMoneyFilled } from "@tabler/icons-react";
import { IconCloudBitcoin } from "@tabler/icons-react";
import { IconCloud } from "@tabler/icons-react";
import { IconMoneybag } from "@tabler/icons-react";
import { IconChartCohort } from "@tabler/icons-react";
import { IconTrademark } from "@tabler/icons-react";
import { IconCoinEuroFilled } from "@tabler/icons-react";
import { IconDeviceDesktopQuestion } from "@tabler/icons-react";

export const CardComponentSkeleton = ({ type = "market" }) => {
  const allTypes = {
    market: {
      one: IconCloud,
      two: IconZoomMoneyFilled,
      three: IconCoinPound,
      four: IconChartBarPopular,
      five: IconCloudBitcoin,
    },
    options: {
      one: IconMoneybag,
      two: IconChartCohort,
      three: IconTrademark,
      four: IconCoinEuroFilled,
      five: IconDeviceDesktopQuestion,
    },
  };

  const icons = allTypes[type];
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [".circle-1", { scale, transform }, { duration: 0.8 }],
    [".circle-2", { scale, transform }, { duration: 0.8 }],
    [".circle-3", { scale, transform }, { duration: 0.8 }],
    [".circle-4", { scale, transform }, { duration: 0.8 }],
    [".circle-5", { scale, transform }, { duration: 0.8 }],
  ];

  useEffect(() => {
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <icons.one className="h-4 w-4 " />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <icons.two className="h-6 w-6 dark:text-white" />
        </Container>
        <Container className="circle-3">
          <icons.three className="h-8 w-8 text-p2" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <icons.four className="h-6 w-6 " />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <icons.five className="h-4 w-4 " />
        </Container>
      </div>
      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: "2px",
            height: "2px",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        />
      ))}
    </div>
  );
};

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
