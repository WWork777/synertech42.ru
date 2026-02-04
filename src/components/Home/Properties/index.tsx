import { propertyHomes } from '@/app/api/propertyhomes'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import PropertyCard from './Card/Card'

const Properties: React.FC = () => {
	const filteredArray = propertyHomes.filter(
		item =>
			item.slug === 'poromer-atmos-01' ||
			item.slug === 'datchik-temp-kultur' ||
			item.slug === 'smart-zaslon',
	)
	return (
		<section className='py-8 sm:py-12 md:py-16 lg:py-20'>
			<div className='container max-w-8xl mx-auto px-4 sm:px-5 lg:px-5 2xl:px-0'>
				<div className='mb-8 sm:mb-12 md:mb-16 flex flex-col gap-2 sm:gap-3'>
					<div className='flex gap-2 sm:gap-2.5 items-center justify-center'>
						<span>
							<Icon
								icon={'ph:cpu-fill'}
								width={18}
								height={18}
								className='text-primary sm:w-5 sm:h-5'
							/>
						</span>
						<p className='text-xs sm:text-sm md:text-base font-semibold text-dark/75'>
							Портфолио
						</p>
					</div>
					<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-52 font-medium text-dark text-center leading-tight mb-2'>
						Наши разработки и проекты
					</h2>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
					{/* {propertyHomes
						.reverse()
						.slice(0, 6)
						.map((item, index) => (
							<div
								key={index}
								className='self-stretch [&>div]:h-full [&>div>div]:h-full [&>div>div]:flex [&>div>div]:flex-col'
							>
								<PropertyCard item={item} />
							</div>
						))} */}
					{filteredArray.map((item, index) => (
						<div
							key={index}
							className='self-stretch [&>div]:h-full [&>div>div]:h-full [&>div>div]:flex [&>div>div]:flex-col'
						>
							<PropertyCard item={item} />
						</div>
					))}
				</div>
				<Link
					href='/properties'
					className='block  max-w-[250px] mx-auto mt-10 px-6 sm:px-8 py-3 sm:py-4 border border-primary bg-primary text-white text-center duration-300 hover:bg-primary-hover text-sm sm:text-base font-semibold rounded-full hover:cursor-pointer whitespace-nowrap'
				>
					Другие проекты
				</Link>
			</div>
		</section>
	)
}

export default Properties
