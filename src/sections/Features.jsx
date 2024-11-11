import { IconLayoutSidebarInactive } from "@tabler/icons-react";
import { cn } from "../lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { IconDeviceDesktop } from "@tabler/icons-react";
import { IconAsteriskSimple } from "@tabler/icons-react";
import { IconUsers } from "@tabler/icons-react";
import { IconUserScreen } from "@tabler/icons-react";
import { IconCertificate } from "@tabler/icons-react";
import { IconBook } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../components/SectionHeader";
import Section from "../components/Section";
import { Element } from "react-scroll";

export default function Features() {
  const { t } = useTranslation();

  const items = {
    header:
      "Chart Expert Academy – Everything You Need to Become an Expert in Financial Markets",
    description:
      "Join us on a journey to mastering the financial markets through a comprehensive set of carefully designed educational programs suited for all levels:",
    items: [
      {
        title: "Basic Training Courses",
        description:
          "Start your journey with in-depth courses on technical and fundamental analysis.",
        icon: <IconBook />,
      },
      {
        title: "Interactive Workshops",
        description:
          "Attend live sessions with experts where you can engage, ask questions, and develop practical skills.",
        icon: <IconLayoutSidebarInactive />,
      },
      {
        title: "Self-Paced Video Lessons",
        description:
          "Access a library of recorded videos anytime and learn trading and analysis strategies at your own pace.",
        icon: <IconDeviceDesktop />,
      },
      {
        title: "Trading Simulations",
        description:
          "Test your strategies in a risk-free simulated environment using virtual accounts to practice trading.",
        icon: <IconAsteriskSimple />,
      },
      {
        title: "One-on-One Coaching",
        description:
          "Benefit from personalized mentorship sessions with experts who provide targeted guidance to enhance your skills.",
        icon: <IconUsers />,
      },
      {
        title: "Specialized Articles and Research",
        description:
          "Stay informed with in-depth articles and studies on the latest market trends and techniques.",
        icon: <IconUserScreen />,
      },
      {
        title: "Certified Programs",
        description:
          "Enroll in intensive programs and earn certifications that equip you to work confidently and professionally in financial markets.",
        icon: <IconCertificate />,
      },
    ],
  };

  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];
  return (
    <Element name="Academy" >
      <Section>
        <SectionHeader desc={t(items.description)} title={t(items.header)} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10  max-w-7xl mx-auto">
          {items.items.map((feature, index) => (
            <Feature key={index} {...feature} index={index} />
          ))}
        </div>
      </Section>
    </Element>
  );
}

const Feature = ({ title, description, icon, index }) => {
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "flex flex-col border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {t(title)}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {t(description)}
      </p>
    </div>
  );
};
