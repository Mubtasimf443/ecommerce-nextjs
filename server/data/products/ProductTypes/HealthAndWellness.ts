/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IProductTypes } from '../ProductTypes';

export const HealthAndWellnessProductTypes :IProductTypes[] = [
    // Vitamins & Supplements
    {
        id: 1110,
        name: "Multivitamin Tablets",
        slug: "multivitamin-tablets",
        parentPrimeCategoryId: 11,
        parentSubCategoryId: 1100
    },
    {
        id: 1111,
        name: "Fish Oil Capsules",
        slug: "fish-oil-capsules",
        parentPrimeCategoryId: 11,
        parentSubCategoryId: 1100
    },

    // Herbal & Ayurvedic
    {
        id: 1120,
        name: "Herbal Tea",
        slug: "herbal-tea",
        parentPrimeCategoryId: 11,
        parentSubCategoryId: 1101
    },
    {
        id: 1121,
        name: "Ayurvedic Oil",
        slug: "ayurvedic-oil",
        parentPrimeCategoryId: 11,
        parentSubCategoryId: 1101
    },

    // Personal Care & Hygiene
    {
        id: 1130,
        name: "Hand Sanitizer",
        slug: "hand-sanitizer",
        parentPrimeCategoryId: 11,
        parentSubCategoryId: 1102
    },
    {
        id: 1131,
        name: "Face Mask",
        slug: "face-mask",
        parentPrimeCategoryId: 11,
        parentSubCategoryId: 1102
    },

    // Medical Equipment
    {
        id: 1140,
        name: "Blood Pressure Monitor",
        slug: "blood-pressure-monitor",
        parentPrimeCategoryId: 11,
        parentSubCategoryId: 1104
    },
    {
        id: 1141,
        name: "Glucose Meter",
        slug: "glucose-meter",
        parentPrimeCategoryId: 11,
        parentSubCategoryId: 1104
    }
];