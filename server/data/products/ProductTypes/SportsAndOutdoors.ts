/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IProductTypes } from '../ProductTypes';;

export const SportsAndOutdoorsProductTypes :IProductTypes[] = [
    // Sports Equipment
    {
        id: 500,
        name: "Football Jerseys",
        slug: "football-clubs-fan-jersey",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 500
    },
    {
        id: 501,
        name: "Home Gyms",
        slug: "home-gym",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 500
    },
    {
        id: 502,
        name: "Exercise Equipment",
        slug: "exercise-equipment",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 500
    },

    // Outdoor Sports Equipment
    {
        id: 510,
        name: "Camping Gear",
        slug: "camping-gear",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 501
    },
    {
        id: 511,
        name: "Hiking Equipment",
        slug: "hiking-equipment",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 501
    },
    {
        id: 512,
        name: "Cycling Equipment",
        slug: "cycling-equipment",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 501
    },

    // Indoor Sports Equipment
    {
        id: 520,
        name: "Yoga & Fitness",
        slug: "yoga-fitness",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 502
    },
    {
        id: 521,
        name: "Training Equipment",
        slug: "training-equipment",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 502
    },
    {
        id: 522,
        name: "Gym Accessories",
        slug: "gym-accessories",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 502
    }
];