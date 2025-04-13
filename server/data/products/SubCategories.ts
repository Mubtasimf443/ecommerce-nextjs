
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah */

export interface ISubCategories {
    id: number;
    name: string;
    slug: string;
    parentPrimeCategoryId: number;
}

const SubCategories: ISubCategories[] = [
    // Clothing Subcategories
    {
        id: 1,
        name: "Men's Clothing",
        slug: "mens-clothing",
        parentPrimeCategoryId: 1
    },
    {
        id: 2,
        name: "Women's Clothing",
        slug: "womens-clothing",
        parentPrimeCategoryId: 1
    },
    {
        id: 3,
        name: "Children's Clothing",
        slug: "childrens-clothing",
        parentPrimeCategoryId: 1
    },
    {
        id: 4,
        name: "Traditional Wear",
        slug: "traditional-wear",
        parentPrimeCategoryId: 1
    },

    // Electronics Subcategories
    {
        id: 5,
        name: "Smartphones",
        slug: "smartphones",
        parentPrimeCategoryId: 2
    },
    {
        id: 6,
        name: "Laptops & Computers",
        slug: "laptops-computers",
        parentPrimeCategoryId: 2
    },
    {
        id: 7,
        name: "Audio Devices",
        slug: "audio-devices",
        parentPrimeCategoryId: 2
    },

    // Home & Kitchen Subcategories
    {
        id: 8,
        name: "Kitchen Appliances",
        slug: "kitchen-appliances",
        parentPrimeCategoryId: 3
    },
    {
        id: 9,
        name: "Furniture",
        slug: "furniture",
        parentPrimeCategoryId: 3
    },
    {
        id: 10,
        name: "Home Decor",
        slug: "home-decor",
        parentPrimeCategoryId: 3
    },

    // Beauty & Personal Care Subcategories
    {
        id: 11,
        name: "Skincare",
        slug: "skincare",
        parentPrimeCategoryId: 4
    },
    {
        id: 12,
        name: "Haircare",
        slug: "haircare",
        parentPrimeCategoryId: 4
    },
    {
        id: 13,
        name: "Fragrances",
        slug: "fragrances",
        parentPrimeCategoryId: 4
    },

    // Sports & Outdoors Subcategories
    {
        id: 14,
        name: "Sportswear",
        slug: "sportswear",
        parentPrimeCategoryId: 5
    },
    {
        id: 15,
        name: "Sports Equipment",
        slug: "sports-equipment",
        parentPrimeCategoryId: 5
    },
    {
        id: 16,
        name: "Camping Gear",
        slug: "camping-gear",
        parentPrimeCategoryId: 5
    },
    // LiftStyle 14 
    {
        id: 17,
        name: "Watches",
        slug: "watches",
        parentPrimeCategoryId: 14  // Lifestyle
    },
    {
        id: 18,
        name: "Bags",
        slug: "bags",
        parentPrimeCategoryId: 14  // Lifestyle
    },
    {
        id: 19,
        name: "Home Decor",
        slug: "home-decor",
        parentPrimeCategoryId: 14  // Lifestyle
    },
    {
        id: 20,
        name: "Party Supplies",
        slug: "party-supplies",
        parentPrimeCategoryId: 14  // Lifestyle
    },
    {
        id: 21,
        name: "Travel Accessories",
        slug: "travel-accessories",
        parentPrimeCategoryId: 14  // Lifestyle
    },
    {
        id: 22,
        name: "Hobby Items",
        slug: "hobby-items",
        parentPrimeCategoryId: 14  // Lifestyle
    },
    {
        id: 23,
        name: "Cycles",
        slug: "cycles",
        parentPrimeCategoryId: 15  // Vehicle
    },
    {
        id: 24,
        name: "Bikes",
        slug: "bikes",
        parentPrimeCategoryId: 15  // Vehicle
    },
    {
        id: 25,
        name: "Cars",
        slug: "cars",
        parentPrimeCategoryId: 15  // Vehicle
    },
    {
        id: 26,
        name: "Buses",
        slug: "buses",
        parentPrimeCategoryId: 15  // Vehicle
    },
    {
        id: 27,
        name: "Trucks",
        slug: "trucks",
        parentPrimeCategoryId: 15  // Vehicle
    },
    {
        id: 28,
        name: "Tractors",
        slug: "tractors",
        parentPrimeCategoryId: 15  // Vehicle
    },
    {
        id: 29,
        name: "Auto Parts",
        slug: "auto-parts",
        parentPrimeCategoryId: 15  // Vehicle
    },
    {
        id: 30,
        name: "Vehicle Accessories",
        slug: "vehicle-accessories",
        parentPrimeCategoryId: 15  // Vehicle
    },
    {
        id: 31,
        name: "Vehicle Care",
        slug: "vehicle-care",
        parentPrimeCategoryId: 15  // Vehicle
    }
];

export default SubCategories;