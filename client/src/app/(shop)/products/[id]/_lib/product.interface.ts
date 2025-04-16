/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

export interface IProduct {
    id: string
    name: string
    brand: string
    description: string
    price: {
        original: number
        current: number
        discount?: number
    }
    images: {
        src: string
        alt: string
    }[]
    rating: number
    reviews: number
    colors: { name: string, value: string }[]
    sizes: string[]
    weight: string
    warranty: string
    specifications: Record<string, string>
    features: string[]
    inStock: boolean
}
