/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IBrands } from '../Brands';

export const BooksAndStationeryBrands :IBrands[] = [
    // Publishing Houses
    {
        id: 600,
        name: "Batighar",
        slug: "batighar",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [600, 601, 602],
        parentProductTypes: [600, 601, 602, 610, 611]
    },
    {
        id: 601,
        name: "Prothoma Prokashon",
        slug: "prothoma-prokashon",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [600, 601],
        parentProductTypes: [600, 601, 602]
    },
    {
        id: 602,
        name: "Sheba Prokashoni",
        slug: "sheba-prokashoni",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [600, 601, 602],
        parentProductTypes: [600, 601, 602]
    },
    {
        id: 603,
        name: "Anupam Prokashoni",
        slug: "anupam-prokashoni",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [600, 601],
        parentProductTypes: [600, 601, 602]
    },
    {
        id: 604,
        name: "Student Library",
        slug: "student-library",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [603, 604],
        parentProductTypes: [610, 611]
    },
    // Stationery Brands
    {
        id: 605,
        name: "Classmate",
        slug: "classmate",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [605],
        parentProductTypes: [620, 621, 622]
    },
    {
        id: 606,
        name: "Matador",
        slug: "matador",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [605, 607],
        parentProductTypes: [620, 621]
    },
    {
        id: 607,
        name: "Reynolds",
        slug: "reynolds",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [605],
        parentProductTypes: [621]
    },
    {
        id: 608,
        name: "Camlin",
        slug: "camlin",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [605, 606],
        parentProductTypes: [620, 621, 622]
    },
    {
        id: 609,
        name: "Faber-Castell",
        slug: "faber-castell",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [605, 606],
        parentProductTypes: [620, 621, 622]
    },
    {
        id: 610,
        name: "Paper Mate",
        slug: "paper-mate",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [605],
        parentProductTypes: [621]
    },
    {
        id: 611,
        name: "Oxford",
        slug: "oxford",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [603, 604],
        parentProductTypes: [610, 611]
    },
    {
        id: 612,
        name: "Pelikan",
        slug: "pelikan",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [605],
        parentProductTypes: [621]
    },
    {
        id: 613,
        name: "Atlas",
        slug: "atlas",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [605, 607],
        parentProductTypes: [620, 621, 622]
    },
    {
        id: 614,
        name: "Arku",
        slug: "arku",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [605],
        parentProductTypes: [620, 621]
    },
    {
        id: 615,
        name: "Vision",
        slug: "vision",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [605, 607],
        parentProductTypes: [620, 621, 622]
    },
    // Academic Publishers
    {
        id: 616,
        name: "Bangla Academy",
        slug: "bangla-academy",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [601, 603, 604],
        parentProductTypes: [610, 611]
    },
    {
        id: 617,
        name: "Anyo Prokash",
        slug: "anyo-prokash",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [600, 601],
        parentProductTypes: [600, 601, 602]
    },
    {
        id: 618,
        name: "Somoy Prokashon",
        slug: "somoy-prokashon",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [600, 601],
        parentProductTypes: [600, 601, 602, 610, 611]
    },
    {
        id: 619,
        name: "Agami Prokashoni",
        slug: "agami-prokashoni",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [600, 601, 602],
        parentProductTypes: [600, 601, 602, 610, 611]
    },

    {
        id: 620,
        name: "Penguin Books",
        slug: "penguin-books",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [600, 601],
        parentProductTypes: [600, 601, 602, 610, 611]
    },
    {
        id: 621,
        name: "HarperCollins",
        slug: "harper-collins",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [600, 601, 602],
        parentProductTypes: [600, 601, 602, 610, 611]
    },
    {
        id: 622,
        name: "Macmillan",
        slug: "macmillan",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [603, 604],
        parentProductTypes: [610, 611]
    },
    {
        id: 623,
        name: "Pearson",
        slug: "pearson",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [603, 604],
        parentProductTypes: [610, 611]
    },
    {
        id: 624,
        name: "McGraw Hill",
        slug: "mcgraw-hill",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [603, 604],
        parentProductTypes: [610, 611]
    },
    {
        id: 625,
        name: "Cambridge University Press",
        slug: "cambridge-university-press",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [603, 604],
        parentProductTypes: [610, 611]
    },
    {
        id: 626,
        name: "Oxford University Press",
        slug: "oxford-university-press",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [603, 604],
        parentProductTypes: [610, 611]
    },
    {
        id: 627,
        name: "Simon & Schuster",
        slug: "simon-and-schuster",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [600, 601],
        parentProductTypes: [600, 601, 602]
    },
    {
        id: 628,
        name: "Scholastic",
        slug: "scholastic",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [602],
        parentProductTypes: [600, 601, 602]
    },
    {
        id: 629,
        name: "DK Publishing",
        slug: "dk-publishing",
        parentPrimeCategoryIds: [6],
        parentSubCategoryIds: [601, 602],
        parentProductTypes: [610, 611]
    }
];