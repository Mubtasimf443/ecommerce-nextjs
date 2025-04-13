/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IProductTypes } from '../ProductTypes';

export const LifestyleProductTypes :IProductTypes[] = [
    // Home & Living
    {
        id: 1310,
        name: "Furniture",
        slug: "furniture",
        parentPrimeCategoryId: 13,
        parentSubCategoryId: 1300
    },
    {
        id: 1311,
        name: "Home Decor",
        slug: "home-decor",
        parentPrimeCategoryId: 13,
        parentSubCategoryId: 1300
    },

    // Fashion & Apparel
    {
        id: 1320,
        name: "Saree",
        slug: "saree",
        parentPrimeCategoryId: 13,
        parentSubCategoryId: 1301
    },
    {
        id: 1321,
        name: "Panjabi",
        slug: "panjabi",
        parentPrimeCategoryId: 13,
        parentSubCategoryId: 1301
    },

    // Travel & Tourism
    {
        id: 1330,
        name: "Tour Packages",
        slug: "tour-packages",
        parentPrimeCategoryId: 13,
        parentSubCategoryId: 1302
    },
    {
        id: 1331,
        name: "Hotel Bookings",
        slug: "hotel-bookings",
        parentPrimeCategoryId: 13,
        parentSubCategoryId: 1302
    },

    // Arts & Cultural
    {
        id: 1340,
        name: "Handicrafts",
        slug: "handicrafts",
        parentPrimeCategoryId: 13,
        parentSubCategoryId: 1305
    },
    {
        id: 1341,
        name: "Prayer Mats",
        slug: "prayer-mats",
        parentPrimeCategoryId: 13,
        parentSubCategoryId: 1306
    },

    // Technology
    {
        id: 1350,
        name: "Smartphones",
        slug: "smartphones",
        parentPrimeCategoryId: 13,
        parentSubCategoryId: 1307
    },
    {
        id: 1351,
        name: "Laptops",
        slug: "laptops",
        parentPrimeCategoryId: 13,
        parentSubCategoryId: 1307
    }
];