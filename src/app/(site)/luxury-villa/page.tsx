import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
    title: "Разработка электроники и ПО | Синертек",
};

export default function LuxuryVillaPage() {
    const subservices = [
        'Разработка электронных схем и принципиальных схем',
        'Проектирование печатных плат (PCB design)',
        'Программирование микроконтроллеров (ARM, AVR, STM32)',
        'Встроенное ПО и микропрограммы',
        'IoT решения и облачная интеграция'
    ];

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="container mx-auto max-w-8xl px-4 sm:px-5 lg:px-5 2xl:px-0">
                {/* Header */}
                <div className="mb-8 sm:mb-12 md:mb-16">
                    <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
                        <Icon icon="ph:arrow-left" width={16} height={16} className="sm:w-5 sm:h-5" />
                        Вернуться к услугам
                    </Link>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-52 font-medium text-dark mb-3 sm:mb-4 leading-tight">
                        Разработка электроники и программного обеспечения
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-dark/60 max-w-3xl leading-relaxed">
                        Полный цикл разработки электронных схем, разработка печатных плат, программирование микроконтроллеров и ПЛК. Интеграция различных интерфейсов связи.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Left Column - Description */}
                    <div className="lg:col-span-2">
                        <div className="space-y-8 md:space-y-12">
                            {/* What We Do */}
                            <div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark mb-4 sm:mb-6">Что мы делаем</h2>
                                <p className="text-dark/60 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4">
                                    Разработка электроники - это наша специализация. От концепции и схемотехники до производства печатных плат и программирования. Мы создаем надежные, эффективные и инновационные электронные системы.
                                </p>
                                <p className="text-dark/60 text-xs sm:text-sm md:text-base leading-relaxed">
                                    Наша команда инженеров имеет опыт работы с различными микроконтроллерами, сенсорами и интерфейсами. Мы разрабатываем не только аппаратную часть, но и программное обеспечение для управления устройствами.
                                </p>
                            </div>

                            {/* Process */}
                            <div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark mb-4 sm:mb-6">Процесс работы</h2>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex gap-3 sm:gap-4">
                                        <div className="text-primary text-lg sm:text-2xl font-bold flex-shrink-0">01</div>
                                        <div>
                                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark mb-1 sm:mb-2">Техническое задание</h3>
                                            <p className="text-dark/60 text-xs sm:text-sm md:text-base">Разработаем детальное ТЗ на основе ваших требований</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 sm:gap-4">
                                        <div className="text-primary text-lg sm:text-2xl font-bold flex-shrink-0">02</div>
                                        <div>
                                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark mb-1 sm:mb-2">Схемотехника</h3>
                                            <p className="text-dark/60 text-xs sm:text-sm md:text-base">Проектирование электронной схемы и выбор компонентов</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 sm:gap-4">
                                        <div className="text-primary text-lg sm:text-2xl font-bold flex-shrink-0">03</div>
                                        <div>
                                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark mb-1 sm:mb-2">Печатная плата</h3>
                                            <p className="text-dark/60 text-xs sm:text-sm md:text-base">Проектирование и производство печатной платы</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 sm:gap-4">
                                        <div className="text-primary text-lg sm:text-2xl font-bold flex-shrink-0">04</div>
                                        <div>
                                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark mb-1 sm:mb-2">Программное обеспечение</h3>
                                            <p className="text-dark/60 text-xs sm:text-sm md:text-base">Написание прошивки и тестирование системы</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Subservices */}
                    <div>
                        <div className="bg-primary/10 rounded-2xl p-4 sm:p-6 md:p-8">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-dark mb-4 sm:mb-6">Включает в себя:</h3>
                            <ul className="space-y-3 sm:space-y-4">
                                {subservices.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Icon 
                                            icon="ph:check-circle-fill" 
                                            className="text-primary flex-shrink-0 mt-0.5"
                                            width={20}
                                            height={20}
                                        />
                                        <span className="text-dark/70">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="mt-8">
                            <Link 
                                href="/contactus" 
                                className="block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-dark duration-300 text-center"
                            >
                                Обсудить проект
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
