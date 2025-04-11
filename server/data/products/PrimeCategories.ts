// PrimeCategories.ts
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah */

interface IPrimeCategories {
    id: number;
    name: string;
    slug: string;
}

const PrimeCategories: IPrimeCategories[] = [
    {
        id: 1,
        name: "Clothing",
        slug: "clothing"
    },
    {
        id: 2,
        name: "Shoes",
        slug: "shoes"
    },
    {
        id: 3,
        name: "Electronics",
        slug: "electronics"
    },
   
    {
        id: 4,
        name: "Home & Kitchen",
        slug: "home-kitchen"
    },
    {
        id: 5,
        name: "Beauty & Personal Care",
        slug: "beauty-personal-care"
    },
    {
        id: 6,
        name: "Sports & Outdoors",
        slug: "sports-outdoors"
    },
    {
        id: 7,
        name: "Books & Stationery",
        slug: "books-stationery"
    },
    {
        id: 8,
        name: "Toys & Games",
        slug: "toys-games"
    },
    {
        id: 9,
        name: "Jewelry & Accessories",
        slug: "jewelry-accessories"
    }
];

export default PrimeCategories;





