import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
    title: "3D моделирование | Синертек",
};

export default function ResidentialHomesPage() {
    const subservices = [
        '3D моделирование в CAD системах (Fusion 360, SolidWorks, FreeCAD)',
        'Промышленный дизайн и эргономика',
        'Производственные чертежи по ГОСТ',
        'Подготовка к 3D печати и ЧПУ обработке',
        'Визуализация и рендеринг'
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
                        3D моделирование и промышленный дизайн
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-dark/60 max-w-3xl leading-relaxed">
                        Разработка 3D моделей ваших идей, проектирование корпусов и деталей. Работаем с новейшими системами проектирования (САПР). Подготовка производственных чертежей по ГОСТ.
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
                                    Наша команда специалистов в области конструирования и промышленного дизайна создает 3D модели любой сложности. Используем современные САПР системы для разработки функциональных и эстетичных решений.
                                </p>
                                <p className="text-dark/60 text-xs sm:text-sm md:text-base leading-relaxed">
                                    Каждый проект начинается с понимания ваших требований и заканчивается готовыми чертежами, пригодными для производства. Мы учитываем технологические возможности, стоимость производства и удобство использования.
                                </p>
                            </div>

                            {/* Process */}
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-semibold text-dark mb-4 sm:mb-6">Процесс работы</h2>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex gap-3 sm:gap-4">
                                        <div className="text-primary text-xl sm:text-2xl font-bold flex-shrink-0">01</div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-semibold text-dark mb-1 sm:mb-2">Консультация и анализ</h3>
                                            <p className="text-dark/60 text-sm sm:text-base">Обсудим ваши требования, функциональность и ограничения</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 sm:gap-4">
                                        <div className="text-primary text-xl sm:text-2xl font-bold flex-shrink-0">02</div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-semibold text-dark mb-1 sm:mb-2">Эскизы и концепции</h3>
                                            <p className="text-dark/60 text-sm sm:text-base">Предложим несколько вариантов дизайна для вашего выбора</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 sm:gap-4">
                                        <div className="text-primary text-xl sm:text-2xl font-bold flex-shrink-0">03</div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-semibold text-dark mb-1 sm:mb-2">3D моделирование</h3>
                                            <p className="text-dark/60 text-sm sm:text-base">Создание детальной 3D модели с учетом всех нюансов</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 sm:gap-4">
                                        <div className="text-primary text-xl sm:text-2xl font-bold flex-shrink-0">04</div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-semibold text-dark mb-1 sm:mb-2">Производственные чертежи</h3>
                                            <p className="text-dark/60 text-sm sm:text-base">Подготовка чертежей по ГОСТ для производства</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Subservices */}
                    <div>
                        <div className="bg-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-semibold text-dark mb-4 sm:mb-6">Включает в себя:</h3>
                            <ul className="space-y-2 sm:space-y-4">
                                {subservices.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                        <Icon 
                                            icon="ph:check-circle-fill" 
                                            className="text-primary flex-shrink-0 mt-0.5 sm:mt-1"
                                            width={18}
                                            height={18}
                                        />
                                        <span className="text-dark/70 text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="mt-6 sm:mt-8">
                            <Link 
                                href="/contactus" 
                                className="block bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-dark duration-300 text-center text-sm sm:text-base"
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
