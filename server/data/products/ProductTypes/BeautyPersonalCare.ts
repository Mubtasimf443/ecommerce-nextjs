/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import { IProductTypes } from "../ProductTypes";

export const BeautyPersonalCareProductTypes :IProductTypes[] = [
    // Makeup Product Types
    {
        id: 400,
        name: "Face Primer",
        slug: "face-primer",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 400
    },
    {
        id: 401,
        name: "Foundation",
        slug: "foundation",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 400
    },
    {
        id: 402,
        name: "Concealer",
        slug: "concealer",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 400
    },
    {
        id: 403,
        name: "Compact & Pressed Powder",
        slug: "compact",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 400
    },
    {
        id: 404,
        name: "Blush",
        slug: "blush",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 400
    },

    // Skincare Product Types
    {
        id: 410,
        name: "Cleanser",
        slug: "cleanser",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 401
    },
    {
        id: 411,
        name: "Face Wash",
        slug: "facewash-1-face-1",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 401
    },
    {
        id: 412,
        name: "Moisturizer",
        slug: "moisturizer-1-face-1",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 401
    },

    // Hair Care Product Types
    {
        id: 420,
        name: "Shampoo",
        slug: "shampoo",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 402
    },
    {
        id: 421,
        name: "Conditioner",
        slug: "conditioner",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 402
    },
    {
        id: 422,
        name: "Hair Oil",
        slug: "hair-oil-1",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 402
    },

    // Personal Care Product Types
    {
        id: 430,
        name: "Bath & Shower",
        slug: "bath-shower",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 403
    },
    {
        id: 431,
        name: "Body Wash",
        slug: "shower-gels-body-wash-1",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 403
    },
    {
        id: 432,
        name: "Soaps",
        slug: "soaps-1",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 403
    },

    // Mom & Baby Product Types
    {
        id: 440,
        name: "Bath Time",
        slug: "bath-time",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 404
    },
    {
        id: 441,
        name: "Baby Care",
        slug: "baby-care",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 404
    },
    {
        id: 442,
        name: "Baby Products",
        slug: "baby-products",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 404
    },

    // Fragrance Product Types
    {
        id: 450,
        name: "Perfume",
        slug: "perfume",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 405
    },
    {
        id: 451,
        name: "Body Spray",
        slug: "body-spray-1",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 405
    },
    {
        id: 452,
        name: "Deodorants",
        slug: "deodorants-roll-ons",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 405
    }
];