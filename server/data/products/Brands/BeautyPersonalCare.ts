/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IBrands } from '../Brands';


export const BeautyPersonalCareBrands :IBrands[] = [
    {
        id: 400,
        name: "L'Oreal",
        slug: "l-oreal",
        parentPrimeCategoryIds: [4],
        parentSubCategoryIds: [400, 401], // Makeup and Skincare
        parentProductTypes: [400, 401, 402, 410, 411, 412] // Related product types
    },
    {
        id: 401,
        name: "MAC",
        slug: "mac",
        parentPrimeCategoryIds: [4],
        parentSubCategoryIds: [400], // Makeup
        parentProductTypes: [400, 401, 402, 403, 404] // Makeup related products
    },
    {
        id: 402,
        name: "The Body Shop",
        slug: "the-body-shop-1",
        parentPrimeCategoryIds: [4],
        parentSubCategoryIds: [400, 401, 403], // Makeup, Skincare, Personal Care
        parentProductTypes: [410, 411, 412, 430, 431, 432] // Related products
    },
    {
        id: 403,
        name: "Garnier",
        slug: "garnier-top-brands-men",
        parentPrimeCategoryIds: [4],
        parentSubCategoryIds: [401, 402, 406], // Skincare, Hair, Men
        parentProductTypes: [410, 411, 412, 420, 421, 422] // Related products
    },
    {
        id: 404,
        name: "Nivea Men",
        slug: "nivea-men",
        parentPrimeCategoryIds: [4],
        parentSubCategoryIds: [406], // Men
        parentProductTypes: [430, 431, 432] // Bath & Body related products
    },
    {
        id: 405,
        name: "Pond's Men",
        slug: "ponds-men",
        parentPrimeCategoryIds: [4],
        parentSubCategoryIds: [406], // Men
        parentProductTypes: [410, 411, 412] // Skincare related products
    }
];