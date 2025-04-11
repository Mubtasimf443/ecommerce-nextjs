/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import { randomUUID } from "crypto";
import mongoose, { Schema, Document, Model, Mongoose } from "mongoose";


interface IBrand extends Document {
    id : Schema.Types.UUID;
    name : string;
    slug :string;
    tags : string[];
}

const BrandSchema = new Schema<IBrand>({
    name : {
        type : String,
        required : true
    },
    slug : {
        type : String,
        required : true
    },
    id : {
        type : mongoose.SchemaTypes.UUID ,
        default: () => randomUUID()
    },
    tags :[{type : String , }]
})

const Brands= mongoose.model<IBrand>("Brands" , BrandSchema)
export default Brands;