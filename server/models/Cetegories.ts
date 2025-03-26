/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import mongoose, { Schema, Document } from 'mongoose';

// Interface for category attributes
interface ICategoryAttribute {
  name: string;
  values: string[];
  filterable: boolean;
  visible: boolean;
  required: boolean;
}

// Interface for category filters
interface ICategoryFilter {
  name: string;
  type: string; // 'checkbox', 'radio', 'range', 'color'
  field: string;
  options?: Array<{
    value: string;
    label: string;
    color?: string;
  }>;
  min?: number;
  max?: number;
  unit?: string;
}

// Interface for category metadata
interface ICategoryMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  featuredImage?: string;
  bannerImage?: string;
  icon?: string;
  displayOrder?: number;
  showInMenu: boolean;
  showInFooter: boolean;
  showInSidebar: boolean;
  showInMobile: boolean;
}

// Interface for category template
interface ICategoryTemplate {
  layout: string; // 'grid', 'list', 'table'
  productsPerPage: number;
  defaultSortBy: string;
  showFilters: boolean;
  filterPosition: string; // 'left', 'top', 'right'
  showBreadcrumbs: boolean;
  showCategoryDescription: boolean;
  showSubcategories: boolean;
  showChildrenImages: boolean;
}

// Main Category interface
interface ICategory extends Document {
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  parent?: mongoose.Types.ObjectId;
  ancestors: Array<{
    _id: mongoose.Types.ObjectId;
    name: string;
    slug: string;
  }>;
  children: mongoose.Types.ObjectId[];
  level: number;
  path: string;
  isRoot: boolean;
  isLeaf: boolean;
  attributes: ICategoryAttribute[];
  filters: ICategoryFilter[];
  brands: mongoose.Types.ObjectId[];
  metadata: ICategoryMetadata;
  template: ICategoryTemplate;
  featuredProducts: mongoose.Types.ObjectId[];
  promotionalBanner?: {
    image: string;
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
    startDate?: Date;
    endDate?: Date;
    isActive: boolean;
  };
  customFields: Record<string, any>;
  productCount: number;
  status: string;
  visibility: string;
  createdBy: mongoose.Types.ObjectId;
  updatedBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

// Schema for category attributes
const CategoryAttributeSchema = new Schema<ICategoryAttribute>({
  name: { type: String, required: true },
  values: [{ type: String }],
  filterable: { type: Boolean, default: true },
  visible: { type: Boolean, default: true },
  required: { type: Boolean, default: false }
});

// Schema for category filters
const CategoryFilterSchema = new Schema<ICategoryFilter>({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ['checkbox', 'radio', 'range', 'color'] },
  field: { type: String, required: true },
  options: [{
    value: { type: String, required: true },
    label: { type: String, required: true },
    color: { type: String }
  }],
  min: { type: Number },
  max: { type: Number },
  unit: { type: String }
});

// Main Category schema
const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  description: { type: String, required: true },
  shortDescription: { type: String },
  parent: { type: Schema.Types.ObjectId, ref: 'Category' },
  ancestors: [{
    _id: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true }
  }],
  children: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  level: { type: Number, default: 0 },
  path: { type: String, required: true },
  isRoot: { type: Boolean, default: false },
  isLeaf: { type: Boolean, default: false },
  attributes: [CategoryAttributeSchema],
  filters: [CategoryFilterSchema],
  brands: [{ type: Schema.Types.ObjectId, ref: 'Brand' }],
  metadata: {
    title: { type: String },
    description: { type: String },
    keywords: [{ type: String }],
    featuredImage: { type: String },
    bannerImage: { type: String },
    icon: { type: String },
    displayOrder: { type: Number, default: 0 },
    showInMenu: { type: Boolean, default: true },
    showInFooter: { type: Boolean, default: false },
    showInSidebar: { type: Boolean, default: true },
    showInMobile: { type: Boolean, default: true }
  },
  template: {
    layout: { type: String, enum: ['grid', 'list', 'table'], default: 'grid' },
    productsPerPage: { type: Number, default: 24 },
    defaultSortBy: { type: String, default: 'newest' },
    showFilters: { type: Boolean, default: true },
    filterPosition: { type: String, enum: ['left', 'top', 'right'], default: 'left' },
    showBreadcrumbs: { type: Boolean, default: true },
    showCategoryDescription: { type: Boolean, default: true },
    showSubcategories: { type: Boolean, default: true },
    showChildrenImages: { type: Boolean, default: true }
  },
  featuredProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  promotionalBanner: {
    image: { type: String },
    title: { type: String },
    subtitle: { type: String },
    buttonText: { type: String },
    buttonLink: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    isActive: { type: Boolean, default: false }
  },
  customFields: { type: Schema.Types.Mixed },
  productCount: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'inactive', 'draft'], default: 'active' },
  visibility: { type: String, enum: ['visible', 'hidden'], default: 'visible' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  updatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, 
{ 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true } 
});

const Category = mongoose.model<ICategory>('Category', CategorySchema);

export default Category;