import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Services = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0 opacity-5">
        <Icon
          icon="ph:cpu-bold"
          width={800}
          height={800}
          className="text-primary"
        />
      </div>
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 lg:px-5 2xl:px-0 relative z-10 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <div>
            <p className="text-dark/75 text-gray text-xs sm:text-base font-semibold flex gap-2.5 mb-3 sm:mb-4">
              <Icon
                icon="ph:cpu-fill"
                className="text-xl sm:text-2xl text-primary "
              />
              Услуги
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-52 mt-2 sm:mt-4 mb-3 sm:mb-2 lg:max-w-full font-medium leading-tight sm:leading-[1.2] text-dark">
              Реверс-инжиниринг и производство
            </h2>
            <Link
              href="/services"
              className="py-3 sm:py-4 px-6 sm:px-8 bg-primary text-xs sm:text-base leading-4 block w-fit text-white rounded-full font-semibold mt-6 sm:mt-8 hover:bg-dark duration-300 whitespace-nowrap"
            >
              Полный спектр услуг
            </Link>
          </div>
          <div>
            <div className="relative rounded-2xl overflow-hidden group h-[250px] sm:h-[350px] md:h-[400px]">
              <Link href="/3d-modeling" className="block w-full h-full">
                <Image
                  src="/images/9q2Je2qe2.png"
                  alt="electronics development"
                  width={480}
                  height={386}
                  className="w-2/3 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500"
                  unoptimized={true}
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/95 pointer-events-none"></div>
              <Link
                href="/3d-modeling"
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10 flex flex-col gap-2 sm:gap-3 group-hover:gap-3 sm:group-hover:gap-4 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
                    3D моделирование и промышленный дизайн
                  </h3>
                  <div className="bg-white text-dark rounded-full w-fit p-2 sm:p-3 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon
                      icon="ph:arrow-right"
                      width={16}
                      height={16}
                      className="sm:w-5 sm:h-5"
                    />
                  </div>
                </div>
                <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-5 sm:leading-6 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  Разработка 3D моделей устройств, корпусов с учетом
                  технологических требований, изготовление пластиковых изделий
                </p>
              </Link>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl overflow-hidden group h-[250px] sm:h-[350px] md:h-[400px]">
              <Link href="/electronika" className="block w-full h-full">
                <Image
                  src="/images/2qej2j1i2e.png"
                  alt="software development"
                  width={680}
                  height={386}
                  className="w-2/3 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500"
                  unoptimized={true}
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/95 pointer-events-none"></div>
              <Link
                href="/electronika"
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10 flex flex-col gap-2 sm:gap-3 group-hover:gap-3 sm:group-hover:gap-4 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
                    Разработка электроники и ПО
                  </h3>
                  <div className="bg-white text-dark rounded-full w-fit p-2 sm:p-3 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon
                      icon="ph:arrow-right"
                      width={16}
                      height={16}
                      className="sm:w-5 sm:h-5"
                    />
                  </div>
                </div>
                <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-5 sm:leading-6 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  Проектирование печатных плат, программирование
                  микроконтроллеров и ПЛК, разработка графических интерфейсов
                </p>
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative rounded-2xl overflow-hidden group h-[250px] sm:h-[350px] md:h-[400px]">
              <Link href="/prototipirovanie" className="block w-full h-full">
                <Image
                  src="/images/012ibej1kb2aw&.png"
                  alt="pcb production"
                  width={320}
                  height={450}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  unoptimized={true}
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/95 pointer-events-none"></div>
              <Link
                href="/prototipirovanie"
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10 flex flex-col gap-2 sm:gap-3 group-hover:gap-3 sm:group-hover:gap-4 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-white text-xs sm:text-base lg:text-xl font-semibold leading-tight">
                    Прототипирование опытных образцов
                  </h3>
                  <div className="bg-white text-dark rounded-full w-fit p-2 sm:p-3 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon
                      icon="ph:arrow-right"
                      width={14}
                      height={14}
                      className="sm:w-4 sm:h-4 md:w-5 md:h-5"
                    />
                  </div>
                </div>
                <p className="text-white/70 text-xs leading-4 sm:text-sm sm:leading-5 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  Разработка лабораторных устройств, опытных образцов,
                  тестирование в реальных условиях
                </p>
              </Link>
            </div>
          </div>
          {/* <div className="col-span-1">
            <div className="relative rounded-2xl overflow-hidden group h-[250px] sm:h-[350px] md:h-[400px]">
              <Link href="/office-spaces" className="block w-full h-full">
                <Image
                  src="/images/p12keb.png"
                  alt="import substitution"
                  width={400}
                  height={450}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  unoptimized={true}
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/95 pointer-events-none"></div>
              <Link href="/office-spaces" className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10 flex flex-col gap-2 sm:gap-3 group-hover:gap-3 sm:group-hover:gap-4 transition-all duration-300">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-white text-xs sm:text-base lg:text-xl font-semibold leading-tight">
                    Подготовка к серийному производству
                  </h3>
                  <div className="bg-white text-dark rounded-full w-fit p-2 sm:p-3 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon icon="ph:arrow-right" width={14} height={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </div>
                </div>
                <p className="text-white/70 text-xs leading-4 sm:text-sm sm:leading-5 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  Оформление документации по ГОСТ, подготовка линий производства, контроль качества
                </p>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
