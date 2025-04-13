/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IBrands } from '../Brands';

export const SportsAndOutdoorsBrands :IBrands[] = [
    // Major Athletic Brands
    {
        id: 500,
        name: "Nike",
        slug: "nike",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 501, 502],
        parentProductTypes: [500, 501, 502, 520, 521, 522]
    },
    {
        id: 501,
        name: "Adidas",
        slug: "adidas",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 501, 502],
        parentProductTypes: [500, 501, 502, 520, 521]
    },
    {
        id: 502,
        name: "The North Face",
        slug: "the-north-face",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [501],
        parentProductTypes: [510, 511]
    },
    {
        id: 503,
        name: "Columbia",
        slug: "columbia",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [501],
        parentProductTypes: [510, 511, 512]
    },
    {
        id: 504,
        name: "Reebok",
        slug: "reebok",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 501],
        parentProductTypes: [500, 501, 520, 521]
    },
    {
        id: 505,
        name: "Puma",
        slug: "puma",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 501, 502],
        parentProductTypes: [500, 501, 502, 520, 521]
    },
    {
        id: 506,
        name: "Under Armour",
        slug: "under-armour",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 501],
        parentProductTypes: [500, 501, 520, 521]
    },
    {
        id: 507,
        name: "Asics",
        slug: "asics",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 502],
        parentProductTypes: [500, 502, 520]
    },
    {
        id: 508,
        name: "New Balance",
        slug: "new-balance",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 502],
        parentProductTypes: [500, 502, 520]
    },
    {
        id: 509,
        name: "Decathlon",
        slug: "decathlon",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 501, 502, 510],
        parentProductTypes: [500, 501, 502, 510, 520, 521, 522]
    },
    // Specialized Sports Brands
    {
        id: 510,
        name: "Speedo",
        slug: "speedo",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [502],
        parentProductTypes: [502]
    },
    {
        id: 511,
        name: "Wilson",
        slug: "wilson",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500],
        parentProductTypes: [500]
    },
    {
        id: 512,
        name: "Yonex",
        slug: "yonex",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500],
        parentProductTypes: [500]
    },
    {
        id: 513,
        name: "Li-Ning",
        slug: "li-ning",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500],
        parentProductTypes: [500]
    },
    {
        id: 514,
        name: "Head",
        slug: "head",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500],
        parentProductTypes: [500]
    },
    // Outdoor & Hiking Brands
    {
        id: 515,
        name: "CamelBak",
        slug: "camelbak",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [501],
        parentProductTypes: [511]
    },
    {
        id: 516,
        name: "Black Diamond",
        slug: "black-diamond",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [501],
        parentProductTypes: [511]
    },
    {
        id: 517,
        name: "Salomon",
        slug: "salomon",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [501, 502],
        parentProductTypes: [511, 502]
    },
    {
        id: 518,
        name: "Merrell",
        slug: "merrell",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [501],
        parentProductTypes: [511]
    },
    // Camping & Outdoor Equipment Brands
    {
        id: 519,
        name: "Coleman",
        slug: "coleman",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [501],
        parentProductTypes: [512]
    },
    {
        id: 520,
        name: "Ozark Trail",
        slug: "ozark-trail",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [501],
        parentProductTypes: [512]
    },
    {
        id: 521,
        name: "Wildcraft",
        slug: "wildcraft",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [501],
        parentProductTypes: [511, 512]
    },
    {
        id: 522,
        name: "Mountain Warehouse",
        slug: "mountain-warehouse",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [501],
        parentProductTypes: [511, 512]
    },
    // Additional Sports Brands
    {
        id: 523,
        name: "Karrimor",
        slug: "karrimor",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [501],
        parentProductTypes: [511, 512]
    },
    {
        id: 524,
        name: "Fila",
        slug: "fila",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 502],
        parentProductTypes: [500, 502, 520]
    },
    {
        id: 525,
        name: "Umbro",
        slug: "umbro",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500],
        parentProductTypes: [500]
    },
    {
        id: 526,
        name: "Diadora",
        slug: "diadora",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 502],
        parentProductTypes: [500, 502]
    },
    {
        id: 527,
        name: "Skechers",
        slug: "skechers",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 502],
        parentProductTypes: [500, 502, 520]
    },
    {
        id: 528,
        name: "Hoka One One",
        slug: "hoka-one-one",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 502],
        parentProductTypes: [500, 502]
    },
    {
        id: 529,
        name: "Saucony",
        slug: "saucony",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [500, 502],
        parentProductTypes: [500, 502]
    }
];