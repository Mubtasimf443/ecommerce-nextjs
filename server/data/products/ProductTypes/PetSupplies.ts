/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IProductTypes } from '../ProductTypes';

export const PetSuppliesProductTypes :IProductTypes[] = [
    // Dog Supplies
    {
        id: 1210,
        name: "Dry Dog Food",
        slug: "dry-dog-food",
        parentPrimeCategoryId: 12,
        parentSubCategoryId: 1200
    },
    {
        id: 1211,
        name: "Dog Chew Toy",
        slug: "dog-chew-toy",
        parentPrimeCategoryId: 12,
        parentSubCategoryId: 1200
    },

    // Cat Supplies
    {
        id: 1220,
        name: "Wet Cat Food",
        slug: "wet-cat-food",
        parentPrimeCategoryId: 12,
        parentSubCategoryId: 1201
    },
    {
        id: 1221,
        name: "Cat Scratching Post",
        slug: "cat-scratching-post",
        parentPrimeCategoryId: 12,
        parentSubCategoryId: 1201
    },

    // Fish & Aquarium
    {
        id: 1230,
        name: "Aquarium Filter",
        slug: "aquarium-filter",
        parentPrimeCategoryId: 12,
        parentSubCategoryId: 1203
    },

    // Pet Health
    {
        id: 1240,
        name: "Pet Shampoo",
        slug: "pet-shampoo",
        parentPrimeCategoryId: 12,
        parentSubCategoryId: 1205
    },
    {
        id: 1241,
        name: "Flea & Tick Treatment",
        slug: "flea-tick-treatment",
        parentPrimeCategoryId: 12,
        parentSubCategoryId: 1206
    },

    // Livestock Supplies
    {
        id: 1250,
        name: "Cow Feed",
        slug: "cow-feed",
        parentPrimeCategoryId: 12,
        parentSubCategoryId: 1208
    },
    {
        id: 1251,
        name: "Poultry Feed",
        slug: "poultry-feed",
        parentPrimeCategoryId: 12,
        parentSubCategoryId: 1208
    }
];