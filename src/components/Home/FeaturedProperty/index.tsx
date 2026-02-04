// 'use client'
// // import { featuredProprty } from '@/app/api/featuredproperty'
// import { propertyHomes } from '@/app/api/propertyhomes'
// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// 	type CarouselApi,
// } from '@/components/ui/carousel'
// import { Icon } from '@iconify/react'
// import Link from 'next/link'
// import * as React from 'react'

// const FeaturedProperty: React.FC = () => {
// 	const [api, setApi] = React.useState<CarouselApi | undefined>(undefined)
// 	const [current, setCurrent] = React.useState(0)
// 	const [count, setCount] = React.useState(0)
// 	React.useEffect(() => {
// 		if (!api) {
// 			return
// 		}
// 		setCount(api.scrollSnapList().length)
// 		setCurrent(api.selectedScrollSnap() + 1)

// 		api.on('select', () => {
// 			setCurrent(api.selectedScrollSnap() + 1)
// 		})
// 	}, [api])

// 	const handleDotClick = (index: number) => {
// 		if (api) {
// 			api.scrollTo(index)
// 		}
// 	}

// 	return (
// 		<section className='py-8 sm:py-12 md:py-16 lg:py-20'>
// 			<div className='container max-w-8xl mx-auto px-4 sm:px-5 lg:px-5 2xl:px-0'>
// 				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12'>
// 					<div className='relative'>
// 						<Carousel
// 							setApi={setApi}
// 							opts={{
// 								loop: true,
// 							}}
// 						>
// 							<CarouselContent>
// 								{propertyHomes.slice(0, 3).map((item, index) => (
// 									<CarouselItem key={index}>
// 										<div className='rounded-xl sm:rounded-2xl w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[530px] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative overflow-hidden border border-gray-100'>
// 											{/* Animated background pattern */}
// 											<div className='absolute inset-0 opacity-5'>
// 												<svg
// 													className='w-full h-full'
// 													xmlns='http://www.w3.org/2000/svg'
// 												>
// 													<defs>
// 														<pattern
// 															id={`circuit-${index}`}
// 															x='0'
// 															y='0'
// 															width='100'
// 															height='100'
// 															patternUnits='userSpaceOnUse'
// 														>
// 															<circle cx='50' cy='50' r='2' fill='#E83C39' />
// 															<circle cx='0' cy='0' r='2' fill='#E83C39' />
// 															<circle cx='100' cy='0' r='2' fill='#E83C39' />
// 															<circle cx='0' cy='100' r='2' fill='#E83C39' />
// 															<circle cx='100' cy='100' r='2' fill='#E83C39' />
// 															<line
// 																x1='0'
// 																y1='0'
// 																x2='50'
// 																y2='50'
// 																stroke='#E83C39'
// 																strokeWidth='1'
// 															/>
// 															<line
// 																x1='100'
// 																y1='0'
// 																x2='50'
// 																y2='50'
// 																stroke='#E83C39'
// 																strokeWidth='1'
// 															/>
// 															<line
// 																x1='0'
// 																y1='100'
// 																x2='50'
// 																y2='50'
// 																stroke='#E83C39'
// 																strokeWidth='1'
// 															/>
// 															<line
// 																x1='100'
// 																y1='100'
// 																x2='50'
// 																y2='50'
// 																stroke='#E83C39'
// 																strokeWidth='1'
// 															/>
// 														</pattern>
// 													</defs>
// 													<rect
// 														width='100%'
// 														height='100%'
// 														fill={`url(#circuit-${index})`}
// 													/>
// 												</svg>
// 											</div>

// 											{/* Decorative circles */}
// 											<div className='absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl'></div>
// 											<div className='absolute bottom-10 left-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl'></div>

// 											{/* Content */}
// 											<div className='relative z-10 flex flex-col items-center gap-8'>
// 												<div className='relative'>
// 													<div className='absolute inset-0 bg-primary/10 rounded-full blur-xl'></div>
// 													<Icon
// 														icon='ph:cpu-bold'
// 														className='text-primary relative z-10 w-20 h-20 sm:w-[140px] sm:h-[140px]'
// 														width={80}
// 														height={80}
// 													/>
// 												</div>

// 												<div className='flex items-center gap-3 sm:gap-6'>
// 													<div className='w-12 sm:w-16 h-12 sm:h-16 rounded-lg bg-white flex items-center justify-center border-2 border-primary/20 shadow-sm'>
// 														<Icon
// 															icon='ph:gear-six'
// 															className='text-primary w-6 h-6 sm:w-8 sm:h-8'
// 															width={24}
// 															height={24}
// 														/>
// 													</div>
// 													<div className='w-12 sm:w-16 h-12 sm:h-16 rounded-lg bg-white flex items-center justify-center border-2 border-primary/20 shadow-sm'>
// 														<Icon
// 															icon='ph:circuit'
// 															className='text-primary w-6 h-6 sm:w-8 sm:h-8'
// 															width={24}
// 															height={24}
// 														/>
// 													</div>
// 													<div className='w-12 sm:w-16 h-12 sm:h-16 rounded-lg bg-white flex items-center justify-center border-2 border-primary/20 shadow-sm'>
// 														<Icon
// 															icon='ph:microchip'
// 															className='text-primary w-6 h-6 sm:w-8 sm:h-8'
// 															width={24}
// 															height={24}
// 														/>
// 													</div>
// 												</div>

