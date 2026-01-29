import { propertyHomes } from '@/app/api/propertyhomes'
import { Icon } from '@iconify/react'
import PropertyCard from './Card/Card'

const Properties: React.FC = () => {
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
					{propertyHomes.slice(0, 3).map((item, index) => (
						<div
							key={index}
							className='self-stretch [&>div]:h-full [&>div>div]:h-full [&>div>div]:flex [&>div>div]:flex-col'
						>
							<PropertyCard item={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Properties
