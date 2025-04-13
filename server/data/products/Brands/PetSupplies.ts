/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IBrands } from '../Brands';

export const PetSuppliesBrands :IBrands[] = [
    // International Pet Food Brands
    {
        id: 1260,
        name: "Royal Canin",
        slug: "royal-canin",
        parentPrimeCategoryIds: [12],
        parentSubCategoryIds: [1200, 1201],
        parentProductTypes: [1210, 1220]
    },
    {
        id: 1261,
        name: "Pedigree",
        slug: "pedigree",
        parentPrimeCategoryIds: [12],
        parentSubCategoryIds: [1200],
        parentProductTypes: [1210, 1211]
    },
    {
        id: 1262,
        name: "Whiskas",
        slug: "whiskas",
        parentPrimeCategoryIds: [12],
        parentSubCategoryIds: [1201],
        parentProductTypes: [1220]
    },

    // Regional Brands
    {
        id: 1270,
        name: "Drools",
        slug: "drools",
        parentPrimeCategoryIds: [12],
        parentSubCategoryIds: [1200, 1201],
        parentProductTypes: [1210, 1220]
    },
    {
        id: 1271,
        name: "Refit Animal Care",
        slug: "refit-animal-care",
        parentPrimeCategoryIds: [12],
        parentSubCategoryIds: [1205, 1206],
        parentProductTypes: [1240, 1241]
    },

    // Local Retailers
    {
        id: 1280,
        name: "Local Pet Food Brands",
        slug: "local-pet-food-brands",
        parentPrimeCategoryIds: [12],
        parentSubCategoryIds: [1200, 1201, 1202],
        parentProductTypes: [1210, 1220]
    },
    {
        id: 1281,
        name: "Local Livestock Feed Retailers",
        slug: "local-livestock-feed-retailers",
        parentPrimeCategoryIds: [12],
        parentSubCategoryIds: [1208],
        parentProductTypes: [1250, 1251]
    }
];