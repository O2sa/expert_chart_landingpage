import { useTranslation } from "react-i18next";
import SectionHeader from "../components/SectionHeader";
import { HoverEffect } from "../components/ui/card-hover-effect";

import { IconChartBar } from "@tabler/icons-react";
import { IconCoins } from "@tabler/icons-react";
import { IconShoppingBagPlus } from "@tabler/icons-react";
import { IconCoinBitcoin } from "@tabler/icons-react";

export default function Markets() {
  const { t } = useTranslation();
  const financial_markets = [
    {
      header: "Stocks",
      desc: "Track and analyze stock performance with technical and fundamental tools.",
      icon: IconChartBar,
    },
    {
      header: "Currencies",
      desc: "Analyze currency markets and stay updated with economic news.",
      icon: IconCoins,
    },
    {
      header: "Commodities",
      desc: "Analyze commodity markets such as gold, oil, and raw materials.",
      icon: IconShoppingBagPlus,
    },
    {
      header: "Cryptocurrencies",
      desc: "Track and analyze cryptocurrency performance with advanced tools.",
      icon: IconCoinBitcoin,
    },
  ];

  return (
    <div className="relative z-20  pt-10">
      <SectionHeader
        title={t("sections.financial_markets.header_section_one")}
      />
      <div className="max-w-5xl mx-auto">
        <HoverEffect items={financial_markets} />
      </div>
    </div>
  );
}
