/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import {model,Schema,Document, ObjectId} from 'mongoose'

interface ICetegories{
    name : string ;
    slug : string;
    id : ObjectId ;
}
interface IProduct {
    name : string ;
    slug : string;
    id : ObjectId ;
}

interface IProductType extends Document {
    name :string ;
    parentCetegories :ICetegories[],
    products :IProduct[]
}

const ProductTypeSchema = new Schema<IProductType>({
    name: { type: String, required: true },
    parentCetegories: [{ type: Schema.Types.ObjectId, ref: 'Cetegory' }],
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

export default model<IProductType>('ProductType', ProductTypeSchema);