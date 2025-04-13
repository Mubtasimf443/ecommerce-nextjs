/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IProductTypes } from '../ProductTypes';

export const FoodsProductTypes :IProductTypes[] = [
    // Rice & Grains
    {
        id: 900,
        name: "Basmati Rice",
        slug: "basmati-rice",
        parentPrimeCategoryId: 9,
        parentSubCategoryId: 900
    },
    {
        id: 901,
        name: "Aromatic Rice",
        slug: "aromatic-rice",
        parentPrimeCategoryId: 9,
        parentSubCategoryId: 900
    },

    // Lentils & Pulses
    {
        id: 910,
        name: "Red Lentils",
        slug: "red-lentils",
        parentPrimeCategoryId: 9,
        parentSubCategoryId: 901
    },
    {
        id: 911,
        name: "Chickpeas",
        slug: "chickpeas",
        parentPrimeCategoryId: 9,
        parentSubCategoryId: 901
    },

    // Spices & Condiments
    {
        id: 920,
        name: "Turmeric Powder",
        slug: "turmeric-powder",
        parentPrimeCategoryId: 9,
        parentSubCategoryId: 902
    },
    {
        id: 921,
        name: "Chili Powder",
        slug: "chili-powder",
        parentPrimeCategoryId: 9,
        parentSubCategoryId: 902
    },

    // Traditional Foods
    {
        id: 930,
        name: "Biryani",
        slug: "biryani",
        parentPrimeCategoryId: 9,
        parentSubCategoryId: 908
    },
    {
        id: 931,
        name: "Achar (Pickle)",
        slug: "achar-pickle",
        parentPrimeCategoryId: 9,
        parentSubCategoryId: 909
    },
    {
        id: 932,
        name: "Chutney",
        slug: "chutney",
        parentPrimeCategoryId: 9,
        parentSubCategoryId: 909
    }
];