/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IProductTypes } from '../ProductTypes';

export const JewelryProductTypes :IProductTypes[] = [
    // Fine Jewelry
    {
        id: 800,
        name: "Gold Necklace",
        slug: "gold-necklace",
        parentPrimeCategoryId: 8,
        parentSubCategoryId: 800
    },
    {
        id: 801,
        name: "Diamond Ring",
        slug: "diamond-ring",
        parentPrimeCategoryId: 8,
        parentSubCategoryId: 800
    },
    {
        id: 802,
        name: "Silver Earrings",
        slug: "silver-earrings",
        parentPrimeCategoryId: 8,
        parentSubCategoryId: 800
    },

    // Traditional & Ethnic Jewelry
    {
        id: 810,
        name: "Jhumka Earrings",
        slug: "jhumka-earrings",
        parentPrimeCategoryId: 8,
        parentSubCategoryId: 803
    },
    {
        id: 811,
        name: "Kundan Jewelry Set",
        slug: "kundan-jewelry-set",
        parentPrimeCategoryId: 8,
        parentSubCategoryId: 803
    },
    {
        id: 812,
        name: "Payal (Anklet)",
        slug: "payal-anklet",
        parentPrimeCategoryId: 8,
        parentSubCategoryId: 803
    },

    // Watches
    {
        id: 820,
        name: "Wristwatch",
        slug: "wristwatch",
        parentPrimeCategoryId: 8,
        parentSubCategoryId: 802
    },
    {
        id: 821,
        name: "Smartwatch",
        slug: "smartwatch",
        parentPrimeCategoryId: 8,
        parentSubCategoryId: 802
    }
];