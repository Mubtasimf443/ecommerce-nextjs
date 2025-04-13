/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IBrands } from '../Brands';

export const OthersBrands :IBrands[] = [
    // Industrial & Construction
    {
        id: 1560,
        name: "RFL (Construction)",
        slug: "rfl-construction",
        parentPrimeCategoryIds: [15],
        parentSubCategoryIds: [1500, 1501],
        parentProductTypes: [1510, 1520]
    },
    {
        id: 1561,
        name: "PHP (Steel)",
        slug: "php-steel",
        parentPrimeCategoryIds: [15],
        parentSubCategoryIds: [1501],
        parentProductTypes: [1521]
    },

    // Agriculture
    {
        id: 1570,
        name: "ACI (Agriculture)",
        slug: "aci-agriculture",
        parentPrimeCategoryIds: [15],
        parentSubCategoryIds: [1502],
        parentProductTypes: [1530, 1531]
    },

    // Office & Technology
    {
        id: 1580,
        name: "Brother",
        slug: "brother",
        parentPrimeCategoryIds: [15],
        parentSubCategoryIds: [1503],
        parentProductTypes: [1540]
    },

    // Security & Services
    {
        id: 1590,
        name: "Hikvision",
        slug: "hikvision",
        parentPrimeCategoryIds: [15],
        parentSubCategoryIds: [1505],
        parentProductTypes: [1550]
    },
    {
        id: 1591,
        name: "Local Educational Institutions",
        slug: "local-educational-institutions",
        parentPrimeCategoryIds: [15],
        parentSubCategoryIds: [1507],
        parentProductTypes: [1551]
    }
];