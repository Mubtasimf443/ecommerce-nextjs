/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IBrands } from '../Brands';;


export const ToysAndGamesBrands :IBrands[] = [
    {
        id: 700,
        name: "LEGO",
        slug: "lego",
        parentPrimeCategoryIds: [7],
        parentSubCategoryIds: [702],
        parentProductTypes: [720, 721]
    },
    {
        id: 701,
        name: "Mattel",
        slug: "mattel",
        parentPrimeCategoryIds: [7],
        parentSubCategoryIds: [700, 701],
        parentProductTypes: [700, 701, 710, 711]
    },
    {
        id: 702,
        name: "Hasbro",
        slug: "hasbro",
        parentPrimeCategoryIds: [7],
        parentSubCategoryIds: [700, 703],
        parentProductTypes: [700, 701]
    },
    {
        id: 703,
        name: "Fisher-Price",
        slug: "fisher-price",
        parentPrimeCategoryIds: [7],
        parentSubCategoryIds: [708],
        parentProductTypes: [710, 711]
    },
    {
        id: 704,
        name: "VTech",
        slug: "vtech",
        parentPrimeCategoryIds: [7],
        parentSubCategoryIds: [705, 707],
        parentProductTypes: [730, 731]
    },
    {
        id: 705,
        name: "Hot Wheels",
        slug: "hot-wheels",
        parentPrimeCategoryIds: [7],
        parentSubCategoryIds: [700],
        parentProductTypes: [700, 701]
    },
    {
        id: 706,
        name: "Barbie",
        slug: "barbie",
        parentPrimeCategoryIds: [7],
        parentSubCategoryIds: [701],
        parentProductTypes: [710, 711]
    },
    {
        id: 707,
        name: "Nintendo",
        slug: "nintendo",
        parentPrimeCategoryIds: [7],
        parentSubCategoryIds: [705],
        parentProductTypes: [730]
    },
    {
        id: 708,
        name: "Sony PlayStation",
        slug: "sony-playstation",
        parentPrimeCategoryIds: [7],
        parentSubCategoryIds: [705],
        parentProductTypes: [730]
    },
    {
        id: 709,
        name: "Microsoft Xbox",
        slug: "microsoft-xbox",
        parentPrimeCategoryIds: [7],
        parentSubCategoryIds: [705],
        parentProductTypes: [730]
    }
];