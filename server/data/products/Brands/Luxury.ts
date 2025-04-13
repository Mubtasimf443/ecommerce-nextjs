/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IBrands } from '../Brands';

export const LuxuryBrands :IBrands[] = [
    // Luxury Watch Brands
    {
        id: 1000,
        name: "Rolex",
        slug: "rolex",
        parentPrimeCategoryIds: [10],
        parentSubCategoryIds: [1001],
        parentProductTypes: [1010, 1011]
    },
    {
        id: 1001,
        name: "Omega",
        slug: "omega",
        parentPrimeCategoryIds: [10],
        parentSubCategoryIds: [1001],
        parentProductTypes: [1010, 1011]
    },

    // Jewelry Brands
    {
        id: 1010,
        name: "Cartier",
        slug: "cartier",
        parentPrimeCategoryIds: [10],
        parentSubCategoryIds: [1000, 1001],
        parentProductTypes: [1000, 1001, 1010]
    },
    {
        id: 1011,
        name: "Tanishq",
        slug: "tanishq",
        parentPrimeCategoryIds: [10],
        parentSubCategoryIds: [1000],
        parentProductTypes: [1000, 1001]
    },

    // Fashion & Leather Goods
    {
        id: 1020,
        name: "Louis Vuitton",
        slug: "louis-vuitton",
        parentPrimeCategoryIds: [10],
        parentSubCategoryIds: [1002, 1003],
        parentProductTypes: [1020, 1030, 1031]
    },
    {
        id: 1021,
        name: "Gucci",
        slug: "gucci",
        parentPrimeCategoryIds: [10],
        parentSubCategoryIds: [1002, 1003],
        parentProductTypes: [1020, 1030, 1031]
    },
    {
        id: 1022,
        name: "Prada",
        slug: "prada",
        parentPrimeCategoryIds: [10],
        parentSubCategoryIds: [1002, 1003],
        parentProductTypes: [1020, 1030]
    },

    // Luxury Car Brands
    {
        id: 1030,
        name: "BMW",
        slug: "bmw",
        parentPrimeCategoryIds: [10],
        parentSubCategoryIds: [1005],
        parentProductTypes: []
    },
    {
        id: 1031,
        name: "Mercedes-Benz",
        slug: "mercedes-benz",
        parentPrimeCategoryIds: [10],
        parentSubCategoryIds: [1005],
        parentProductTypes: []
    },

    // Local Luxury Brands
    {
        id: 1040,
        name: "Local High-End Jewelers",
        slug: "local-high-end-jewelers",
        parentPrimeCategoryIds: [10],
        parentSubCategoryIds: [1000],
        parentProductTypes: [1000, 1001]
    },
    {
        id: 1041,
        name: "Local Bespoke Tailors",
        slug: "local-bespoke-tailors",
        parentPrimeCategoryIds: [10],
        parentSubCategoryIds: [1007],
        parentProductTypes: [1040, 1041]
    }
];