import { Element } from "react-scroll";
import { sections_features } from "../data/index";
import FaqItem from "../components/FaqItem";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const halfLength = Math.floor(sections_features.questions.length / 2);
  const { t } = useTranslation();

  return (
    <section>
      <Element name="FAQ" className="relative">
   

        <div className=" relative z-2   ">
          <div className="container flex gap-10 max-lg:block">
        
            <div className="relative flex-1 pt-24">
              {sections_features.questions.slice(0, halfLength).map((item, index) => (
                <FaqItem key={index} question={t(item.header)}answer={t(item.desc)} index={halfLength + index} />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {sections_features.questions.slice(halfLength).map((item, index) => (
                <FaqItem key={index} question={t(item.header)}answer={t(item.desc)} index={halfLength + index} />
              ))}
            </div>
          </div>

          {/* <div className="faq-lin_after absolute start-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" /> */}
        </div>
      </Element>
    </section>
  );
};

export default Faq;
