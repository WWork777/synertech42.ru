export type PropertyHomes = {
	name: string
	slug: string
	location: string
	description?: string[]
	tasks?: { title: string; src1: string; src2: string }[]
	technical?: { title: string; src: string }[]
	rate: string
	term: string
	beds: number
	baths: number
	area: number
	images: PropertyImage[]
}

interface PropertyImage {
	src: string
}
