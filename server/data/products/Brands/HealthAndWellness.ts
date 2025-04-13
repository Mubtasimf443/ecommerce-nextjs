/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IBrands } from '../Brands';

export const HealthAndWellnessBrands :IBrands[] = [
    // Pharmaceutical Companies
    {
        id: 1150,
        name: "Square Pharmaceuticals",
        slug: "square-pharmaceuticals",
        parentPrimeCategoryIds: [11],
        parentSubCategoryIds: [1100, 1101, 1104],
        parentProductTypes: [1110, 1111, 1140, 1141]
    },
    {
        id: 1151,
        name: "Beximco Pharmaceuticals",
        slug: "beximco-pharmaceuticals",
        parentPrimeCategoryIds: [11],
        parentSubCategoryIds: [1100, 1104],
        parentProductTypes: [1110, 1111, 1140]
    },
    {
        id: 1152,
        name: "ACI Healthcare",
        slug: "aci-healthcare",
        parentPrimeCategoryIds: [11],
        parentSubCategoryIds: [1100, 1102],
        parentProductTypes: [1110, 1130, 1131]
    },

    // Traditional Medicine
    {
        id: 1160,
        name: "Hamdard Laboratories",
        slug: "hamdard-laboratories",
        parentPrimeCategoryIds: [11],
        parentSubCategoryIds: [1101],
        parentProductTypes: [1120, 1121]
    },
    {
        id: 1161,
        name: "Local Ayurvedic Brands",
        slug: "local-ayurvedic-brands",
        parentPrimeCategoryIds: [11],
        parentSubCategoryIds: [1101],
        parentProductTypes: [1120, 1121]
    },

    // International Brands
    {
        id: 1170,
        name: "Johnson & Johnson",
        slug: "johnson-johnson",
        parentPrimeCategoryIds: [11],
        parentSubCategoryIds: [1102, 1106],
        parentProductTypes: [1130, 1131]
    },
    {
        id: 1171,
        name: "Nestlé Health Science",
        slug: "nestle-health-science",
        parentPrimeCategoryIds: [11],
        parentSubCategoryIds: [1105],
        parentProductTypes: []
    }
];