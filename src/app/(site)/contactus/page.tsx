'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactUs() {
	const [phone, setPhone] = useState('')

	const formatPhoneNumber = (value: string) => {
		// Удаляем все кроме цифр
		const numbers = value.replace(/\D/g, '')

		// Если пусто, возвращаем как есть
		if (!numbers) return ''

		// Если начинается с 7 - форматируем с +7
		if (numbers.startsWith('7')) {
			const phoneNumbers = numbers.slice(1)

			let formatted = '+7'
			if (phoneNumbers.length > 0) {
				formatted += ' (' + phoneNumbers.substring(0, 3)
			}
			if (phoneNumbers.length >= 4) {
				formatted += ') ' + phoneNumbers.substring(3, 6)
			}
			if (phoneNumbers.length >= 7) {
				formatted += '-' + phoneNumbers.substring(6, 8)
			}
			if (phoneNumbers.length >= 9) {
				formatted += '-' + phoneNumbers.substring(8, 10)
			}
			return formatted
		}

		// Если начинается с 8 - форматируем с 8 (без +)
		if (numbers.startsWith('8')) {
			const phoneNumbers = numbers.slice(1)

			let formatted = '8'
			if (phoneNumbers.length > 0) {
				formatted += ' (' + phoneNumbers.substring(0, 3)
			}
			if (phoneNumbers.length >= 4) {
				formatted += ') ' + phoneNumbers.substring(3, 6)
			}
			if (phoneNumbers.length >= 7) {
				formatted += '-' + phoneNumbers.substring(6, 8)
			}
			if (phoneNumbers.length >= 9) {
				formatted += '-' + phoneNumbers.substring(8, 10)
			}
			return formatted
		}

		// Для других кодов стран - просто цифры без +
		return numbers
	}

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formatted = formatPhoneNumber(e.target.value)
		setPhone(formatted)
	}

	return (
		<div className='container max-w-8xl mx-auto px-4 sm:px-5 lg:px-5 2xl:px-0 pt-8 sm:pt-16 md:pt-24 lg:pt-44 pb-8 sm:pb-12 md:pb-20 lg:pb-28'>
			<div className='mb-8 sm:mb-12 md:mb-16'>
				<div className='flex gap-2.5 items-center justify-center mb-3 sm:mb-4'>
					<span>
						<Icon
							icon={'ph:house-simple-fill'}
							width={18}
							height={18}
							className='text-primary sm:w-5 sm:h-5'
						/>
					</span>
					<p className='text-xs sm:text-sm md:text-base font-semibold text-dark/90'>
						Контакты
					</p>
				</div>
				<div className='text-center'>
					<h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-52 font-medium text-dark mb-2 sm:mb-3 leading-tight'>
						Есть вопросы? Готовы помочь!
					</h3>
					<p className='text-xs sm:text-sm md:text-base text-dark/50 leading-relaxed max-w-2xl mx-auto'>
						Разработка устройств с индивидуальным подходом. Наша команда
						экспертов предложит лучшее решение по вашим пожеланиям.
					</p>
				</div>
			</div>
			{/* form */}
			<div className='border border-dark/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl'>
				<div className='flex flex-col  lg:items-center gap-6 md:gap-8 lg:gap-12'>
					<div className='relative w-full lg:w-auto lg:flex-shrink-0 bg-primary rounded-lg sm:rounded-2xl overflow-hidden lg:min-h-[535px]'>
						<svg
							className='w-full h-full absolute inset-0'
							viewBox='0 0 1037 1042'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M383.64 798.221C348.852 797.674 314.064 784.689 286.658 759.059C255.902 730.354 240.456 691.397 240.525 652.372C240.525 652.167 240.525 651.894 240.525 651.689C240.593 619.498 227.813 587.308 202.388 563.592C153.863 518.211 77.7949 520.808 32.4137 569.333C-12.9675 617.858 -10.3703 693.926 38.1547 739.307C59.9568 759.743 87.3633 770.405 115.043 771.635C117.572 771.635 120.032 771.635 122.561 771.703C156.324 772.933 189.744 785.919 216.399 810.797C246.334 838.818 261.78 876.476 262.464 914.476C262.464 916.732 262.464 919.055 262.464 921.311C263.147 952.544 275.928 983.436 300.532 1006.4C349.057 1051.78 425.125 1049.18 470.506 1000.66C515.887 952.134 513.29 876.066 464.765 830.685C442.075 809.498 413.438 798.768 384.665 798.289C384.323 798.289 383.981 798.289 383.571 798.289L383.64 798.221Z'
								fill='#C83331'
								fillOpacity='0.1'
							/>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M304.63 475.153C353.155 520.535 429.224 517.938 474.605 469.412C495.04 447.61 505.702 420.204 506.932 392.524C506.932 389.995 506.932 387.535 507 385.006C508.231 351.244 521.216 317.823 546.094 291.168C574.115 261.233 611.774 245.787 649.773 245.103C651.277 245.103 652.781 245.103 654.353 245.103C654.968 245.103 655.583 245.103 656.198 245.103C689.96 246.334 723.381 259.319 750.036 284.197C779.971 312.218 795.417 349.877 796.1 387.877C796.1 388.56 796.1 389.244 796.1 389.927C796.1 390.269 796.1 390.61 796.1 391.021C795.554 425.808 782.568 460.596 756.939 488.002C728.234 518.689 689.345 534.204 650.389 534.135C650.389 534.135 650.389 534.135 650.32 534.135C650.115 534.135 649.842 534.135 649.637 534.135C617.446 534.067 585.256 546.847 561.54 572.272C516.159 620.797 518.756 696.865 567.281 742.246C589.083 762.682 616.489 773.343 644.169 774.574C646.698 774.574 649.158 774.574 651.687 774.642C685.45 775.872 718.87 788.858 745.525 813.736C775.46 841.757 790.906 879.415 791.59 917.415C791.59 919.671 791.59 921.994 791.59 924.25C792.273 955.483 805.054 986.376 829.658 1009.34C878.183 1054.72 954.251 1052.12 999.632 1003.6C1045.01 955.073 1042.42 879.005 993.891 833.624C971.201 812.437 942.564 801.707 913.791 801.228C913.449 801.228 913.107 801.228 912.697 801.228C877.91 800.682 843.122 787.696 815.715 762.067C784.96 733.362 769.514 694.405 769.582 655.38C769.582 655.175 769.582 654.901 769.582 654.696C769.582 653.808 769.582 652.988 769.582 652.099C770.813 618.337 783.798 584.916 808.676 558.261C836.697 528.326 874.356 512.88 912.356 512.197C914.611 512.197 916.935 512.197 919.19 512.197C950.424 511.513 981.316 498.733 1004.28 474.128C1049.66 425.603 1047.06 349.535 998.539 304.154C975.848 282.967 947.212 272.237 918.438 271.758C918.097 271.758 917.755 271.758 917.345 271.758C882.557 271.211 847.769 258.226 820.363 232.596C789.676 203.891 774.162 165.003 774.23 126.046C774.23 126.046 774.23 125.499 774.23 125.294C774.23 93.1038 761.518 60.9132 736.093 37.1974C687.568 -8.18376 611.5 -5.58666 566.119 42.9384C544.932 65.629 534.202 94.2657 533.723 123.039C533.723 123.381 533.723 123.722 533.723 124.133C533.177 158.92 520.191 193.708 494.562 221.114C465.857 251.87 426.9 267.316 387.875 267.247C387.67 267.247 387.396 267.247 387.191 267.247C355.001 267.179 322.81 279.96 299.094 305.384C253.713 353.909 256.31 429.977 304.835 475.358L304.63 475.153Z'
								fill='#C83331'
								fillOpacity='0.1'
							/>
						</svg>
						<div className='relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 min-h-[300px] sm:min-h-[400px] lg:min-h-[535px] flex flex-col justify-between'>
							<div className='flex flex-col gap-2'>
								<h5 className='text-lg sm:text-xl md:text-2xl font-medium text-white'>
									Контактная информация
								</h5>
								<p className='text-xs sm:text-sm md:text-base font-normal text-white/80'>
									Готовы обсудить ваш проект? Мы всегда на связи для
									консультаций!
								</p>
							</div>
							<div className='flex flex-col gap-3 sm:gap-4 text-white'>
								<Link href={'tel:+79950613997'} className='w-fit'>
									<div className='flex items-center gap-3 sm:gap-4 group'>
										<Icon
											icon={'ph:phone'}
											width={28}
											height={28}
											className='sm:w-8 sm:h-8'
										/>
										<p className='text-xs sm:text-sm md:text-base font-normal group-hover:text-white/60 transition-colors'>
											+7 (995) 061-39-97
										</p>
									</div>
								</Link>
								<Link href={'mailto:synertech42@yandex.ru'} className='w-fit'>
									<div className='flex items-center gap-3 sm:gap-4 group'>
										<Icon
											icon={'ph:envelope-simple'}
											width={28}
											height={28}
											className='sm:w-8 sm:h-8'
										/>
										<p className='text-xs sm:text-sm md:text-base font-normal group-hover:text-white/60 transition-colors'>
											synertech42@yandex.ru
										</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
					{/* <div className=' flex-0 w-full'>
						<form>
							<div className='flex flex-col gap-4 sm:gap-6'>
								<div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
									<input
										type='text'
										name='username'
										id='username'
										autoComplete='username'
										placeholder='Имя*'
										required
										className='px-4 sm:px-6 py-2.5 sm:py-3.5 border border-dark/10 rounded-lg sm:rounded-full outline-primary focus:outline text-xs sm:text-sm w-full'
									/>
									<input
										type='tel'
										name='mobile'
										id='mobile'
										value={phone}
										onChange={handlePhoneChange}
										placeholder='Телефон*'
										required
										className='px-4 sm:px-6 py-2.5 sm:py-3.5 border border-dark/10 rounded-lg sm:rounded-full outline-primary focus:outline text-xs sm:text-sm w-full'
									/>
								</div>
								<input
									type='email'
									name='email'
									id='email'
									autoComplete='email'
									placeholder='Email*'
									required
									className='px-4 sm:px-6 py-2.5 sm:py-3.5 border border-dark/10 rounded-lg sm:rounded-full outline-primary focus:outline text-xs sm:text-sm'
								/>
								<textarea
									rows={6}
									cols={50}
									name='message'
									id='message'
									placeholder='Напишите ваше сообщение'
									required
									className='px-4 sm:px-6 py-2.5 sm:py-3.5 border border-dark/10 rounded-lg sm:rounded-2xl outline-primary focus:outline text-xs sm:text-sm resize-none'
								></textarea>
								<button className='px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-full bg-primary text-white text-xs sm:text-base font-semibold w-full sm:w-fit hover:cursor-pointer hover:bg-dark duration-300 transition-colors'>
									Отправить
								</button>
							</div>
						</form>
					</div> */}
				</div>
			</div>
		</div>
	)
}
