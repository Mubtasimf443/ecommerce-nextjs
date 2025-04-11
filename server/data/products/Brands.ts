/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah */

interface IBrands {
    id: number;
    name: string;
    slug: string;
    parentPrimeCategoryIds: number[];
    parentSubCategoryIds: number[];
    parentProductTypes: number[];
}

const Brands: IBrands[] = [
    {
        id: 1,
        name: 'Sadakalo',
        slug: 'sadakalo',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 2,
        name: 'Texmart',
        slug: 'texmart',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 21,
        name: 'Smartex',
        slug: 'smartex',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 22,
        name: 'Trendz',
        slug: 'trendz',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 23,
        name: 'Sailor',
        slug: 'sailor',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 24,
        name: 'Aarong',
        slug: 'aarong',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 25,
        name: 'Anjan’s',
        slug: 'anjans',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 26,
        name: 'Kay Kraft',
        slug: 'kay-kraft',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 27,
        name: 'Deshal',
        slug: 'deshal',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 28,
        name: 'Yellow',
        slug: 'yellow',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 29,
        name: 'Rang',
        slug: 'rang',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 30,
        name: 'Jatra',
        slug: 'jatra',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 31,
        name: 'Bibiana',
        slug: 'bibiana',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 32,
        name: 'Richman',
        slug: 'richman',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 33,
        name: 'Noir',
        slug: 'noir',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 34,
        name: 'Nabila',
        slug: 'nabila',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 35,
        name: 'Le Reve',
        slug: 'le-reve',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 36,
        name: 'Ecstasy',
        slug: 'ecstasy',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 37,
        name: 'Nogordola',
        slug: 'nogordola',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 38,
        name: 'Grameen UNIQLO',
        slug: 'grameen-uniqlo',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 39,
        name: 'Infinity Mega Mall',
        slug: 'infinity-mega-mall',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    {
        id: 40,
        name: 'Dorjibari',
        slug: 'dorjibari',
        parentPrimeCategoryIds: [1],
        parentSubCategoryIds: [1, 2, 3, 4],
        parentProductTypes: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33
        ]
    },
    // Electronics Brands
    {
        id: 7,
        name: 'Samsung',
        slug: "samsung",
        parentPrimeCategoryIds: [2],
        parentSubCategoryIds: [5, 6, 7],
        parentProductTypes: [14, 18, 19, 20]
    },
    {
        id: 8,
        name: 'Apple',
        slug: "apple",
        parentPrimeCategoryIds: [2],
        parentSubCategoryIds: [5, 6, 7],
        parentProductTypes: [15, 17, 19]
    },
    {
        id: 9,
        name: 'Dell',
        slug: "dell",
        parentPrimeCategoryIds: [2],
        parentSubCategoryIds: [6],
        parentProductTypes: [16, 17, 18]
    },
    {
        id: 10,
        name: 'Sony',
        slug: "sony",
        parentPrimeCategoryIds: [2],
        parentSubCategoryIds: [7],
        parentProductTypes: [19, 20]
    },

    // Home & Kitchen Brands
    {
        id: 11,
        name: 'Philips',
        slug: "philips",
        parentPrimeCategoryIds: [2, 3],
        parentSubCategoryIds: [7, 8],
        parentProductTypes: [19, 21, 22]
    },
    {
        id: 12,
        name: 'IKEA',
        slug: "ikea",
        parentPrimeCategoryIds: [3],
        parentSubCategoryIds: [9, 10],
        parentProductTypes: [24, 25, 26]
    },
    {
        id: 13,
        name: 'Prestige',
        slug: "prestige",
        parentPrimeCategoryIds: [3],
        parentSubCategoryIds: [8],
        parentProductTypes: [21, 22, 23]
    },

    // Beauty & Personal Care Brands
    {
        id: 14,
        name: 'Nivea',
        slug: "nivea",
        parentPrimeCategoryIds: [4],
        parentSubCategoryIds: [11, 12],
        parentProductTypes: [27, 28]
    },
    {
        id: 15,
        name: 'L\'Oreal',
        slug: "loreal",
        parentPrimeCategoryIds: [4],
        parentSubCategoryIds: [11, 12],
        parentProductTypes: [27, 28]
    },

    // Sports & Outdoors Brands
    {
        id: 16,
        name: 'Puma',
        slug: "puma",
        parentPrimeCategoryIds: [1, 5],
        parentSubCategoryIds: [1, 14],
        parentProductTypes: [1, 29, 30]
    },
    {
        id: 17,
        name: 'Reebok',
        slug: "reebok",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [14],
        parentProductTypes: [29, 30]
    },
    {
        id: 18,
        name: 'Under Armour',
        slug: "under-armour",
        parentPrimeCategoryIds: [5],
        parentSubCategoryIds: [14],
        parentProductTypes: [29, 30]
    }
];

export default Brands;