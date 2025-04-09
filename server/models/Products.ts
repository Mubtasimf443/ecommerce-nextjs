/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import mongoose, { Schema, Document } from 'mongoose';

// Common attribute interfaces
interface IAttribute {
  name: string;
  value: string;
}



interface ISize {
  name: string;
  dimensions?: string;
  weight?: string;
  stock: number;
}

interface IVariant {
  name: string;
  sku: string;
  price: number;
  salePrice?: number;
  stock: number;
  images: string[];
  attributes: IAttribute[];
  sizes?: ISize[];
  color?: string;
  colorHex?: string;
}

interface IReview {
  userId: mongoose.Types.ObjectId;
  username: string;
  rating: number;
  title?: string;
  comment: string;
  images?: string[];
  likes: number;
  dislikes: number;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface ISpecification {
  group: string;
  items: {
    name: string;
    value: string;
  }[];
}

interface IProduct extends Document {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  sku: string;
  barcode?: string;
  brand: {
    id: mongoose.Types.ObjectId;
    name: string;
    slug: string;
  };
  price: number;
  comparePrice?: number;
  salePrice?: number;
  onSale: boolean;
  cost?: number;
  profit?: number;
  margin?: number;
  categories: {
    id: mongoose.Types.ObjectId;
    name: string;
    slug: string;
    path: string;
  }[];
  primaryCategory: {
    id: mongoose.Types.ObjectId;
    name: string;
    slug: string;
  };
  type: string;
  tags: string[];
  attributes: IAttribute[];
  specifications?: ISpecification[];
  variants: IVariant[];
  stock: number;
  lowStockThreshold: number;
  images: {
    url: string;
    alt?: string;
    isPrimary: boolean;
  }[];
  videos?: string[];
  documents?: {
    name: string;
    url: string;
    type: string;
  }[];
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: string;
  };
  weight?: {
    value: number;
    unit: string;
  };
  shipping: {
    freeShipping: boolean;
    shippingWeight?: number;
    shippingClass?: string;
    shippingDimensions?: {
      length: number;
      width: number;
      height: number;
      unit: string;
    };
  };
  tax: {
    taxable: boolean;
    taxClass?: string;
    taxCode?: string;
  };
  warranty?: {
    available: boolean;
    period?: string;
    details?: string;
  };
  manufacturerDetails?: {
    modelNumber?: string;
    releaseDate?: Date;
    countryOfOrigin?: string;
    manufacturer?: string;
  };
  featured: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  trending: boolean;
  reviews: IReview[];
  ratings: {
    average: number;
    count: number;
    distribution: {
      fiveStar: number;
      fourStar: number;
      threeStar: number;
      twoStar: number;
      oneStar: number;
    };
  };
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonicalUrl?: string;
  };
  compatibility?: {
    products: mongoose.Types.ObjectId[];
    category?: mongoose.Types.ObjectId;
    brand?: mongoose.Types.ObjectId;
  };
  relatedProducts?: mongoose.Types.ObjectId[];
  frequentlyBoughtTogether?: mongoose.Types.ObjectId[];
  // Category-specific fields
  clothing?: {
    gender: string;
    ageGroup: string;
    material: string[];
    careInstructions: string[];
    season: string[];
    fit: string;
    occasion: string[];
    sleeve?: string;
    neckline?: string;
    pattern?: string;
  };
  electronics?: {
    powerRequirements: string;
    batteryLife?: string;
    connectivity: string[];
    operatingSystem?: string;
    processor?: string;
    storage?: string;
    ram?: string;
    screenSize?: string;
    resolution?: string;
    cameraSpecs?: string[];
    ports?: string[];
  };
  homeKitchen?: {
    roomType: string[];
    material: string[];
    powerSource?: string;
    capacity?: string;
    features: string[];
    cleaningCare: string[];
  };
  beauty?: {
    skinType: string[];
    concerns: string[];
    ingredients: string[];
    suitableFor: string[];
    finish?: string;
    spf?: number;
    expiryPeriod?: string;
  };
  status: string;
  visibility: string;
  createdBy: mongoose.Types.ObjectId;
  updatedBy: mongoose.Types.ObjectId;
  publishDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AttributeSchema = new Schema<IAttribute>({
  name: { type: String, required: true },
  value: { type: String, required: true }
});

const SizeSchema = new Schema<ISize>({
  name: { type: String, required: true },
  dimensions: { type: String },
  weight: { type: String },
  stock: { type: Number, required: true, default: 0 }
});

const VariantSchema = new Schema<IVariant>({
  name: { type: String, required: true },
  sku: { type: String, required: true },
  price: { type: Number, required: true },
  salePrice: { type: Number },
  stock: { type: Number, required: true, default: 0 },
  images: [{ type: String }],
  attributes: [AttributeSchema],
  sizes: [SizeSchema],
  color: { type: String },
  colorHex: { type: String }
});

