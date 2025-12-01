import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function ServiceDetailPage() {
  const service = {
    title: '3D моделирование и промышленный дизайн',
    description: 'Комплексные услуги по разработке 3D моделей и промышленному дизайну с учетом всех технологических требований',
    details: [
      {
        title: 'Разработка 3D моделей',
        description: 'Создание высокоточных 3D моделей готовых устройств и элементов с использованием современного ПО'
      },
      {
        title: 'Проектирование корпусов',
        description: 'Разработка корпусов с учетом технологических особенностей и индивидуальных требований заказчика'
      },
      {
        title: 'Изготовление изделий',
        description: 'Единичное и серийное изготовление корпусов и пластиковых изделий из инженерных материалов'
      }
    ],
    benefits: [
      'Точная передача всех размеров и характеристик',
      'Учет технологических особенностей производства',
      'Оптимизация дизайна для функциональности',
      'Быстрая итерация и доработка',
      'Совместимость с различными материалами',
      'Подготовка к серийному производству'
    ]
  };

  const breadcrumbs = [
    { text: 'Главная', href: '/' },
    { text: 'Услуги', href: '/services' },
    { text: service.title, href: '#' }
  ];

  return (
    <>
      <Breadcrumb links={breadcrumbs} />
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-8xl px-4 sm:px-5 lg:px-5 2xl:px-0">
          {/* Back Button */}
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-dark duration-300 mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Вернуться к услугам
          </Link>

          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-52 font-medium text-dark mb-4 sm:mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-dark/60 leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
            {service.details.map((detail, index) => (
              <div key={index} className="bg-light rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-dark/5">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/15 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-primary font-bold text-lg sm:text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-dark mb-3 sm:mb-4">
                  {detail.title}
                </h3>
                <p className="text-sm sm:text-base text-dark/60 leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-dark/3 rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 lg:p-16 mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dark mb-8 sm:mb-10">
              Преимущества наших услуг
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <Check className="w-6 h-6 sm:w-7 sm:h-7 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-dark/80 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/10 rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-dark mb-3 sm:mb-4">
              Нужна эта услуга?
            </h2>
            <p className="text-dark/60 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
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
    </>
  );
}
