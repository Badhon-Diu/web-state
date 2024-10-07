import { Ctaone, Ctatwo } from "../../Icons/Icons";

const PreCTA = ({
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                  <span>{title}</span>
                  <span className="text-3xl font-normal md:text-[40px]">
                    {subtitle}
                  </span>
                </h2>
                <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                  {description}
                </p>
                <button
                  onClick={onButtonClick}
                  className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <Ctaone></Ctaone>
        </span>
        <span className="absolute bottom-0 right-0">
          <Ctatwo></Ctatwo>
        </span>
      </div>
    </section>
  );
};

export default PreCTA;
