/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { IBrands } from '../Brands';

export const FoodsBrands :IBrands[] = [
    // Major Food Companies
    {
        id: 900,
        name: "Pran",
        slug: "pran",
        parentPrimeCategoryIds: [9],
        parentSubCategoryIds: [902, 907, 908, 909],
        parentProductTypes: [920, 921, 931, 932]
    },
    {
        id: 901,
        name: "ACI Pure",
        slug: "aci-pure",
        parentPrimeCategoryIds: [9],
        parentSubCategoryIds: [900, 901, 902],
        parentProductTypes: [900, 901, 910, 911]
    },
    {
        id: 902,
        name: "Bashundhara",
        slug: "bashundhara",
        parentPrimeCategoryIds: [9],
        parentSubCategoryIds: [903, 907],
        parentProductTypes: [920, 921]
    },
    {
        id: 903,
        name: "Fresh",
        slug: "fresh",
        parentPrimeCategoryIds: [9],
        parentSubCategoryIds: [903, 904, 905],
        parentProductTypes: [910, 911]
    },
    {
        id: 904,
        name: "Square Food & Beverage",
        slug: "square-food-beverage",
        parentPrimeCategoryIds: [9],
        parentSubCategoryIds: [907, 908],
        parentProductTypes: [930, 931, 932]
    },
    
    // Traditional & Local Brands
    {
        id: 905,
        name: "Local Rice Mills",
        slug: "local-rice-mills",
        parentPrimeCategoryIds: [9],
        parentSubCategoryIds: [900],
        parentProductTypes: [900, 901]
    },
    {
        id: 906,
        name: "Local Spice Brands",
        slug: "local-spice-brands",
        parentPrimeCategoryIds: [9],
        parentSubCategoryIds: [902],
        parentProductTypes: [920, 921]
    },

    // Retail Chains
    {
        id: 907,
        name: "Meena Bazar",
        slug: "meena-bazar",
        parentPrimeCategoryIds: [9],
        parentSubCategoryIds: [900, 901, 902, 903, 904, 905, 906],
        parentProductTypes: [900, 901, 910, 911, 920, 921]
    },
    {
        id: 908,
        name: "Shwapno",
        slug: "shwapno",
        parentPrimeCategoryIds: [9],
        parentSubCategoryIds: [900, 901, 902, 903, 904, 905, 906],
        parentProductTypes: [900, 901, 910, 911, 920, 921]
    }
];