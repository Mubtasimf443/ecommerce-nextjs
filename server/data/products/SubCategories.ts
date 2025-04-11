
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah */

interface ISubCategories {
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
    }
];

export default SubCategories;
