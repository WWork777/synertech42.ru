import { FooterLinks } from '@/app/api/footerlinks'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='relative z-10 bg-primary'>
			<div className='w-full py-4 sm:py-5 bg-dark overflow-hidden'>
				<div className='flex items-center gap-8 sm:gap-16 md:gap-24 lg:gap-40 animate-slide'>
					<p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
						ПОЛНЫЙ ЦИКЛ: ОТ ИДЕИ ДО СЕРИЙНОГО ПРОИЗВОДСТВА
					</p>
					<p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
						3D МОДЕЛИРОВАНИЕ И ПЕЧАТЬ • ЭЛЕКТРОНИКА • ЧПУ ФРЕЗЕРОВКА
					</p>
					<p className='text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32'>
						ИНЖЕНЕРНЫЕ РАСЧЕТЫ • ОФОРМЛЕНИЕ ДОКУМЕНТАЦИИ ПО ГОСТ
					</p>
					<p className='text-white whitespace-nowrap text-xs sm:text-sm md:text-base relative after:absolute after:w-10 sm:after:w-16 md:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-8 sm:after:-right-16 md:after:-right-32'>
						ПОЛНЫЙ ЦИКЛ: ОТ ИДЕИ ДО СЕРИЙНОГО ПРОИЗВОДСТВА
					</p>
					<p className='text-white whitespace-nowrap text-xs sm:text-sm md:text-base relative after:absolute after:w-10 sm:after:w-16 md:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-8 sm:after:-right-16 md:after:-right-32'>
						3D МОДЕЛИРОВАНИЕ И ПЕЧАТЬ • ЭЛЕКТРОНИКА • ЧПУ ФРЕЗЕРОВКА
					</p>
					<p className='text-white whitespace-nowrap text-xs sm:text-sm md:text-base relative after:absolute after:w-10 sm:after:w-16 md:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-8 sm:after:-right-16 md:after:-right-32'>
						ИНЖЕНЕРНЫЕ РАСЧЕТЫ • ОФОРМЛЕНИЕ ДОКУМЕНТАЦИИ ПО ГОСТ
					</p>
					<p className='text-white whitespace-nowrap text-xs sm:text-sm md:text-base relative after:absolute after:w-10 sm:after:w-16 md:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-8 sm:after:-right-16 md:after:-right-32'>
						3D-МОДЕЛИРОВАНИЕ • ЭЛЕКТРОНИКА • ЧПУ ОБРАБОТКА • ГОСТ
					</p>
				</div>
			</div>
			<div className='container mx-auto max-w-8xl pt-8 sm:pt-12 md:pt-14 px-4 sm:px-5 lg:px-5 2xl:px-0'>
				<div className='py-16 border-b border-white/10'>
					<div className='grid grid-cols-12 sm:gap-10 gap-y-6'>
						<div className='md:col-span-7 col-span-12'>
							<h2 className='text-white leading-[1.2] text-2xl sm:text-3xl md:text-4xl lg:text-40 font-medium mb-4 sm:mb-6 lg:max-w-3/4'>
								Полный цикл: от идеи до серийного производства
							</h2>
							<p className='text-white/80 text-sm sm:text-base md:text-lg mb-4 sm:mb-6'>
								Разработка и прототипирование под ключ <br /> с соблюдением всех
								стандартов и требований <br />
								<span> ООО "ФриДейс"</span> <br />
								<span> г. Кемерово, пр. Советский 9</span>
								<br />
								<span> ИНН: 4205411312</span>
							</p>

							<Link
								href='/contactus'
								className='bg-white text-base font-semibold py-4 px-8 rounded-full text-dark hover:bg-dark hover:text-white duration-300 hover:cursor-pointer'
							>
								Связаться с нами
							</Link>
						</div>
						<div className='md:col-span-3 sm:col-span-6 col-span-12'>
							<div className='flex flex-col gap-4 w-fit'>
								{FooterLinks.slice(0, 4).map((item, index) => (
									<div key={index}>
										<Link
											href={item.href}
											className='text-white/40 text-xm hover:text-white'
										>
											{item.label}
										</Link>
									</div>
								))}
							</div>
						</div>
						<div className='md:col-span-2 sm:col-span-6 col-span-12'>
							<div className='flex flex-col gap-4 w-fit'>
								{FooterLinks.slice(4, 8).map((item, index) => (
									<div key={index}>
										<Link
											href={item.href}
											className='text-white/40 text-xm hover:text-white'
										>
											{item.label}
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className='flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6'>
					<p className='text-white/40 text-sm '>
						©2025 Синертек - Центр прототипирования полного цикла
					</p>
					<div className='flex gap-8 items-center'>
						<Link
							href='/terms'
							className='text-white/40 hover:text-white text-sm duration-300'
						>
							Условия использования
						</Link>
						<Link
							href='/privacy'
							className='text-white/40 hover:text-white text-sm duration-300'
						>
							Политика конфиденциальности
						</Link>
					</div>
					<Link
						href='https://t.me/synertech42'
						target='_blank'
						rel='noopener noreferrer'
						className='group flex items-center justify-center'
						aria-label='Telegram'
					>
						<div className='relative'>
							{/* Внешний круг с градиентом */}
							<div className='absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

							{/* Основная иконка */}
							<div className='relative bg-white rounded-full p-2.5 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
								<svg
									width='28'
									height='28'
									viewBox='0 0 28 28'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='relative z-10'
								>
									<path
										d='M14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0ZM20.4445 9.55469L18.2266 20.3516C18.0664 21.0938 17.6484 21.2695 17.043 20.9219L13.6055 18.3867L11.9492 19.9727C11.7734 20.1484 11.625 20.2969 11.2852 20.2969L11.5195 16.793L17.8359 11.0781C18.1016 10.8438 17.7773 10.7109 17.4219 10.9453L9.54297 15.9023L6.15625 14.8281C5.42969 14.5938 5.41406 14.1172 6.31641 13.7695L19.5391 8.625C20.1445 8.39062 20.6602 8.76172 20.4445 9.55469Z'
										className='fill-primary group-hover:fill-dark transition-colors duration-300'
									/>
								</svg>
							</div>

							{/* Анимированные волны */}
							<div className='absolute inset-0 rounded-full border-2 border-white/30 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500'></div>
						</div>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
