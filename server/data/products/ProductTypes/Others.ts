/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IProductTypes } from '../ProductTypes';

export const OthersProductTypes :IProductTypes[] = [
    // Industrial Supplies
    {
        id: 1510,
        name: "Welding Equipment",
        slug: "welding-equipment",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1500
    },
    {
        id: 1511,
        name: "Generators",
        slug: "generators",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1500
    },

    // Construction Materials
    {
        id: 1520,
        name: "Cement",
        slug: "cement",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1501
    },
    {
        id: 1521,
        name: "Steel Rods",
        slug: "steel-rods",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1501
    },

    // Agriculture
    {
        id: 1530,
        name: "Fertilizers",
        slug: "fertilizers",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1502
    },
    {
        id: 1531,
        name: "Agricultural Tools",
        slug: "agricultural-tools",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1502
    },

    // Office & Religious
    {
        id: 1540,
        name: "Office Chairs",
        slug: "office-chairs",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1503
    },
    {
        id: 1541,
        name: "Prayer Mats",
        slug: "prayer-mats",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1504
    },

    // Security & Services
    {
        id: 1550,
        name: "CCTV Cameras",
        slug: "cctv-cameras",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1505
    },
    {
        id: 1551,
        name: "Online Courses",
        slug: "online-courses",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1507
    }
];