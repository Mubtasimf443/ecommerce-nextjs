/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import { IProductTypes } from '../ProductTypes';;

export const ShoesProductTypes:IProductTypes[] = [
    // Men's Shoes ProductTypes
    {
        id: 1000,
        name: "Men's Sneakers",
        slug: "mens-sneakers",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 100
    },
    {
        id: 1001,
        name: "Men's Formal Shoes",
        slug: "mens-formal-shoes",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 100
    },
    {
        id: 1002,
        name: "Men's Loafers",
        slug: "mens-loafers",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 100
    },

    // Women's Shoes ProductTypes
    {
        id: 1003,
        name: "Women's Heels",
        slug: "womens-heels",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 101
    },
    {
        id: 1004,
        name: "Women's Flats",
        slug: "womens-flats",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 101
    },
    {
        id: 1005,
        name: "Women's Sneakers",
        slug: "womens-sneakers",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 101
    },

    // Kids' Shoes ProductTypes
    {
        id: 1006,
        name: "Kids' Sneakers",
        slug: "kids-sneakers",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 102
    },
    {
        id: 1007,
        name: "Kids' School Shoes",
        slug: "kids-school-shoes",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 102
    },

    // Sports Shoes ProductTypes
    {
        id: 1008,
        name: "Running Shoes",
        slug: "running-shoes",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 103
    },
    {
        id: 1009,
        name: "Football Shoes",
        slug: "football-shoes",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 103
    },
    {
        id: 1010,
        name: "Basketball Shoes",
        slug: "basketball-shoes",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 103
    },

    // Shoe Care ProductTypes
    {
        id: 1011,
        name: "Shoe Polish",
        slug: "shoe-polish",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 108
    },
    {
        id: 1012,
        name: "Shoe Cleaners",
        slug: "shoe-cleaners",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 108
    },
    {
        id: 1013,
        name: "Shoe Protection Sprays",
        slug: "shoe-protection-sprays",
        parentPrimeCategoryId: 2,
        parentSubCategoryId: 108
    }
];