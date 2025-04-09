/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { Router ,Request , Response, NextFunction} from "express";
import { catchError } from "../lib/core/CatchError";
import { number, z } from "zod";
import { cors } from "../config/Cors";
import { createRequire } from "module";


const router:Router = Router();
router.use(cors);
router.use(function(req: Request, res: Response, next : NextFunction){
    res.set("cache-control", "max-age=3600, public");
    next();
    return;
})

router.get("/divisions" , function (req : Request , res : Response) :void{
    try {
        let divisions = require("../lib/location/divisions.json");
        res.status(200).json({
            success : true , 
            message : "ok",
            data : divisions
        })
        return;
    } catch (error) {
        catchError(error ,res);
    }
});

router.get("/district", function (req: Request, res: Response): void {
    try {
        let divisionSchema = z.number().gte(1).lte(8)
        let { success, error, data } = divisionSchema.safeParse(Number(req.query.division_id))
        if (error) {
            res.status(400).json({
                success: false,
                error: error.errors[0].message,
                errorDetails : error
            });
            return;
        }

        if (success && data) {
            interface IDistrict {
                id: string;
                division_id: string;
                name: string;
                bn_name: string;
            }
           
            let districts: IDistrict[] = require('../lib/location/district.json');

            districts = districts.filter(function (element: IDistrict): object | undefined {
                if (element.division_id === String(data)) {
                    return element;
                }
            });
            res.status(200).json({
                success: true,
                data: districts
            })
            return;
        }
    } catch (error) {
        catchError(error, res);
    }
});

router.get("/upazila", function (req: Request, res: Response): void {
    try {
        let districtSchema = z.number().positive().gte(1).lte(64)    ;
        let { success, error, data } = districtSchema.safeParse(Number(req.query.district_id))
        if (error) {
            res.status(400).json({
                success: false,
                error: error.errors[0].message
            });
            return;
        }

        if (success && data) {
            interface IUpazila {
                id: string;
                district_id: string;
                name: string;
                bn_name: string;
            }
            let upazilas: IUpazila[] = require('../lib/location/upazilas.json');

            upazilas = upazilas.filter(function (element: IUpazila): object | undefined {
                if (element.district_id === String(data)) {
                    return element;
                }
            });
            res.status(200).json({
                success: true,
                data: upazilas
            })
            return;
        }
    } catch (error) {
        catchError(error, res);
    }
});


router.get("/city", function (req: Request, res: Response): void {
    try {
        let upazilaSchema = z.number().positive().gte(1).lte(494) 
        let { success, error, data } = upazilaSchema.safeParse(Number(req.query.upazila_id))
        if (error) {
            res.status(400).json({
                success: false,
                error: error.errors[0].message
            });
            return;
        }

        if (success && data) {
            interface ICity {
                id: string;
                upazilla_id: string;
                name: string;
                bn_name: string;
            }
            let cities: ICity[] = require('../lib/location/cities.json');

            cities = cities.filter(function (element: ICity): object | undefined {
                if (element.upazilla_id === String(data)) {
                    return element;
                }
            });
            res.status(200).json({
                success: true,
                data: cities
            })
            return;
        }
    } catch (error) {
        catchError(error, res);
    }
})


export default router;