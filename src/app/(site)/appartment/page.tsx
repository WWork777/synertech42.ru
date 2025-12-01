import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
    title: "Прототипирование | Синертек",
};

export default function AppartmentPage() {
    const subservices = [
        'ЧПУ фрезеровка металла и пластика',
        'Литье силикона и полимерных смол',
        'Прототипирование печатных плат',
        'Механическая сборка и тестирование',
        '3D печать и доработка'
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
                        Прототипирование опытных образцов
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-dark/60 max-w-3xl leading-relaxed">
                        Изготовление функциональных макетов и прототипов. ЧПУ фрезеровка по металлу и пластику, литье силикона и смол, сборка электроники. Быстрое производство для тестирования.
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
                                    Прототипирование - это ключевой этап разработки любого устройства. Мы быстро превращаем ваши идеи в физические прототипы для тестирования, демонстрации инвесторам и доработки функциональности.
                                </p>
                                <p className="text-dark/60 text-xs sm:text-sm md:text-base leading-relaxed">
                                    Используя современное оборудование и технологии, мы создаем высококачественные прототипы, готовые к испытаниям. От простых механических макетов до сложных электромеханических систем - мы справимся с любым проектом.
                                </p>
                            </div>

                            {/* Process */}
                            <div>
                                <h2 className="text-3xl font-semibold text-dark mb-6">Процесс работы</h2>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="text-primary text-2xl font-bold flex-shrink-0">01</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-dark mb-2">Подготовка</h3>
                                            <p className="text-dark/60">Анализ чертежей и выбор оптимальных технологий</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-primary text-2xl font-bold flex-shrink-0">02</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-dark mb-2">Производство</h3>
                                            <p className="text-dark/60">Изготовление деталей на ЧПУ, печать на 3D принтере</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-primary text-2xl font-bold flex-shrink-0">03</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-dark mb-2">Сборка</h3>
                                            <p className="text-dark/60">Механическая сборка и интеграция электроники</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-primary text-2xl font-bold flex-shrink-0">04</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-dark mb-2">Тестирование</h3>
                                            <p className="text-dark/60">Проверка функциональности и доработка</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Subservices */}
                    <div>
                        <div className="bg-primary/10 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-dark mb-6">Включает в себя:</h3>
                            <ul className="space-y-4">
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
