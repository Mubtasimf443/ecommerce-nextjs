/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import { randomUUID } from 'crypto';
import mongoose, { Schema, Document ,Mongoose} from 'mongoose';

interface IProductTypes {
    name : string;
    slug : string;
    id : Schema.Types.ObjectId;
}
interface ICategory{
    id : Schema.Types.UUID;
    name : string;
    slug :string;
    tags : string[];
    productsTypes : IProductTypes[]
}


let ProductTypeSchema = new Schema 
const schema = new Schema<ICategory>({
    id : {
        type : mongoose.SchemaTypes.UUID,
        default :() => randomUUID()
    },
    name : {
        type : String,
        required : true
    },
    slug : {
        type : String,
        required : true
    },
    productsTypes : [{
        name :{
            type : String,
        }
    }]
});

const Category = mongoose.model<ICategory>("Category" , schema);

export default Category;