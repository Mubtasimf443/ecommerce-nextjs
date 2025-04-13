/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import { IProductTypes } from "../ProductTypes";

export const BeautyPersonalCareProductTypes :IProductTypes[] = [
      // Skincare Product Types
      {
        id: 400,
        name: "Face Wash",
        slug: "face-wash",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 25
    },
    {
        id: 401,
        name: "Moisturizers",
        slug: "moisturizers",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 25
    },
    {
        id: 402,
        name: "Sunscreen",
        slug: "sunscreen",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 25
    },

    // Haircare Product Types
    {
        id: 410,
        name: "Shampoos",
        slug: "shampoos",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 26
    },
    {
        id: 411,
        name: "Conditioners",
        slug: "conditioners",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 26
    },
    {
        id: 412,
        name: "Hair Oils",
        slug: "hair-oils",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 26
    },

    // Makeup & Cosmetics Product Types
    {
        id: 420,
        name: "Foundation",
        slug: "foundation",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 27
    },
    {
        id: 421,
        name: "Lipstick",
        slug: "lipstick",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 27
    },
    {
        id: 422,
        name: "Eye Makeup",
        slug: "eye-makeup",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 27
    },

    // Fragrances Product Types
    {
        id: 430,
        name: "Perfumes",
        slug: "perfumes",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 28
    },
    {
        id: 431,
        name: "Deodorants",
        slug: "deodorants",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 28
    },

    // Baby Care Product Types
    {
        id: 440,
        name: "Baby Skin Care",
        slug: "baby-skin-care",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 29
    },
    {
        id: 441,
        name: "Baby Bath Products",
        slug: "baby-bath-products",
        parentPrimeCategoryId: 4,
        parentSubCategoryId: 29
    }
];