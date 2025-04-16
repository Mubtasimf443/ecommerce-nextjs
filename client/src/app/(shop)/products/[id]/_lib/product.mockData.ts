/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IProduct } from "./product.interface";


export const mockProduct: IProduct = {
    id: 'fhsifsoigciu',
    name: "Premium Organic Cotton T-Shirt",
    brand: "EcoWear",
    description: "Our premium organic cotton t-shirt combines comfort with sustainability. Made from 100% organic cotton, this shirt is soft, breathable, and environmentally friendly. Perfect for everyday wear, it features a classic fit that suits all body types.",
    price: {
        original: 1499,
        current: 999,
        discount: 33
    },
    images: [
        { src: "/images/product.svg", alt: "T-shirt front view" },
        { src: "/images/product.svg", alt: "T-shirt back view" },
        { src: "/images/product.svg", alt: "T-shirt side view" },
        { src: "/images/product.svg", alt: "T-shirt material close-up" }
    ],
    rating: 4.5,
    reviews: 243,
    colors: [
        { name: "Black", value: "#000000" },
        { name: "White", value: "#FFFFFF" },
        { name: "Navy Blue", value: "#0A2463" },
        { name: "Forest Green", value: "#228B22" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    weight: "180g",
    warranty: "30-day satisfaction guarantee",
    specifications: {
        "Material": "100% Organic Cotton",
        "Fit": "Regular",
        "Neck Type": "Round Neck",
        "Sleeve Type": "Short Sleeve",
        "Care Instructions": "Machine wash cold, tumble dry low",
        "Country of Origin": "Bangladesh"
    },
    features: [
        "Made from 100% organic cotton",
        "Eco-friendly dyes",
        "Reinforced stitching for durability",
        "Pre-shrunk fabric",
        "Tagless for maximum comfort"
    ],
    inStock: true
}