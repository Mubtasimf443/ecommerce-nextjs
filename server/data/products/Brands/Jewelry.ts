/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IBrands } from '../Brands';

export const JewelryBrands :IBrands[] = [
    // Fine Jewelry Brands
    {
        id: 800,
        name: "Diamond World",
        slug: "diamond-world",
        parentPrimeCategoryIds: [8],
        parentSubCategoryIds: [800, 804],
        parentProductTypes: [800, 801]
    },
    {
        id: 801,
        name: "Glory Gold",
        slug: "glory-gold",
        parentPrimeCategoryIds: [8],
        parentSubCategoryIds: [800, 803],
        parentProductTypes: [800, 810, 811]
    },
    {
        id: 802,
        name: "Malabar Gold & Diamonds",
        slug: "malabar-gold-diamonds",
        parentPrimeCategoryIds: [8],
        parentSubCategoryIds: [800, 803, 804],
        parentProductTypes: [800, 801, 810, 811]
    },
    
    // Watch Brands
    {
        id: 810,
        name: "Titan",
        slug: "titan",
        parentPrimeCategoryIds: [8],
        parentSubCategoryIds: [802],
        parentProductTypes: [820, 821]
    },
    {
        id: 811,
        name: "Rolex",
        slug: "rolex",
        parentPrimeCategoryIds: [8],
        parentSubCategoryIds: [802],
        parentProductTypes: [820]
    },
    {
        id: 812,
        name: "Casio",
        slug: "casio",
        parentPrimeCategoryIds: [8],
        parentSubCategoryIds: [802],
        parentProductTypes: [820, 821]
    },

    // Traditional Jewelry Brands
    {
        id: 820,
        name: "Aarong",
        slug: "aarong",
        parentPrimeCategoryIds: [8],
        parentSubCategoryIds: [803, 807],
        parentProductTypes: [810, 811, 812]
    },
    {
        id: 821,
        name: "Tanishq",
        slug: "tanishq",
        parentPrimeCategoryIds: [8],
        parentSubCategoryIds: [800, 803, 804],
        parentProductTypes: [800, 801, 810, 811]
    },
    {
        id: 822,
        name: "Kalyan Jewellers",
        slug: "kalyan-jewellers",
        parentPrimeCategoryIds: [8],
        parentSubCategoryIds: [800, 803, 804],
        parentProductTypes: [800, 801, 810, 811]
    }
];