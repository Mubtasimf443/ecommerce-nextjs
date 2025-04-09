/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

interface INameAndSlug {
    name: string;
    slug: string;
}

interface Items {
    categoryName: string;
    productsTypes: INameAndSlug[];
}

const categoriesAndproductsTypes: Items[] = [
    {
        categoryName: "Featured Collections",
        productsTypes: [
            { name: "All Products", slug: "all" },
            { name: "Latest Products", slug: "new" },
            { name: "Most Loved", slug: "mostLoved" },
            { name: "Best Sellers", slug: "hotSales" },
            { name: "Featured Products", slug: "featured" },
            { name: "Recommended Products", slug: "recommended" },
            { name: "In Stock", slug: "in-stock" },
            { name: "On Discount", slug: "discounted" },
            { name: "On Promotion", slug: "on-promotion" }
        ]
    },
    {
        categoryName: "Clothing",
        productsTypes: [
            { name: "T-shirts", slug: "t-shirts" },
            { name: "Jeans", slug: "jeans" },
            { name: "Dresses", slug: "dresses" },
            { name: "Jackets", slug: "jackets" },
            { name: "Sports wear", slug: "sports-wear" },
            { name: "Formal wear", slug: "formal-wear" },
            { name: "Sweaters", slug: "sweaters" },
            { name: "Shirts", slug: "shirts" },
            { name: "Trousers", slug: "trousers" },
            { name: "Shorts", slug: "shorts" },
            { name: "Blouses", slug: "blouses" },
            { name: "Lingerie", slug: "lingerie" },
            { name: "Maternity clothes", slug: "maternity-clothes" },
            { name: "Night dresses", slug: "night-dresses" },
            { name: "Bath Robes", slug: "bath-robes" },
            { name: "Uniforms", slug: "uniforms" },
            { name: "Yoga wear", slug: "yoga-wear" }
        ]
    },
    {
        categoryName: "Home & Living",
        productsTypes: [
            { name: "Bed linen", slug: "bed-linen" },
            { name: "Bath linen", slug: "bath-linen" },
            { name: "Curtains", slug: "curtains" },
            { name: "Cushions", slug: "cushions" },
            { name: "Lighting", slug: "lighting" }
        ]
    },
    {
        categoryName: "Electronics",
        productsTypes: [
            { name: "Cell Phones", slug: "cell-phones" },
            { name: "Laptops", slug: "laptops" },
            { name: "Tablets", slug: "tablets" },
            { name: "Televisions", slug: "televisions" },
            { name: "Cameras", slug: "cameras" },
            { name: "Video Games", slug: "video-games" },
            { name: "Audio", slug: "audio" },
            { name: "Smart Home", slug: "smart-home" },
            { name: "Car Electronics", slug: "car-electronics" }
        ]
    },
    {
        categoryName: "Appliances",
        productsTypes: [
            { name: "Kitchen Appliances", slug: "kitchen-appliances" },
            { name: "Air Conditioners", slug: "air-conditioners" },
            { name: "Microwave Ovens", slug: "microwave-ovens" },
            { name: "Fans", slug: "fans" },
            { name: "Water Heaters", slug: "water-heaters" },
            { name: "Refrigerators", slug: "refrigerators" }
        ]
    },
    {
        categoryName: "Beauty & Personal Care",
        productsTypes: [
            { name: "Skin Care", slug: "skin-care" },
            { name: "Hair Care", slug: "hair-care" },
            { name: "Makeup (Cosmetics)", slug: "makeup" },
            { name: "Shampoos", slug: "shampoos" },
            { name: "Conditioners", slug: "conditioners" },
            { name: "Perfumes", slug: "perfumes" },
            { name: "Baby care products", slug: "baby-care-products" }
        ]
    },
    {
        categoryName: "Sports & Outdoors",
        productsTypes: [
            { name: "Sports & Outdoors", slug: "sports-and-outdoors" },
            { name: "Cycling", slug: "cycling" }
        ]
    },
    {
        categoryName: "Books & Entertainment",
        productsTypes: [
            { name: "Books & Stationery", slug: "books-and-stationery" },
            { name: "Toys & Games", slug: "toys-and-games" }
        ]
    },
    {
        categoryName: "Accessories",
        productsTypes: [
            { name: "Jewelry & Accessories", slug: "jewelry-and-accessories" },
            { name: "Accessories", slug: "accessories" }
        ]
    },
    {
        categoryName: "Office & Computing",
        productsTypes: [
            { name: "Office Electronics", slug: "office-electronics" },
            { name: "Computer Components", slug: "computer-components" },
            { name: "Software", slug: "software" },
            { name: "Networking", slug: "networking" },
            { name: "Printers", slug: "printers" },
            { name: "Scanners", slug: "scanners" },
            { name: "Monitors", slug: "monitors" },
            { name: "Projectors", slug: "projectors" },
            { name: "Ink & Toner", slug: "ink-toner" }
        ]
    },
    {
        categoryName: "Miscellaneous",
        productsTypes: [
            { name: "Batteries", slug: "batteries" },
            { name: "Cables", slug: "cables" }
        ]
    }
];

export default categoriesAndproductsTypes;