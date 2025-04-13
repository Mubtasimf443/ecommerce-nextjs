/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IBrands } from '../Brands';

export const VehicleBrands :IBrands[] = [
    // Car Manufacturers
    {
        id: 1560,
        name: "Toyota",
        slug: "toyota",
        parentPrimeCategoryIds: [15],
        parentSubCategoryIds: [1500],
        parentProductTypes: [1510, 1511]
    },
    {
        id: 1561,
        name: "Honda",
        slug: "honda",
        parentPrimeCategoryIds: [15],
        parentSubCategoryIds: [1500, 1501],
        parentProductTypes: [1510, 1520]
    },

    // Motorcycle Manufacturers
    {
        id: 1570,
        name: "Hero",
        slug: "hero",
        parentPrimeCategoryIds: [15],
        parentSubCategoryIds: [1501],
        parentProductTypes: [1520, 1521]
    },
    {
        id: 1571,
        name: "Runner Automobiles",
        slug: "runner-automobiles",
        parentPrimeCategoryIds: [15],
        parentSubCategoryIds: [1501, 1506],
        parentProductTypes: [1520, 1541]
    },

    // Auto Parts & Services
    {
        id: 1580,
        name: "Castrol",
        slug: "castrol",
        parentPrimeCategoryIds: [15],
        parentSubCategoryIds: [1508],
        parentProductTypes: [1550]
    },
    {
        id: 1581,
        name: "Local Auto Parts Retailers",
        slug: "local-auto-parts-retailers",
        parentPrimeCategoryIds: [15],
        parentSubCategoryIds: [1502],
        parentProductTypes: [1530, 1531]
    }
];