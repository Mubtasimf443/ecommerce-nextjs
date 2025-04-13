/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IProductTypes } from '../ProductTypes';

export const BooksAndStationeryProductTypes :IProductTypes[] = [
    // Fiction Books
    {
        id: 600,
        name: "Novel",
        slug: "novel",
        parentPrimeCategoryId: 6,
        parentSubCategoryId: 600
    },
    {
        id: 601,
        name: "Short Story Collection",
        slug: "short-story-collection",
        parentPrimeCategoryId: 6,
        parentSubCategoryId: 600
    },
    {
        id: 602,
        name: "Poetry Book",
        slug: "poetry-book",
        parentPrimeCategoryId: 6,
        parentSubCategoryId: 600
    },

    // Non-Fiction Books
    {
        id: 610,
        name: "Biography",
        slug: "biography",
        parentPrimeCategoryId: 6,
        parentSubCategoryId: 601
    },
    {
        id: 611,
        name: "History Book",
        slug: "history-book",
        parentPrimeCategoryId: 6,
        parentSubCategoryId: 601
    },

    // Stationery Products
    {
        id: 620,
        name: "Notebooks & Pads",
        slug: "notebooks-pads",
        parentPrimeCategoryId: 6,
        parentSubCategoryId: 605
    },
    {
        id: 621,
        name: "Writing Instruments",
        slug: "writing-instruments",
        parentPrimeCategoryId: 6,
        parentSubCategoryId: 605
    },
    {
        id: 622,
        name: "Paper & Cardstock",
        slug: "paper-cardstock",
        parentPrimeCategoryId: 6,
        parentSubCategoryId: 605
    }
];