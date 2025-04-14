/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import { Request, Response, Router,NextFunction } from "express";
import { cors } from "../config/Cors";
import { catchError } from "../lib/core/CatchError";
import SubCategories from "../data/products/SubCategories";
import { z } from "zod";
import ProductTypes from "../data/products/ProductTypes";
import Brands from "../data/products/Brands";
import morgan from "morgan";

const router: Router = Router();
router.use(cors);
router.use(function(req: Request, res: Response, next : NextFunction){
    res.set("cache-control", "max-age=3600, public");
    next();
    return;
});
router.use(morgan("dev"))

router.get("/subcategories", async function (req: Request, res: Response): Promise<any> {
    try {
        let primeCategorySchema = z.number({ message: "Primary Category Must Be A Number" }).gte(1, "Primary Category Can Not be less Than 1").lt(20, "Primary Category Can Not be greater Than 20");
        let { success, data, error } = primeCategorySchema.safeParse(Number(req.query.prime_category_id));

        if (!success) {
            res.status(400).json({
                success: false,
                message: error?.errors[0]?.message || "Invalid prime_category_id",
                data: null
            })
            return;
        }
        let responseData = SubCategories.filter((element) => {
            if (element.parentPrimeCategoryId === data) {
                return element;
            }
        });
        res.status(200).json({
            success: true,
            message: "OK",
            data: responseData
        })
        return;
    } catch (error) {
        catchError(error, res)
    }
});


router.get("/product_types", async function (req: Request, res: Response): Promise<any> {
    try {
        let subCategorySchema = z.number({ message: "Sub Category Must Be A Number" }).gte(1, "Sub Category Can Not be less Than 1").lt(2000, "Sub Category Can Not be greater Than 2000");
        let { success, data, error } = subCategorySchema.safeParse(Number(req.query.sub_category_id));

        if (!success) {
            res.status(400).json({
                success: false,
                message: error?.errors[0]?.message || "Invalid prime_category_id",
                data: null
            })
            return;
        }
        let responseData = ProductTypes.filter((element) => {
            if (element.parentSubCategoryId === data) {
                return element;
            }
        });
        res.status(200).json({
            success: true,
            message: "OK",
            data: responseData
        })
        return;
    } catch (error) {
        catchError(error, res)
    }
});



router.get("/brands", async function (req: Request, res: Response): Promise<any> {
    try {
        let productTypesSchema = z.number({ message: "Product Types Must Be A Number" }).gte(1, "Product Types Can Not be less Than 1").lt(2000, "Product Types Can Not be greater Than 2000");
        let { success, data, error } = productTypesSchema.safeParse(Number(req.query.product_type_id));

        if (!success || !data) {
            res.status(400).json({
                success: false,
                message: error?.errors[0]?.message || "Invalid prime_category_id",
                data: null
            })
            return;
        }
        let responseData = Brands.filter((element) => {
            if (element.parentProductTypes.includes(data)) {
                return element;
            }
        });
        res.status(200).json({
            success: true,
            message: "OK",
            data: responseData
        })
        return;
    } catch (error) {
        catchError(error, res)
    }
});









export default router;