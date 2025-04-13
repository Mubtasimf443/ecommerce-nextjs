/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import { IProductTypes } from '../ProductTypes';;

export const ToysAndGamesProductTypes :IProductTypes[] = [
    // Action Figures & Playsets
    {
        id: 700,
        name: "Action Figure",
        slug: "action-figure",
        parentPrimeCategoryId: 7,
        parentSubCategoryId: 700
    },
    {
        id: 701,
        name: "Playset",
        slug: "playset",
        parentPrimeCategoryId: 7,
        parentSubCategoryId: 700
    },

    // Dolls & Accessories
    {
        id: 710,
        name: "Doll",
        slug: "doll",
        parentPrimeCategoryId: 7,
        parentSubCategoryId: 701
    },
    {
        id: 711,
        name: "Doll Accessory",
        slug: "doll-accessory",
        parentPrimeCategoryId: 7,
        parentSubCategoryId: 701
    },

    // Building Toys
    {
        id: 720,
        name: "Building Blocks",
        slug: "building-blocks",
        parentPrimeCategoryId: 7,
        parentSubCategoryId: 702
    },
    {
        id: 721,
        name: "Construction Set",
        slug: "construction-set",
        parentPrimeCategoryId: 7,
        parentSubCategoryId: 702
    },

    // Electronic Toys
    {
        id: 730,
        name: "Video Game Console",
        slug: "video-game-console",
        parentPrimeCategoryId: 7,
        parentSubCategoryId: 705
    },
    {
        id: 731,
        name: "Tablet for Kids",
        slug: "tablet-for-kids",
        parentPrimeCategoryId: 7,
        parentSubCategoryId: 705
    }
];