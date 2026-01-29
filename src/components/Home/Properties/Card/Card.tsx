import { PropertyHomes } from '@/types/properyHomes'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const PropertyCard: React.FC<{ item: PropertyHomes }> = ({ item }) => {
	const { name, location, rate, slug, images } = item

	const mainImage = images[0]?.src

	return (
		<div>
			<div className='relative rounded-2xl border border-dark/10 border-gray/10 group hover:shadow-3xl duration-300 hover:shadow-primary/20'>
				<div className='overflow-hidden rounded-t-2xl flex flex-grow-1'>
					<Link href={`/properties/${slug}`} className='cursor-pointer'>
						{mainImage && (
							<Image
								src={mainImage}
								alt={name}
								width={440}
								height={300}
								className='w-full rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75'
								unoptimized={true}
							/>
						)}
					</Link>
					<div className='absolute top-6 right-6 p-4 bg-white rounded-full hidden group-hover:block '>
						<Link href={`/properties/${slug}`}>
							{' '}
							<Icon
								icon={'solar:arrow-right-linear'}
								width={24}
								height={24}
								className='text-black'
							/>
						</Link>
					</div>
				</div>
				<div className='p-6'>
					<div className='flex flex-col gap-3'>
						<Link href={`/properties/${slug}`}>
							<h3 className='text-xl font-medium text-black text-dark duration-300 group-hover:text-primary'>
								{name}
							</h3>
						</Link>
						<div className='flex justify-between items-center'>
							<p className='text-base font-normal text-black/50 text-gray'>
								Статус: {location}
							</p>
							<button className='text-sm font-medium text-primary px-4 py-1.5 rounded-full bg-primary/10'>
								{rate}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PropertyCard
