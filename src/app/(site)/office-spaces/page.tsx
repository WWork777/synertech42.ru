import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
    title: "Серийное производство | Синертек",
};

export default function OfficeSpacesPage() {
    const subservices = [
        'Оптимизация конструкции под серийное производство',
        'Поиск и подбор поставщиков компонентов',
        'Контроль качества и испытания',
        'Подготовка технической документации',
        'Управление производством первых партий'
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
                        Подготовка к серийному производству
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-dark/60 max-w-3xl leading-relaxed">
                        Оптимизация конструкции для массового производства, подготовка документации для контрактных производителей, контроль качества первых партий.
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
                                    Переход от прототипа к серийному производству - это критический этап. Мы помогаем оптимизировать дизайн, подготовить всю необходимую документацию и найти надежных поставщиков.
                                </p>
                                <p className="text-dark/60 text-xs sm:text-sm md:text-base leading-relaxed">
                                    Наша команда имеет опыт работы с контрактными производителями и знает все нюансы процесса. Мы обеспечиваем контроль качества на каждом этапе производства первых серий.
                                </p>
                            </div>

                            {/* Process */}
                            <div>
                                <h2 className="text-3xl font-semibold text-dark mb-6">Процесс работы</h2>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="text-primary text-2xl font-bold flex-shrink-0">01</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-dark mb-2">Анализ и оптимизация</h3>
                                            <p className="text-dark/60">Анализ конструкции для снижения себестоимости производства</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-primary text-2xl font-bold flex-shrink-0">02</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-dark mb-2">Подготовка документации</h3>
                                            <p className="text-dark/60">Создание всех необходимых чертежей и спецификаций</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-primary text-2xl font-bold flex-shrink-0">03</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-dark mb-2">Поиск партнеров</h3>
                                            <p className="text-dark/60">Подбор поставщиков компонентов и производителей</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-primary text-2xl font-bold flex-shrink-0">04</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-dark mb-2">Контроль производства</h3>
                                            <p className="text-dark/60">Проверка качества первых партий и доработка</p>
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
