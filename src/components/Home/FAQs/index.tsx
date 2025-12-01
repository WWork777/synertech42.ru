import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs' className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className='container max-w-8xl mx-auto px-4 sm:px-5 lg:px-5 2xl:px-0'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
                    <div className='lg:mx-0 mx-auto w-full'>
                        <Image
                            src="/images/2o1-0eb1ok.png"
                            alt="faq image"
                            width={680}
                            height={644}
                            className='w-full rounded-xl sm:rounded-2xl'
                            unoptimized={true}
                        />
                    </div>
                    <div className='lg:px-0'>
                        <p className="text-dark/75 text-xs sm:text-sm md:text-base font-semibold flex gap-2 items-center mb-3 sm:mb-4">
                            <Icon icon="ph:cpu-fill" className="text-xl sm:text-2xl text-primary" />
                            Вопросы и ответы
                        </p>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-52 leading-tight font-medium text-dark mb-3 sm:mb-4'>
                            Всё о разработке и производстве
                        </h2>
                        <p className='text-dark/50 text-xs sm:text-sm md:text-base mb-6 sm:mb-8'>
                            Ответы на часто задаваемые вопросы о процессе разработки промышленного и научного оборудования
                        </p>
                        <div className="my-6 sm:my-8">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-3 sm:gap-4">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-sm sm:text-base">1. Какие задачи вы решаете?</AccordionTrigger>
                                    <AccordionContent className="text-xs sm:text-sm md:text-base">
                                        Полный цикл реверс-инжиниринга и разработки прикладного оборудования: 3D моделирование и промышленный дизайн, разработка и изготовление печатных плат, программирование микроконтроллеров и ПЛК, прототипирование опытных образцов, работа с металлом, литье силикона и смол, подготовка к серийному производству, подготовка НИОКР для грантовых конкурсов.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-sm sm:text-base">2. Какие технологии производства вы используете?</AccordionTrigger>
                                    <AccordionContent className="text-xs sm:text-sm md:text-base">
                                        ЧПУ-фрезеровка металла, холодное литье пластиковых корпусов, литье силикона и различных смол, разработка и монтаж печатных плат, программирование микроконтроллеров. Имеем собственное оборудование для прототипирования и малых серий.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-sm sm:text-base">3. Сколько времени занимает разработка?</AccordionTrigger>
                                    <AccordionContent className="text-xs sm:text-sm md:text-base">
                                        Зависит от сложности: от нескольких недель для простых устройств до 6-12 месяцев для комплексных систем с механикой, электроникой и ПО. Работаем поэтапно с регулярными согласованиями. Предоставляем детальный план после анализа технического задания.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-sm sm:text-base">4. Предоставляете ли документацию для серийного производства?</AccordionTrigger>
                                    <AccordionContent className="text-xs sm:text-sm md:text-base">
                                        Да, подготавливаем полный пакет: производственные чертежи, спецификации, технологическую документацию, инструкции по сборке и испытаниям. Помогаем с передачей в серийное производство и обучением персонала предприятий-изготовителей.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

