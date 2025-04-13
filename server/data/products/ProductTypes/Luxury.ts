/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IProductTypes } from '../ProductTypes';

export const LuxuryProductTypes :IProductTypes[] = [
    // Fine Jewelry & Precious Stones
    {
        id: 1000,
        name: "Diamond Necklace",
        slug: "diamond-necklace",
        parentPrimeCategoryId: 10,
        parentSubCategoryId: 1000
    },
    {
        id: 1001,
        name: "Emerald Ring",
        slug: "emerald-ring",
        parentPrimeCategoryId: 10,
        parentSubCategoryId: 1000
    },

    // Luxury Watches
    {
        id: 1010,
        name: "Gold Watch",
        slug: "gold-watch",
        parentPrimeCategoryId: 10,
        parentSubCategoryId: 1001
    },
    {
        id: 1011,
        name: "Swiss Made Watch",
        slug: "swiss-made-watch",
        parentPrimeCategoryId: 10,
        parentSubCategoryId: 1001
    },

    // High-End Fashion
    {
        id: 1020,
        name: "Designer Gown",
        slug: "designer-gown",
        parentPrimeCategoryId: 10,
        parentSubCategoryId: 1002
    },
    {
        id: 1021,
        name: "Silk Saree (Exclusive)",
        slug: "silk-saree-exclusive",
        parentPrimeCategoryId: 10,
        parentSubCategoryId: 1002
    },

    // Designer Handbags
    {
        id: 1030,
        name: "Italian Leather Handbag",
        slug: "italian-leather-handbag",
        parentPrimeCategoryId: 10,
        parentSubCategoryId: 1003
    },
    {
        id: 1031,
        name: "Designer Wallet",
        slug: "designer-wallet",
        parentPrimeCategoryId: 10,
        parentSubCategoryId: 1003
    },

    // Bespoke Services
    {
        id: 1040,
        name: "Bespoke Suit",
        slug: "bespoke-suit",
        parentPrimeCategoryId: 10,
        parentSubCategoryId: 1007
    },
    {
        id: 1041,
        name: "Custom Sherwani",
        slug: "custom-sherwani",
        parentPrimeCategoryId: 10,
        parentSubCategoryId: 1007
    }
];