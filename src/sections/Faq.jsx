import { Element } from "react-scroll";
import { sections_features } from "../data/index";
import FaqItem from "../components/FaqItem";
import { useTranslation } from "react-i18next";
import SectionHeader from "../components/SectionHeader";

const Faq = () => {
  const halfLength = Math.floor(sections_features.questions.length / 2);
  const { t } = useTranslation();

  return (
    <section>
      <Element name="FAQ">
        <SectionHeader title={t("sections.questions.header_section_one")} />
        <div className=" relative z-2   ">
          <div className="container flex gap-10 max-lg:block p-0 m-0 ">
            <div className="relative flex-1 pt-10">
              {sections_features.questions.slice(0, halfLength).map((item, index) => (
                <FaqItem
                  key={index}
                  question={t(item.header)}
                  answer={t(item.desc)}
                  index={halfLength + index}
                />
              ))}
            </div>

            <div className="relative flex-1 pt-10">
              {sections_features.questions.slice(halfLength).map((item, index) => (
                <FaqItem
                  key={index}
                  question={t(item.header)}
                  answer={t(item.desc)}
                  index={halfLength + index}
                />
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
