/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah */

import { BeautyPersonalCareBrands } from "./Brands/BeautyPersonalCare";
import { BooksAndStationeryBrands } from "./Brands/BooksAndStationery";
import { ClothingBrands } from "./Brands/Clothing";
import { ElectronicsBrands } from "./Brands/Electronics";
import { FoodsBrands } from "./Brands/Foods";
import { HealthAndWellnessBrands } from "./Brands/HealthAndWellness";
import { HomeKitchenBrands } from "./Brands/HomeKitchen";
import { JewelryBrands } from "./Brands/Jewelry";
import { LifestyleBrands } from "./Brands/Lifestyle";
import { LuxuryBrands } from "./Brands/Luxury";
import { OthersBrands } from "./Brands/Others";
import { PetSuppliesBrands } from "./Brands/PetSupplies";
import { ShoesBrands } from "./Brands/Shoes";
import { SportsAndOutdoorsBrands } from "./Brands/SportsAndOutdoors";
import { ToysAndGamesBrands } from "./Brands/ToysAndGames";
import { VehicleBrands } from "./Brands/Vehicle";
import { HomeKitchenProductTypes } from "./ProductTypes/HomeKitchen";

export interface IBrands {
    id: number;
    name: string;
    slug: string;
    parentPrimeCategoryIds: number[];
    parentSubCategoryIds: number[];
    parentProductTypes: number[];
}

 const Brands: IBrands[] = [
    // Clothing Brands 1-99
    ...ClothingBrands,
    // Shoes Brands 100-199
    ...ShoesBrands,
    // Electronics Brands 200-299
    ...ElectronicsBrands,
    // Home & Kitchen Brands 300-399
    ...HomeKitchenBrands,
    // Beauty & Personal Care Brands 400-299
    ...BeautyPersonalCareBrands,
    // Sports & Outdoors Brands 500-599
    ...SportsAndOutdoorsBrands,
    // Books & Stationery Brands 600-699
    ...BooksAndStationeryBrands,
    // Toys & Games Brands 700-799
    ...ToysAndGamesBrands,
    // Jewelry & Accessorie Brands 800-899
    ...JewelryBrands,
    // Foods Brands 9000-999
    ...FoodsBrands,
    // Luxury Brands 1000-1099
    ...LuxuryBrands,
    // Health & Wellness Brands 1100-1199
    ...HealthAndWellnessBrands,
    // Pet Supplies Brands 1200-1299
    ...PetSuppliesBrands,
    // LiftStyle Brands 1300-1399
    ...LifestyleBrands,
    // Vehicle Brands 1400-1499
    ...VehicleBrands,
    // Others Brands 1500-1599
    ...OthersBrands,

    
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