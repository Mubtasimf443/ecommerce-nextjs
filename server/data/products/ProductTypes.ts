
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah */

interface IProductTypes {
    id: number;
    name: string;
    slug: string;
    parentPrimeCategoryId: number;
    parentSubCategoryId: number;
}

const ProductTypes: IProductTypes[] = [
    // Men's Clothing Product Types
    {
        id: 1,
        name: "T-Shirts",
        slug: "t-shirts",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 1
    },
    {
        id: 2,
        name: "Shirts",
        slug: "shirts",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 1
    },
    {
        id: 3,
        name: "Jeans",
        slug: "jeans",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 1
    },
    {
        id: 4,
        name: "Trousers",
        slug: "trousers",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 1
    },
    {
        id: 5,
        name: "Shorts",
        slug: "shorts",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 1
    },
    {
        id: 6,
        name: "Jackets",
        slug: "jackets",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 1
    },
    {
        id: 7,
        name: "Sweaters",
        slug: "sweaters",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 1
    },
    
    // Women's Clothing Product Types
    {
        id: 8,
        name: "Dresses",
        slug: "dresses",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 2
    },
    {
        id: 9,
        name: "Tops",
        slug: "tops",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 2
    },
    {
        id: 10,
        name: "Blouses",
        slug: "blouses",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 2
    },
    {
        id: 11,
        name: "Sarees",
        slug: "sarees",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 2
    },
    {
        id: 12,
        name: "Kurtis",
        slug: "kurtis",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 2
    },
    {
        id: 13,
        name: "Skirts",
        slug: "skirts",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 2
    },
    {
        id: 14,
        name: "Jeans",
        slug: "womens-jeans",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 2
    },
    {
        id: 15,
        name: "Lingerie",
        slug: "lingerie",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 2
    },
    
    // Children's Clothing Product Types
    {
        id: 16,
        name: "Boys Outfits",
        slug: "boys-outfits",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 3
    },
    {
        id: 17,
        name: "Girls Dresses",
        slug: "girls-dresses",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 3
    },
    {
        id: 18,
        name: "Baby Clothes",
        slug: "baby-clothes",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 3
    },
    {
        id: 19,
        name: "School Uniforms",
        slug: "school-uniforms",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 3
    },
    
    // Traditional Wear Product Types
    {
        id: 20,
        name: "Sherwanis",
        slug: "sherwanis",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 4
    },
    {
        id: 21,
        name: "Lehengas",
        slug: "lehengas",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 4
    },
    {
        id: 22,
        name: "Salwar Kameez",
        slug: "salwar-kameez",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 4
    },
    
    // Sportswear Product Types
    {
        id: 23,
        name: "Gym Clothes",
        slug: "gym-clothes",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 5
    },
    {
        id: 24,
        name: "Yoga Wear",
        slug: "yoga-wear",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 5
    },
    {
        id: 25,
        name: "Running Gear",
        slug: "running-gear",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 5
    },
    
    // Formal Wear Product Types
    {
        id: 26,
        name: "Suits",
        slug: "suits",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 6
    },
    {
        id: 27,
        name: "Formal Shirts",
        slug: "formal-shirts",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 6
    },
    {
        id: 28,
        name: "Formal Trousers",
        slug: "formal-trousers",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 6
    },
    
    // Maternity Wear Product Types
    {
        id: 29,
        name: "Maternity Dresses",
        slug: "maternity-dresses",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 7
    },
    {
        id: 30,
        name: "Maternity Tops",
        slug: "maternity-tops",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 7
    },
    
    // Sleep & Lounge Product Types
    {
        id: 31,
        name: "Night Dresses",
        slug: "night-dresses",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 8
    },
    {
        id: 32,
        name: "Bath Robes",
        slug: "bath-robes",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 8
    },
    {
        id: 33,
        name: "Pajamas",
        slug: "pajamas",
        parentPrimeCategoryId: 1,
        parentSubCategoryId: 8
    },
    
    // Smartphones & Accessories Product Types
    {
        id: 34,
        name: "Cell Phones",
        slug: "cell-phones",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 9
    },
    {
        id: 35,
        name: "Phone Cases",
        slug: "phone-cases",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 9
    },
    {
        id: 36,
        name: "Chargers",
        slug: "chargers",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 9
    },
    {
        id: 37,
        name: "Power Banks",
        slug: "power-banks",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 9
    },
    
    // Computers & Tablets Product Types
    {
        id: 38,
        name: "Laptops",
        slug: "laptops",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 10
    },
    {
        id: 39,
        name: "Tablets",
        slug: "tablets",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 10
    },
    {
        id: 40,
        name: "Desktop Computers",
        slug: "desktop-computers",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 10
    },
    
    // Audio & Headphones Product Types
    {
        id: 41,
        name: "Headphones",
        slug: "headphones",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 11
    },
    {
        id: 42,
        name: "Bluetooth Speakers",
        slug: "bluetooth-speakers",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 11
    },
    {
        id: 43,
        name: "Home Audio",
        slug: "home-audio",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 11
    },
    
    // TVs & Entertainment Product Types
    {
        id: 44,
        name: "Televisions",
        slug: "televisions",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 12
    },
    {
        id: 45,
        name: "Streaming Devices",
        slug: "streaming-devices",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 12
    },
    
    // Camera & Photo Product Types
    {
        id: 46,
        name: "Cameras",
        slug: "cameras",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 13
    },
    {
        id: 47,
        name: "Camera Lenses",
        slug: "camera-lenses",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 13
    },
    
    // Smart Home Product Types
    {
        id: 48,
        name: "Smart Speakers",
        slug: "smart-speakers",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 14
    },
    {
        id: 49,
        name: "Smart Lighting",
        slug: "smart-lighting",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 14
    },
    
    // Office Electronics Product Types
    {
        id: 50,
        name: "Printers",
        slug: "printers",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 15
    },
    {
        id: 51,
        name: "Scanners",
        slug: "scanners",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 15
    },
    {
        id: 52,
        name: "Monitors",
        slug: "monitors",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 15
    },
    {
        id: 53,
        name: "Projectors",
        slug: "projectors",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 15
    },
    
    // Car Electronics Product Types
    {
        id: 54,
        name: "Car Audio",
        slug: "car-audio",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 16
    },
    {
        id: 55,
        name: "Car GPS",
        slug: "car-gps",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 16
    },
    
    // Computer Components Product Types
    {
        id: 56,
        name: "Processors",
        slug: "processors",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 17
    },
    {
        id: 57,
        name: "Graphics Cards",
        slug: "graphics-cards",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 17
    },
    {
        id: 58,
        name: "Memory (RAM)",
        slug: "ram",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 17
    },
    {
        id: 59,
        name: "Storage",
        slug: "storage",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 17
    },
    
    // Kitchen Appliances Product Types
    {
        id: 60,
        name: "Blenders",
        slug: "blenders",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 18
    },
    {
        id: 61,
        name: "Microwave Ovens",
        slug: "microwave-ovens",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 18
    },
    {
        id: 62,
        name: "Rice Cookers",
        slug: "rice-cookers",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 18
    },
    {
        id: 63,
        name: "Coffee Makers",
        slug: "coffee-makers",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 18
    },
    
    // Home Appliances Product Types
    {
        id: 64,
        name: "Air Conditioners",
        slug: "air-conditioners",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 19
    },
    {
        id: 65,
        name: "Fans",
        slug: "fans",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 19
    },
    {
        id: 66,
        name: "Water Heaters",
        slug: "water-heaters",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 19
    },
    {
        id: 67,
        name: "Refrigerators",
        slug: "refrigerators",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 19
    },
    
    // Furniture Product Types
    {
        id: 68,
        name: "Sofas",
        slug: "sofas",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 20
    },
    {
        id: 69,
        name: "Beds",
        slug: "beds",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 20
    },
    {
        id: 70,
        name: "Dining Tables",
        slug: "dining-tables",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 20
    },
    
    // Home Decor Product Types
    {
        id: 71,
        name: "Curtains",
        slug: "curtains",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 21
    },
    {
        id: 72,
        name: "Cushions",
        slug: "cushions",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 21
    },
    
    // Bedding & Linen Product Types
    {
        id: 73,
        name: "Bed Linen",
        slug: "bed-linen",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 22
    },
    {
        id: 74,
        name: "Blankets",
        slug: "blankets",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 22
    },
    
    // Bath Product Types
    {
        id: 75,
        name: "Bath Linen",
        slug: "bath-linen",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 23
    },
    {
        id: 76,
        name: "Shower Curtains",
        slug: "shower-curtains",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 23
    },
    
    // Lighting Product Types
    {
        id: 77,
        name: "Ceiling Lights",
        slug: "ceiling-lights",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 24
    },
    {
        id: 78,
        name: "Table Lamps",
        slug: "table-lamps",
        parentPrimeCategoryId: 3,
        parentSubCategoryId: 24
    },
    
    // Skincare Product Types
    {
        id: 79,
        name: "Face Wash",
        slug: "face-wash",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 25
    },
    {
        id: 80,
        name: "Moisturizers",
        slug: "moisturizers",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 25
    },
    {
        id: 81,
        name: "Sunscreen",
        slug: "sunscreen",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 25
    },
    
    // Haircare Product Types
    {
        id: 82,
        name: "Shampoos",
        slug: "shampoos",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 26
    },
    {
        id: 83,
        name: "Conditioners",
        slug: "conditioners",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 26
    },
    {
        id: 84,
        name: "Hair Oils",
        slug: "hair-oils",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 26
    },
    
    // Makeup & Cosmetics Product Types
    {
        id: 85,
        name: "Foundation",
        slug: "foundation",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 27
    },
    {
        id: 86,
        name: "Lipstick",
        slug: "lipstick",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 27
    },
    {
        id: 87,
        name: "Eye Makeup",
        slug: "eye-makeup",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 27
    },
    
    // Fragrances Product Types
    {
        id: 88,
        name: "Perfumes",
        slug: "perfumes",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 28
    },
    {
        id: 89,
        name: "Deodorants",
        slug: "deodorants",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 28
    },
    
    // Baby Care Product Types
    {
        id: 90,
        name: "Baby Skin Care",
        slug: "baby-skin-care",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 29
    },
    {
        id: 91,
        name: "Baby Bath Products",
        slug: "baby-bath-products",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 29
    },
    
    // Sports Equipment Product Types
    {
        id: 92,
        name: "Exercise Equipment",
        slug: "exercise-equipment",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 31
    },
    {
        id: 93,
        name: "Yoga Mats",
        slug: "yoga-mats",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 31
    },
    
    // Cycling Product Types
    {
        id: 94,
        name: "Bicycles",
        slug: "bicycles",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 33
    },
    {
        id: 95,
        name: "Cycling Accessories",
        slug: "cycling-accessories",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 33
    }
];

export default ProductTypes;