'use client'
import { propertyHomes } from '@/app/api/propertyhomes'
import Map from '@/components/Home/Map'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Details() {
	const { slug } = useParams()

	const item = propertyHomes.find(item => item.slug === slug)
	return (
		<section className='!pt-44 pb-20 relative'>
			<div className='container mx-auto max-w-8xl px-5 2xl:px-0'>
				<div className='grid grid-cols-12 items-end gap-6'>
					<div className='lg:col-span-8 col-span-12'>
						<h1 className='lg:text-52 text-40 font-semibold text-dark dark:text-white'>
							{item?.name}
						</h1>
						<div className='flex gap-2.5'>
							<Icon
								icon='ph:map-pin'
								width={24}
								height={24}
								className='text-dark/50 dark:text-white/50'
							/>
							<p className='text-dark/50 dark:text-white/50 text-xm'>
								{item?.location}
							</p>
						</div>
					</div>
					{/* <div className='lg:col-span-4 col-span-12'>
						<div className='flex gap-6'>
							<div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-6 flex-shrink-0'>
								<Icon
									icon={'ph:puzzle-piece'}
									width={20}
									height={20}
									className='text-dark dark:text-white'
								/>
								<p className='text-sm mobile:text-base font-normal text-black dark:text-white whitespace-nowrap'>
									{item?.beds} Компонентов
								</p>
							</div>
							<div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-6 flex-shrink-0'>
								<Icon
									icon={'ph:cpu'}
									width={20}
									height={20}
									className='text-dark dark:text-white'
								/>
								<p className='text-sm mobile:text-base font-normal text-black dark:text-white whitespace-nowrap'>
									{item?.baths} Датчиков
								</p>
							</div>
							<div className='flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-6 flex-shrink-0'>
								<Icon
									icon={'ph:ruler'}
									width={20}
									height={20}
									className='text-dark dark:text-white'
								/>
								<p className='text-sm mobile:text-base font-normal text-black dark:text-white whitespace-nowrap'>
									{item?.area}м<sup>2</sup>
								</p>
							</div>
						</div>
					</div> */}
				</div>
				<div className='grid grid-cols-12 mt-8 gap-8'>
					<div className='lg:col-span-8 col-span-12 row-span-2'>
						{item?.images && item?.images[0] && (
							<div className=''>
								<Image
									src={item.images[0]?.src}
									alt='Main Property Image'
									width={400}
									height={500}
									className='object-cover rounded-2xl mx-auto'
									unoptimized={true}
								/>
							</div>
						)}
					</div>
					<div className='lg:col-span-4 lg:block hidden'>
						{item?.images && item?.images[1] && (
							<Image
								src={item.images[1]?.src}
								alt='Property Image 2'
								width={400}
								height={500}
								className='rounded-2xl w-full h-full'
								unoptimized={true}
							/>
						)}
					</div>
					<div className='lg:col-span-2 col-span-6'>
						{item?.images && item?.images[2] && (
							<Image
								src={item.images[2]?.src}
								alt='Property Image 3'
								width={400}
								height={500}
								className='rounded-2xl w-full h-full'
								unoptimized={true}
							/>
						)}
					</div>
					<div className='lg:col-span-2 col-span-6'>
						{item?.images && item?.images[3] && (
							<Image
								src={item.images[3]?.src}
								alt='Property Image 4'
								width={400}
								height={500}
								className='rounded-2xl w-full h-full'
								unoptimized={true}
							/>
						)}
					</div>
				</div>
				<div className='grid grid-cols-12 gap-8 mt-10'>
					<div className='lg:col-span-8 col-span-12'>
						<h3 className='text-xl font-medium'>Задачи проекта</h3>
						<div className='py-8 my-8 border-y border-dark/10 dark:border-white/20 flex flex-col gap-4'>
							{item?.tasks?.map((task, i) => (
								<div key={i} className='flex items-center gap-6'>
									<div>
										<Image
											src={task.src1}
											width={400}
											height={500}
											alt=''
											className='w-8 h-8 dark:hidden'
											unoptimized={true}
										/>
										<Image
											src={task.src1}
											width={400}
											height={500}
											alt=''
											className='w-8 h-8 dark:block hidden'
											unoptimized={true}
										/>
									</div>
									<div>
										<h3 className='text-dark dark:text-white text-xm leading-5'>
											{task.title}
										</h3>
										{/* <p className='text-base text-dark/50 dark:text-white/50'>
										Разработка печатных плат и программной логики устройств
									</p> */}
									</div>
								</div>
							))}
							{/* <div className='flex items-center gap-6'>
								<div>
									<Image
										src='/images/SVGs/smart-home-access.svg'
										width={400}
										height={500}
										alt=''
										className='w-8 h-8 dark:hidden'
										unoptimized={true}
									/>
									<Image
										src='/images/SVGs/smart-home-access-white.svg'
										width={400}
										height={500}
										alt=''
										className='w-8 h-8 dark:block hidden'
										unoptimized={true}
									/>
								</div>
								<div>
									<h3 className='text-dark dark:text-white text-xm'>
										Беспроводная связь
									</h3>
									<p className='text-base text-dark/50 dark:text-white/50'>
										GSM, Bluetooth, Wi-Fi модули для передачи данных
									</p>
								</div>
							</div>
							<div className='flex items-center gap-6'>
								<div>
									<Image
										src='/images/SVGs/energyefficient.svg'
										width={400}
										height={500}
										alt=''
										className='w-8 h-8 dark:hidden'
										unoptimized={true}
									/>
									<Image
										src='/images/SVGs/energyefficient-white.svg'
										width={400}
										height={500}
										alt=''
										className='w-8 h-8 dark:block hidden'
										unoptimized={true}
									/>
								</div>
								<div>
									<h3 className='text-dark dark:text-white text-xm'>
										Энергоэффективность
									</h3>
									<p className='text-base text-dark/50 dark:text-white/50'>
										Автономная работа до 1 года от батареи
									</p>
								</div>
							</div> */}
						</div>
						<div className='flex flex-col gap-5'>
							{item?.description?.map((desc, i) => (
								<p key={i} className='text-dark dark:text-white text-xm '>
									{desc}
								</p>
							))}
							{/* <p className='text-dark dark:text-white text-xm '>
								Каждое устройство проходит многоступенчатый контроль качества и
								испытания в реальных условиях эксплуатации. Все компоненты
								подбираются с учётом требований надёжности и долговечности,
								обеспечивая стабильную работу в течение всего срока службы.
							</p>
							<p className='text-dark dark:text-white text-xm '>
								Разработка проводится с применением современных САПР систем и
								инструментов моделирования. Каждый этап производства
								контролируется для соблюдения стандартов ГОСТ и технических
								требований заказчика. Готовые изделия проходят полный цикл
								испытаний перед отгрузкой.
							</p>
							<p className='text-dark dark:text-white text-xm '>
								Мы обеспечиваем полное техническое сопровождение на всех этапах
								— от проектирования до серийного производства, гарантируя
								высокое качество и соответствие всем требованиям.
							</p> */}
						</div>
						<div className='py-8 mt-8 border-t border-dark/5 dark:border-white/15'>
							<h3 className='text-xl font-medium'>Технические особенности</h3>
							<div className='grid md:grid-cols-3 mt-5 gap-4'>
								{item?.technical?.map((tech, i) => (
									<div key={i} className='flex items-center gap-2.5'>
										<Icon
											icon={tech.src}
											width={24}
											height={24}
											className='text-dark dark:text-white min-w-[24px]'
										/>
										<p className='text-base dark:text-white text-dark leading-5'>
											{tech.title}
										</p>
									</div>
								))}
								{/* <div className='flex items-center gap-2.5'>
									<Icon
										icon='ph:chart-pie-slice'
										width={24}
										height={24}
										className='text-dark dark:text-white'
									/>
									<p className='text-base dark:text-white text-dark'>
										Аналитика данных
									</p>
								</div>
								<div className='flex items-center gap-2.5'>
									<Icon
										icon='ph:television-simple'
										width={24}
										height={24}
										className='text-dark dark:text-white'
									/>
									<p className='text-base dark:text-white text-dark'>
										Энергоэффективность
									</p>
								</div>
								<div className='flex items-center gap-2.5'>
									<Icon
										icon='ph:sun'
										width={24}
										height={24}
										className='text-dark dark:text-white'
									/>
									<p className='text-base dark:text-white text-dark'>
										Автономная работа
									</p>
								</div>
								<div className='flex items-center gap-2.5'>
									<Icon
										icon='ph:video-camera'
										width={24}
										height={24}
										className='text-dark dark:text-white'
									/>
									<p className='text-base dark:text-white text-dark'>
										Системы мониторинга
									</p>
								</div>
								<div className='flex items-center gap-2.5'>
									<Icon
										icon='ph:cloud'
										width={24}
										height={24}
										className='text-dark dark:text-white'
									/>
									<p className='text-base dark:text-white text-dark'>
										Облачное хранение
									</p>
								</div> */}
							</div>
						</div>
						{/* <iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938779.7831767448!2d71.05098621661072!3d23.20271516446136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82dd003ff749%3A0x359e803f537cea25!2sGANESH%20GLORY%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1715676641521!5m2!1sen!2sin'
							width='1114'
							height='400'
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							className='rounded-2xl w-full'
						></iframe> */}
						<Map />
					</div>
					<div className='lg:col-span-4 col-span-12'>
						<div className='bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden'>
							<h4 className='text-dark text-3xl font-medium dark:text-white'>
								{item?.rate}
							</h4>
							<p className='text-sm text-dark/50 dark:text-white'>
								Срок выполнения
							</p>
							<Link
								href='/contactus'
								className='py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer'
							>
								Связаться с нами
							</Link>
							<div className='absolute right-0 top-0 opacity-10 -z-[1]'>
								<Icon
									icon='ph:cpu-bold'
									width={300}
									height={300}
									className='text-primary'
								/>
							</div>
						</div>
						{/* {testimonials.slice(0, 1).map((item, index) => (
							<div
								key={index}
								className='border p-10 rounded-2xl border-dark/10 dark:border-white/20 mt-10 flex flex-col gap-6'
							>
								<Icon
									icon='ph:house-simple'
									width={44}
									height={44}
									className='text-primary'
								/>
								<p className='text-xm text-dark dark:text-white'>
									{item.review}
								</p>
								<div className='flex items-center gap-6'>
									<Image
										src={item.image}
										alt={item.name}
										width={400}
										height={500}
										className='w-20 h-20 rounded-2xl'
										unoptimized={true}
									/>
									<div className=''>
										<h3 className='text-xm text-dark dark:text-white'>
											{item.name}
										</h3>
										<h4 className='text-base text-dark/50 dark:text-white/50'>
											{item.position}
										</h4>
									</div>
								</div>
							</div>
						))} */}
					</div>
				</div>
			</div>
		</section>
	)
}
