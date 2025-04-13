
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah */

import { BeautyPersonalCareProductTypes } from "./ProductTypes/BeautyPersonalCare";
import { BooksAndStationeryProductTypes } from "./ProductTypes/BooksAndStationery";
import { ClothingProductTypes } from "./ProductTypes/Clothing";
import { ElectronicsProductTypes } from "./ProductTypes/Electronics";
import { FoodsProductTypes } from "./ProductTypes/Foods";
import { HealthAndWellnessProductTypes } from "./ProductTypes/HealthAndWellness";
import { HomeKitchenProductTypes } from "./ProductTypes/HomeKitchen";
import { JewelryProductTypes } from "./ProductTypes/Jewelry";
import { LifestyleProductTypes } from "./ProductTypes/Lifestyle";
import { LuxuryProductTypes } from "./ProductTypes/Luxury";
import { OthersProductTypes } from "./ProductTypes/Others";
import { PetSuppliesProductTypes } from "./ProductTypes/PetSupplies";
import { ShoesProductTypes } from "./ProductTypes/Shoes";
import { SportsAndOutdoorsProductTypes } from "./ProductTypes/SportsAndOutdoors";
import { ToysAndGamesProductTypes } from "./ProductTypes/ToysAndGames";
import { VehicleProductTypes } from "./ProductTypes/Vehicle";

export interface IProductTypes {
    id: number;
    name: string;
    slug: string;
    parentPrimeCategoryId: number;
    parentSubCategoryId: number;
}

export const ProductTypes: IProductTypes[] = [
    // Clothing Product Types 0-99
    ...ClothingProductTypes,
    // Shoes Product Types 100-199
    ...ShoesProductTypes,
    // Electronics Product Types 200-299
    ...ElectronicsProductTypes,
    // Home & Kitchen Product Types 300-399
    ...HomeKitchenProductTypes,
    // Beauty & Personal Care Product Types 400-299
    ...BeautyPersonalCareProductTypes,
    // Sports & Outdoors Product Types 500-599
    ...SportsAndOutdoorsProductTypes,
    // Books & Stationery Product Types 600-699
    ...BooksAndStationeryProductTypes,
    // Toys & Games Product Types 700-799
    ...ToysAndGamesProductTypes,
    // Jewelry & Accessorie Product Types 800-899
    ...JewelryProductTypes,
    // Foods Product Types 900-999
    ...FoodsProductTypes,
    // Luxury Product Types 1000-1099
    ...LuxuryProductTypes,
    // Health & Wellness Product Types 1100-1199
    ...HealthAndWellnessProductTypes,
    // Pet Supplies Product Types 1200-1299
    ...PetSuppliesProductTypes,
    // LiftStyle Product Types 1300-1399
    ...LifestyleProductTypes,
    // Vehicle Product Types 1400-1499
    ...VehicleProductTypes,
    // Others Product Types 1500-1599
    ...OthersProductTypes,
   
  

    // Sports Equipment Product Types
    {
        id: 92,
        name: "Exercise Equipment",
        slug: "exercise-equipment",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 31
    },
    {
        id: 93,
        name: "Yoga Mats",
        slug: "yoga-mats",
        parentPrimeCategoryId: 5,
        parentSubCategoryId: 31
    },
    {
        id: 96,
        name: "Mountain Bikes",
        slug: "mountain-bikes",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 23
    },
    {
        id: 97,
        name: "Road Bikes",
        slug: "road-bikes",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 23
    },
    {
        id: 98,
        name: "BMX Bikes",
        slug: "bmx-bikes",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 23
    },

    {
        id: 99,
        name: "Sport Bikes",
        slug: "sport-bikes",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 24
    },
    {
        id: 100,
        name: "Cruiser Bikes",
        slug: "cruiser-bikes",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 24
    },
    {
        id: 101,
        name: "Electric Bikes",
        slug: "electric-bikes",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 24
    },

    {
        id: 102,
        name: "Sedan Cars",
        slug: "sedan-cars",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 25
    },
    {
        id: 103,
        name: "SUV Cars",
        slug: "suv-cars",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 25
    },
    {
        id: 104,
        name: "Sports Cars",
        slug: "sports-cars",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 25
    },

    {
        id: 105,
        name: "Engine Parts",
        slug: "engine-parts",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 29
    },
    {
        id: 106,
        name: "Brake Systems",
        slug: "brake-systems",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 29
    },
    {
        id: 107,
        name: "Transmission Parts",
        slug: "transmission-parts",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 29
    },

    // Vehicle Accessories (SubCategoryId: 30)
    {
        id: 108,
        name: "Car Audio Systems",
        slug: "car-audio-systems",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 30
    },
    {
        id: 109,
        name: "Car Navigation Systems",
        slug: "car-navigation-systems",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 30
    },
    {
        id: 110,
        name: "Car Security Systems",
        slug: "car-security-systems",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 30
    },

    {
        id: 111,
        name: "Car Cleaning Products",
        slug: "car-cleaning-products",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 31
    },
    {
        id: 112,
        name: "Car Polish & Wax",
        slug: "car-polish-wax",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 31
    },
    {
        id: 113,
        name: "Engine Oil & Fluids",
        slug: "engine-oil-fluids",
        parentPrimeCategoryId: 15,
        parentSubCategoryId: 31
    }

];

export default ProductTypes;