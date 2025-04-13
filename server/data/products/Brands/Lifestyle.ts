/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IBrands } from '../Brands';

export const LifestyleBrands :IBrands[] = [
    // Fashion & Lifestyle
    {
        id: 1360,
        name: "Aarong",
        slug: "aarong",
        parentPrimeCategoryIds: [13],
        parentSubCategoryIds: [1300, 1301, 1305],
        parentProductTypes: [1311, 1320, 1321, 1340]
    },
    {
        id: 1361,
        name: "Le Reve",
        slug: "le-reve",
        parentPrimeCategoryIds: [13],
        parentSubCategoryIds: [1301],
        parentProductTypes: [1320, 1321]
    },

    // Furniture & Home
    {
        id: 1370,
        name: "Otobi",
        slug: "otobi",
        parentPrimeCategoryIds: [13],
        parentSubCategoryIds: [1300],
        parentProductTypes: [1310, 1311]
    },

    // Travel & Tourism
    {
        id: 1380,
        name: "Bangladesh Parjatan Corporation",
        slug: "bangladesh-parjatan-corporation",
        parentPrimeCategoryIds: [13],
        parentSubCategoryIds: [1302],
        parentProductTypes: [1330, 1331]
    },

    // Technology
    {
        id: 1390,
        name: "Samsung",
        slug: "samsung",
        parentPrimeCategoryIds: [13],
        parentSubCategoryIds: [1307],
        parentProductTypes: [1350]
    },
    {
        id: 1391,
        name: "Walton",
        slug: "walton",
        parentPrimeCategoryIds: [13],
        parentSubCategoryIds: [1307],
        parentProductTypes: [1350, 1351]
    }
];