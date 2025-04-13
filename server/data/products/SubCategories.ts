
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah */

import { BeautyPersonalCareSubCategories } from "./SubCategories/BeautyPersonalCare";
import { BooksAndStationerySubCategories } from "./SubCategories/BooksAndStationery";
import { ClothingSubCategories } from "./SubCategories/Clothing";
import { ElectronicsSubCategories } from "./SubCategories/Electronics";
import { FoodsSubCategories } from "./SubCategories/Foods";
import { HealthAndWellnessSubCategories } from "./SubCategories/HealthAndWellness";
import { HomeKitchenSubCategories } from "./SubCategories/HomeKitchen";
import { JewelrySubCategories } from "./SubCategories/Jewelry";
import { LifeStyleSubCategories } from "./SubCategories/Lifestyle";
import { LuxurySubCategories } from "./SubCategories/Luxury";
import { OthersSubCategories } from "./SubCategories/Others";
import { PetSuppliesSubCategories } from "./SubCategories/PetSupplies";
import { ShoesSubCategories } from "./SubCategories/Shoes";
import { SportsAndOutdoorsSubCategories } from "./SubCategories/SportsAndOutdoors";
import { ToysAndGamesSubCategories } from "./SubCategories/ToysAndGames";
import { VehicleSubCategories } from "./SubCategories/Vehicle";

export interface ISubCategories {
    id: number;
    name: string;
    slug: string;
    parentPrimeCategoryId: number;
    isProductType ?: boolean;
}

const SubCategories: ISubCategories[] = [
    // Clothing Subcategories 1-99
   ...ClothingSubCategories,
    // Shoes Subcategories 100-199
    ...ShoesSubCategories,
    // Electronics Subcategories 200-299
    ...ElectronicsSubCategories,
    // Home & Kitchen Subcategories 300-399
   ...HomeKitchenSubCategories,
    // Beauty & Personal Care Subcategories 400-299
     ...BeautyPersonalCareSubCategories,
    // Sports & Outdoors Subcategories 500-599
    ...SportsAndOutdoorsSubCategories,
    // Books & Stationery SubCategories 600-699
    ...BooksAndStationerySubCategories,
    // Toys & Games SubCategories 700-799
    ...ToysAndGamesSubCategories,
    // Jewelry & Accessorie SubCategories 800-899
    ...JewelrySubCategories,
    // Foods SubCategories 9000-999
    ...FoodsSubCategories,
    // Luxury SubCategories 1000-1099
    ...LuxurySubCategories,
    // Health & Wellness SubCategories 1100-1199
    ...HealthAndWellnessSubCategories,
    // Pet Supplies SubCategories 1200-1299
    ...PetSuppliesSubCategories,
    // LiftStyle SubCategories 1300-1399
    ...LifeStyleSubCategories,
    // Vehicle SubCategories 1400-1499
    ...VehicleSubCategories,
    // Others SubCategories 1500-1599
    ...OthersSubCategories,
];

export default SubCategories;