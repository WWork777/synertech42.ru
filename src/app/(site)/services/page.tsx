import Link from 'next/link';
import { Check, Cpu } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: '3D моделирование и промышленный дизайн',
      slug: '3d-modeling',
      subservices: [
        'Разработка 3D моделей готовых устройств и элементов',
        'Разработка корпусов с учетом технологических особенностей и требований заказчика',
        'Единичное и серийное изготовление корпусов и пластиковых изделий из инженерных материалов'
      ]
    },
    {
      id: 2,
      title: 'Разработка и изготовление печатных плат',
      slug: 'pcb-development',
      subservices: [
        'Разработка схемы и выбор компонентов',
        'Проектирование плат с учетом индивидуальных запросов',
        'Изготовление односторонних и двусторонних плат'
      ]
    },
    {
      id: 3,
      title: 'Разработка и программирование устройств на основе микроконтроллеров и ПЛК',
      slug: 'microcontroller-development',
      subservices: [
        'Подбор микроконтроллера и прочих узлов под конкретную задачу',
        'Программирование микроконтроллеров и ПЛК',
        'Разработка интерфейсов графических панелей',
        'Оформление документации',
        'Сборка и монтаж'
      ]
    },
    {
      id: 4,
      title: 'Прототипирование опытных образцов',
      slug: 'prototyping',
      subservices: [
        'Составление Технического Задания для разработки',
        'Разработка прототипов лабораторных устройств для первичного тестирования гипотез',
        'Разработка опытных образцов на основе тестов лабораторных устройств',
        'Тестирование и апробация в реальных условиях'
      ]
    },
    {
      id: 5,
      title: 'Работа с металлом',
      slug: 'metal-work',
      subservices: [
        'Изготовление металлических узлов и элементов методом ЧПУ фрезеровки',
        'Электроэрозионная обработка металла'
      ]
    },
    {
      id: 6,
      title: 'Литье силикона и различных смол',
      slug: 'silicone-casting',
      subservices: [
        'Изготовление мастер модели путем SLA печати',
        'Изготовление Силиконовой формы любой твердости',
        'Изготовление пластиковых изделий путем холодного литья в силикон'
      ]
    },
    {
      id: 7,
      title: 'Подготовка для передачи в серийное производство',
      slug: 'serial-production',
      subservices: [
        'Оформление документации в соответствии с ГОСТом',
        'Подготовка линий серийного производства',
        'Контроль качества выпускаемой продукции'
      ]
    },
    {
      id: 8,
      title: 'Подготовка НИОКР для участия в грантовых конкурсах',
      slug: 'research-grants',
      subservices: [
        'Проведение НИР',
        'Подготовка документации для НОИКР и патентования',
        'Подготовка к презентации проекта'
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-8xl px-4 sm:px-5 lg:px-5 2xl:px-0">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <p className="text-dark/75 text-gray text-xs sm:text-base font-semibold flex gap-2 justify-center items-center mb-3 sm:mb-4">
            <Cpu className="text-xl sm:text-2xl text-primary w-5 h-5 sm:w-6 sm:h-6" />
            Полный спектр услуг
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-52 font-medium text-dark mb-4 sm:mb-6 leading-tight">
            Полный цикл реверс-инжиниринга и разработки прикладного оборудования
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-dark/50 max-w-3xl mx-auto leading-relaxed">
            От разработки электроники и 3D моделирования до серийного производства и технического сопровождения
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {services.map((service, index) => (
            <div key={service.id} className="border-b border-dark/10 pb-8 sm:pb-10 lg:pb-12 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {/* Left side - title */}
                <div className="lg:col-span-1 md:col-span-2 lg:col-span-1">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-primary text-2xl sm:text-3xl font-bold flex-shrink-0 min-w-10 sm:min-w-12">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-dark leading-snug">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Right side - subservices */}
                <div className="md:col-span-2 lg:col-span-2">
                  <div className="flex flex-col h-full">
                    <ul className="space-y-2 sm:space-y-3 flex-1">
                      {service.subservices.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <Check 
                            className="text-primary flex-shrink-0 mt-0.5 sm:mt-1 w-4.5 h-4.5 sm:w-5 sm:h-5"
                            width={18}
                            height={18}
                          />
                          <span className="text-sm sm:text-base text-dark/70 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-dark duration-300 mt-4 sm:mt-6 group"
                    >
                      Узнать больше
                      <span className="group-hover:translate-x-1 duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark mb-3 sm:mb-4">
            Готовы начать ваш проект?
          </h2>
          <p className="text-dark/60 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта и получения подробной консультации
          </p>
          <Link 
            href="/contactus" 
            className="inline-block bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-dark duration-300 text-sm sm:text-base whitespace-nowrap"
          >
            Связаться с нами
          </Link>
        </div>
      </div>
    </section>
  );
}
