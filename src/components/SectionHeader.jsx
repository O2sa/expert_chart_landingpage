import clsx from "clsx";

const SectionHeader = ({ title, desc }) => {
  return (
    <div className="px-8">
      <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        {title}
      </h4>

      <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        {desc}
      </p>
    </div>
  );
};
export default SectionHeader;