const ReviewSchema = new Schema<IReview>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  username: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  title: { type: String },
  comment: { type: String, required: true },
  images: [{ type: String }],
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const SpecificationSchema = new Schema({
  group: { type: String, required: true },
  items: [{
    name: { type: String, required: true },
    value: { type: String, required: true }
  }]
});

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  barcode: { type: String },
  brand: {
    id: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true }
  },
  price: { type: Number, required: true },
  comparePrice: { type: Number },
  salePrice: { type: Number },
  onSale: { type: Boolean, default: false },
  cost: { type: Number },
  profit: { type: Number },
  margin: { type: Number },
  categories: [{
    id: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    path: { type: String, required: true }
  }],
  primaryCategory: {
    id: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true }
  },
  type: { type: String, required: true },
  tags: [{ type: String }],
  attributes: [AttributeSchema],
  specifications: [SpecificationSchema],
  variants: [VariantSchema],
  stock: { type: Number, required: true, default: 0 },
  lowStockThreshold: { type: Number, default: 5 },
  images: [{
    url: { type: String, required: true },
    alt: { type: String },
    isPrimary: { type: Boolean, default: false }
  }],
  videos: [{ type: String }],
  documents: [{
    name: { type: String, required: true },
    url: { type: String, required: true },
    type: { type: String, required: true }
  }],
  dimensions: {
    length: { type: Number },
    width: { type: Number },
    height: { type: Number },
    unit: { type: String, enum: ['cm', 'in', 'mm', 'm'], default: 'cm' }
  },
  weight: {
    value: { type: Number },
    unit: { type: String, enum: ['kg'], default: 'kg' , min: 0.1 , max : 100 }
  },
  shipping: {
    freeShipping: { type: Boolean, default: false },
    shippingWeight: { type: Number },
    shippingClass: { type: String },
    shippingDimensions: {
      length: { type: Number },
      width: { type: Number },
      height: { type: Number },
      unit: { type: String, enum: ['cm', 'in', 'mm', 'm'], default: 'cm' }
    }
  },
  tax: {
    taxable: { type: Boolean, default: true },
    taxClass: { type: String },
    taxCode: { type: String }
  },
  warranty: {
    available: { type: Boolean, default: false },
    period: { type: String },
    details: { type: String }
  },
  manufacturerDetails: {
    modelNumber: { type: String },
    releaseDate: { type: Date },
    countryOfOrigin: { type: String },
    manufacturer: { type: String }
  },
  featured: { type: Boolean, default: false },
  bestSeller: { type: Boolean, default: false },
  newArrival: { type: Boolean, default: false },
  trending: { type: Boolean, default: false },
  reviews: [ReviewSchema],
  ratings: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
    distribution: {
      fiveStar: { type: Number, default: 0 },
      fourStar: { type: Number, default: 0 },
      threeStar: { type: Number, default: 0 },
      twoStar: { type: Number, default: 0 },
      oneStar: { type: Number, default: 0 }
    }
  },
  seo: {
    title: { type: String },
    description: { type: String },
    keywords: [{ type: String }],
    canonicalUrl: { type: String }
  },
  compatibility: {
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand' }
  },
  relatedProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  frequentlyBoughtTogether: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  // Category-specific fields
  clothing: {
    gender: { type: String, enum: ['men', 'women', 'unisex', 'boys', 'girls'] },
    ageGroup: { type: String, enum: ['adult', 'teen', 'kids', 'toddler', 'infant'] },
    material: [{ type: String }],
    careInstructions: [{ type: String }],
    season: [{ type: String, enum: ['spring', 'summer', 'fall', 'winter', 'all-season'] }],
    fit: { type: String, enum: ['regular', 'slim', 'relaxed', 'oversized', 'petite', 'plus'] },
    occasion: [{ type: String }],
    sleeve: { type: String },
    neckline: { type: String },
    pattern: { type: String }
  },
  electronics: {
    powerRequirements: { type: String },
    batteryLife: { type: String },
    connectivity: [{ type: String }],
    operatingSystem: { type: String },
    processor: { type: String },
    storage: { type: String },
    ram: { type: String },
    screenSize: { type: String },
    resolution: { type: String },
    cameraSpecs: [{ type: String }],
    ports: [{ type: String }]
  },
  homeKitchen: {
    roomType: [{ type: String }],
    material: [{ type: String }],
    powerSource: { type: String },
    capacity: { type: String },
    features: [{ type: String }],
    cleaningCare: [{ type: String }]
  },
  beauty: {
    skinType: [{ type: String }],
    concerns: [{ type: String }],
    ingredients: [{ type: String }],
    suitableFor: [{ type: String }],
    finish: { type: String },
    spf: { type: Number },
    expiryPeriod: { type: String }
  },
  status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' },
  visibility: { type: String, enum: ['visible', 'hidden', 'featured'], default: 'visible' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  updatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  publishDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, 
{ 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for optimized querying
ProductSchema.index({ name: 'text', description: 'text', shortDescription: 'text', 'brand.name': 'text' });
ProductSchema.index({ slug: 1 }, { unique: true });
ProductSchema.index({ sku: 1 }, { unique: true });
ProductSchema.index({ 'categories.id': 1 });
ProductSchema.index({ 'brand.id': 1 });
ProductSchema.index({ price: 1 });
ProductSchema.index({ createdAt: -1 });
ProductSchema.index({ status: 1 });
ProductSchema.index({ 'variants.sku': 1 });
ProductSchema.index({ featured: 1, visibility: 1, status: 1 });
ProductSchema.index({ bestSeller: 1, visibility: 1, status: 1 });
ProductSchema.index({ newArrival: 1, visibility: 1, status: 1 });
ProductSchema.index({ trending: 1, visibility: 1, status: 1 });
ProductSchema.index({ 'ratings.average': -1 });

// Pre-save middleware to update timestamps and calculate derived fields
ProductSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  
  // Calculate profit and margin if cost is provided
  if (this.cost && this.price) {
    this.profit = this.price - this.cost;
    this.margin = (this.profit / this.price) * 100;
  }
  
  // Set onSale flag based on sale price
  if (this.salePrice && this.salePrice < this.price) {
    this.onSale = true;
  } else {
    this.onSale = false;
  }
  
  next();
});


export const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;