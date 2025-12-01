import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="!py-0">
      <div className="bg-gradient-to-b from-primary/10 via-primary/5 to-white/10 overflow-hidden relative">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 lg:px-5 2xl:px-0 pt-16 sm:pt-24 md:pt-60 pb-12 sm:pb-16 md:pb-68">
          <div className="relative text-dark text-center md:text-start z-10">
            <p className="text-inherit text-xs sm:text-xm font-medium">
              Центр прототипирования полного цикла
            </p>
            <h1 className="text-inherit text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold -tracking-wider md:max-w-45p mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
              Прикладное оборудование под ключ
            </h1>
            <p className="text-inherit text-sm sm:text-base md:text-lg lg:text-xl font-normal md:max-w-50p mb-4 sm:mb-6 leading-relaxed">
              От разработки электроники и 3D моделирования до серийного
              производства <br></br> и технического сопровождения
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
              <Link
                href="/contactus"
                className="px-6 sm:px-8 py-3 sm:py-4 border border-primary bg-primary text-white duration-300 hover:bg-primary-hover text-sm sm:text-base font-semibold rounded-full hover:cursor-pointer whitespace-nowrap"
              >
                Получить консультацию
              </Link>
              <Link
                href="/properties"
                className="px-6 sm:px-8 py-3 sm:py-4 border border-primary bg-white text-dark hover:bg-primary hover:text-white duration-300 text-sm sm:text-base font-semibold rounded-full hover:cursor-pointer whitespace-nowrap"
              >
                Портфолио проектов
              </Link>
            </div>
          </div>
          <div className="hidden md:block absolute top-20 right-20">
            <Image
              src={"/images/2JD0121q.png"}
              alt="heroImg"
              width={500}
              height={1016}
              priority={false}
              unoptimized={true}
            />
          </div>
        </div>
        <div className="md:absolute bottom-0 md:-right-68 xl:right-0 bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:pl-16 lg:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-12 sm:mt-16 md:mt-24">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:flex gap-6 sm:gap-8 md:gap-12 lg:gap-24 sm:text-center text-dark">
            <div className="flex flex-col sm:items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-full h-full text-inherit"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <p className="text-xs sm:text-sm md:text-base font-normal text-inherit leading-tight">
                Полный цикл разработки
              </p>
            </div>
            <div className="flex flex-col sm:items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-full h-full text-inherit"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <p className="text-xs sm:text-sm md:text-base font-normal text-inherit leading-tight">
                8+ проектов
              </p>
            </div>
            <div className="flex flex-col sm:items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-full h-full text-inherit"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p className="text-xs sm:text-sm md:text-base font-normal text-inherit leading-tight">
                ГОСТ соответствие
              </p>
            </div>
            <div className="flex flex-col sm:items-center gap-2 sm:gap-3">
              <p className="text-lg sm:text-2xl md:text-3xl font-medium text-inherit">
                10+
              </p>
              <p className="text-xs sm:text-sm md:text-base font-normal text-gray leading-tight">
                Компетенций
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
