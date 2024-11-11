import { t } from "i18next";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { sections_features } from "../data/index";
import { useTranslation } from "react-i18next";

export default function Start() {
  const { t } = useTranslation();

  
  return (
    <section className="py-20 w-full  overflow-hidden relative z-30 md:max-w-5xl max-w-[90%] m-auto">
      <div className="bg-white dark:bg-black">
        <div className="mx-auto w-full relative z-20 sm:max-w-[40rem]  md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] bg-gradient-to-br from-slate-800 dark:from-neutral-900 to-gray-900 rounded-2xl">
          <div className="relative -mx-6   sm:mx-0 sm:rounded-2xl overflow-hidden px-6  md:px-8 ">
            <div
              className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)]"
              style={{
                backgroundImage: "url(/noise.webp);background-size:30%",
              }}
            ></div>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
              style={{
                mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
              }}
            ></div>
            <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
              <h2 className=" capitalize text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-white">
                {t("With ChartExpert the financial market becomes easier")}
              </h2>
              <p className="mt-4 max-w-[26rem] text-center mx-auto  text-base/6 text-neutral-200">
                <span
                  data-br=":Rnefkutcq:"
                  data-brr="1"
                  style={{
                    display: "inline-block",
                    verticalAlign: "top",
                    textDecoration: "inherit",
                    textWrap: "balance",
                  }}
                >
                  {t(
                    "Join an active community of traders and investors and start your successful trading journey."
                  )}
                </span>
              </p>
              <div className="relative z-10 mx-auto flex justify-center mt-6">
                <a href="/signup">
                  <button className="cursor-pointer bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]">
                    {t("Get Started")}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
