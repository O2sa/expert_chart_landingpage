
import { useTranslation } from "react-i18next";
import { sections_features } from "../data/index";
import SectionHeader from "../components/SectionHeader";
import { HoverEffect } from "../components/ui/card-hover-effect";

export default function Markets() {
  const { t } = useTranslation();


  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <SectionHeader
        title={t("sections.about.header_section_one")}
        desc={t("sections.discover.paragraph")}
      />
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={sections_features.education} />
    </div>
    </div>
  );
}

