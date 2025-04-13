/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IProductTypes } from '../ProductTypes';

export const VehicleProductTypes :IProductTypes[] = [
    // Cars & Automobiles
    {
        id: 1510,
        name: "Sedan",
        slug: "sedan",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1500
    },
    {
        id: 1511,
        name: "SUV",
        slug: "suv",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1500
    },

    // Motorcycles & Scooters
    {
        id: 1520,
        name: "Motorcycle",
        slug: "motorcycle",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1501
    },
    {
        id: 1521,
        name: "Scooter",
        slug: "scooter",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1501
    },

    // Auto Parts & Accessories
    {
        id: 1530,
        name: "Car Battery",
        slug: "car-battery",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1502
    },
    {
        id: 1531,
        name: "Motorcycle Helmet",
        slug: "motorcycle-helmet",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1502
    },

    // Commercial Vehicles
    {
        id: 1540,
        name: "Truck",
        slug: "truck",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1503
    },
    {
        id: 1541,
        name: "CNG Auto Rickshaw",
        slug: "cng-auto-rickshaw",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1506
    },

    // Vehicle Maintenance
    {
        id: 1550,
        name: "Engine Oil",
        slug: "engine-oil",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1508
    },
    {
        id: 1551,
        name: "Car Stereo",
        slug: "car-stereo",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 1507
    }
];