// 												<div className='text-center'>
// 													<p className='text-gray-500 text-xs sm:text-sm font-medium mb-1'>
// 														{item.name.toUpperCase()}
// 													</p>
// 													<p className='text-dark text-xl sm:text-2xl font-semibold'>
// 														№ {index + 1}
// 													</p>
// 												</div>
// 											</div>

// 											{/* Corner decorations */}
// 											<div className='absolute top-0 left-0 w-20 h-20'>
// 												<div className='absolute top-4 left-4 w-12 h-0.5 bg-primary/20'></div>
// 												<div className='absolute top-4 left-4 w-0.5 h-12 bg-primary/20'></div>
// 											</div>
// 											<div className='absolute bottom-0 right-0 w-20 h-20'>
// 												<div className='absolute bottom-4 right-4 w-12 h-0.5 bg-primary/20'></div>
// 												<div className='absolute bottom-4 right-4 w-0.5 h-12 bg-primary/20'></div>
// 											</div>
// 										</div>
// 									</CarouselItem>
// 								))}
// 							</CarouselContent>
// 						</Carousel>
// 						<div className='absolute left-1/2 -translate-x-1/2 bg-dark/50 rounded-full py-2 sm:py-2.5 bottom-6 sm:bottom-10 flex justify-center mt-4 gap-2 sm:gap-2.5 px-2.5'>
// 							{Array.from({ length: count }).map((_, index) => (
// 								<button
// 									key={index}
// 									onClick={() => handleDotClick(index)}
// 									className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full ${current === index + 1 ? 'bg-white' : 'bg-white/50'}`}
// 								/>
// 							))}
// 						</div>
// 					</div>
// 					<div className='flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center'>
// 						<div className='flex flex-col gap-4 sm:gap-6'>
// 							<Link
// 								href={`/properties/${item.slug}`}
// 								className='py-3 sm:py-4 px-6 sm:px-8 bg-primary text-white rounded-full font-semibold hover:bg-dark duration-300 text-center w-full text-sm sm:text-base'
// 							>
// 								Подробнее о проекте
// 							</Link>
// 							<Link
// 								href='/contactus'
// 								className='py-3 sm:py-4 px-6 sm:px-8 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white duration-300 text-center w-full text-sm sm:text-base'
// 							>
// 								Связаться с нами
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// export default FeaturedProperty

'use client'
import { propertyHomes } from '@/app/api/propertyhomes'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from '@/components/ui/carousel'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import * as React from 'react'

