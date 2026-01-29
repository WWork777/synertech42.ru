import PropertiesListing from '@/components/Properties/PropertyList'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Наши проекты | Синертек',
}

const page = () => {
	return (
		<>
			<section className='py-8 sm:py-12 md:py-16 lg:py-20'>
				<div className='container mx-auto max-w-8xl px-4 sm:px-5 lg:px-5 2xl:px-0'>
					<Link
						href='/'
						className='inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 sm:mb-8 text-sm sm:text-base'
					>
						<Icon
							icon='ph:arrow-left'
							width={18}
							height={18}
							className='sm:w-5 sm:h-5'
						/>
						На главную
					</Link>
					<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-52 font-medium text-dark mb-4 sm:mb-6 leading-tight'>
						Портфолио выполненных работ
					</h1>
					<p className='text-sm sm:text-base lg:text-lg text-dark/50 max-w-3xl leading-relaxed'>
						Примеры разработанного и изготовленного нами оборудования для
						промышленности и научных исследований
					</p>
				</div>
			</section>
			<PropertiesListing />
		</>
	)
}

export default page
