/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import {Request, Response} from 'express'
import { catchError } from '../lib/core/CatchError'
import {z} from 'zod'
export default function SearchApi(req:Request , res :Response) :void {
  try {
    let query :string| any= req.query.query || "all";
    let category :string| any= req.query.category || "all";
    let type :string| any = req.query.type || "all";
    let brand :string| any = req.query.brand || "all";
    let rating :string| any = req.query.rating || 0;
    let priceRange :string| any = req.query.priceRange || 50;
    let page :string| any = req.query.page || 1;
    let isBranded :string| any = req.query.isBranded?.toString() === "Yes" ? true : false;
    let hasWarrenty :string| any = req.query.hasWarrenty?.toString() === "Yes" ? true : false;
    let hasDiscount :string| any = req.query.hasDiscount?.toString() === "Yes" ? true : false;
    let hasReturnPolicy :string| any = req.query.hasReturnPolicy?.toString() === "Yes" ? true : false;


    
    let searchSchema:any ={
        query :''
    }

    let zodSchemaObject =z.object({
    
    })
  } catch (error) {
    catchError(error , res)
  }
}