const FeaturedProperty: React.FC = () => {
	const [api, setApi] = React.useState<CarouselApi | undefined>(undefined)
	const [current, setCurrent] = React.useState(0)
	const [count, setCount] = React.useState(0)
	const [currentItem, setCurrentItem] = React.useState(propertyHomes[0]) // Добавляем состояние для текущего элемента

	React.useEffect(() => {
		if (!api) {
			return
		}
		setCount(api.scrollSnapList().length)

		const updateCurrent = () => {
			const newIndex = api.selectedScrollSnap()
			setCurrent(newIndex + 1)
			setCurrentItem(propertyHomes[newIndex]) // Обновляем текущий элемент
		}

		updateCurrent() // Инициализация при первом рендере

		api.on('select', updateCurrent)

		return () => {
			api.off('select', updateCurrent)
		}
	}, [api])

	const handleDotClick = (index: number) => {
		if (api) {
			api.scrollTo(index)
			setCurrentItem(propertyHomes[index]) // Обновляем при клике на точки
		}
	}

	return (
		<section className='py-8 sm:py-12 md:py-16 lg:py-20'>
			<div className='container max-w-8xl mx-auto px-4 sm:px-5 lg:px-5 2xl:px-0'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12'>
					<div className='relative'>
						<Carousel
							setApi={setApi}
							opts={{
								loop: true,
							}}
						>
							<CarouselContent>
								{propertyHomes.slice(0, 3).map((item, index) => (
									<CarouselItem key={index}>
										<div className='rounded-xl sm:rounded-2xl w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[530px] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative overflow-hidden border border-gray-100 cursor-pointer'>
											{/* Animated background pattern */}
											<div className='absolute inset-0 opacity-5'>
												<svg
													className='w-full h-full'
													xmlns='http://www.w3.org/2000/svg'
												>
													<defs>
														<pattern
															id={`circuit-${index}`}
															x='0'
															y='0'
															width='100'
															height='100'
															patternUnits='userSpaceOnUse'
														>
															<circle cx='50' cy='50' r='2' fill='#E83C39' />
															<circle cx='0' cy='0' r='2' fill='#E83C39' />
															<circle cx='100' cy='0' r='2' fill='#E83C39' />
															<circle cx='0' cy='100' r='2' fill='#E83C39' />
															<circle cx='100' cy='100' r='2' fill='#E83C39' />
															<line
																x1='0'
																y1='0'
																x2='50'
																y2='50'
																stroke='#E83C39'
																strokeWidth='1'
															/>
															<line
																x1='100'
																y1='0'
																x2='50'
																y2='50'
																stroke='#E83C39'
																strokeWidth='1'
															/>
															<line
																x1='0'
																y1='100'
																x2='50'
																y2='50'
																stroke='#E83C39'
																strokeWidth='1'
															/>
															<line
																x1='100'
																y1='100'
																x2='50'
																y2='50'
																stroke='#E83C39'
																strokeWidth='1'
															/>
														</pattern>
													</defs>
													<rect
														width='100%'
														height='100%'
														fill={`url(#circuit-${index})`}
													/>
												</svg>
											</div>

											{/* Decorative circles */}
											<div className='absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl'></div>
											<div className='absolute bottom-10 left-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl'></div>

											{/* Content */}
											<div className='relative z-10 flex flex-col items-center gap-8'>
												<div className='relative'>
													<div className='absolute inset-0 bg-primary/10 rounded-full blur-xl'></div>
													<Icon
														icon='ph:cpu-bold'
														className='text-primary relative z-10 w-20 h-20 sm:w-[140px] sm:h-[140px]'
														width={80}
														height={80}
													/>
												</div>

												<div className='flex items-center gap-3 sm:gap-6'>
													<div className='w-12 sm:w-16 h-12 sm:h-16 rounded-lg bg-white flex items-center justify-center border-2 border-primary/20 shadow-sm'>
														<Icon
															icon='ph:gear-six'
															className='text-primary w-6 h-6 sm:w-8 sm:h-8'
															width={24}
															height={24}
														/>
													</div>
													<div className='w-12 sm:w-16 h-12 sm:h-16 rounded-lg bg-white flex items-center justify-center border-2 border-primary/20 shadow-sm'>
														<Icon
															icon='ph:sun'
															className='text-primary w-6 h-6 sm:w-8 sm:h-8'
															width={24}
															height={24}
														/>
													</div>
													<div className='w-12 sm:w-16 h-12 sm:h-16 rounded-lg bg-white flex items-center justify-center border-2 border-primary/20 shadow-sm'>
														<Icon
															icon='ph:television-simple'
															className='text-primary w-6 h-6 sm:w-8 sm:h-8'
															width={24}
															height={24}
														/>
													</div>
												</div>

												<div className='text-center'>
													<p className='text-gray-500 text-xs sm:text-sm font-medium mb-1'>
														{item.name.toUpperCase()}
													</p>
													<p className='text-dark text-xl sm:text-2xl font-semibold'>
														№ {index + 1}
													</p>
												</div>
											</div>

											{/* Corner decorations */}
											<div className='absolute top-0 left-0 w-20 h-20'>
												<div className='absolute top-4 left-4 w-12 h-0.5 bg-primary/20'></div>
												<div className='absolute top-4 left-4 w-0.5 h-12 bg-primary/20'></div>
											</div>
											<div className='absolute bottom-0 right-0 w-20 h-20'>
												<div className='absolute bottom-4 right-4 w-12 h-0.5 bg-primary/20'></div>
												<div className='absolute bottom-4 right-4 w-0.5 h-12 bg-primary/20'></div>
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
						<div className='absolute left-1/2 -translate-x-1/2 bg-dark/50 rounded-full py-2 sm:py-2.5 bottom-6 sm:bottom-10 flex justify-center mt-4 gap-2 sm:gap-2.5 px-2.5'>
							{Array.from({ length: count }).map((_, index) => (
								<button
									key={index}
									onClick={() => handleDotClick(index)}
									className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full ${current === index + 1 ? 'bg-white' : 'bg-white/50'}`}
								/>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center'>
						<div className='flex-1'>
							<div className='flex items-center gap-1 pb-3'>
								<Icon
									icon={'ph:cpu-fill'}
									width={18}
									height={18}
									className='text-primary sm:w-5 sm:h-5'
								/>
								<p className='text-xs sm:text-sm md:text-base font-semibold text-dark/75'>
									Избранный проект
								</p>
							</div>
							<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-52 font-medium text-dark leading-6 sm:leading-12 mb-4'>
								{currentItem.name}
							</h1>
							{currentItem.description?.map((item, i) => (
								<p
									key={i}
									className='text-dark/65 text-xs sm:text-sm md:text-base pb-1'
								>
									{item}
								</p>
							))}
						</div>

						<div className='flex flex-col gap-4 sm:gap-6'>
							{/* Используем currentItem для ссылки */}
							<Link
								href={`/properties/${currentItem.slug}`}
								className='py-3 sm:py-4 px-6 sm:px-8 bg-primary text-white rounded-full font-semibold hover:bg-dark duration-300 text-center w-full text-sm sm:text-base'
							>
								Подробнее о проекте
							</Link>
							<Link
								href='/contactus'
								className='py-3 sm:py-4 px-6 sm:px-8 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white duration-300 text-center w-full text-sm sm:text-base'
							>
								Связаться с нами
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeaturedProperty
