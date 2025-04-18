import React, { FC, Fragment, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs"
import Image from 'next/image'
import { IProduct } from '../_lib/product.interface'
import { Play, ChevronRight, Info, FileText, Ruler, Grid3X3, Film, Stars } from 'lucide-react'

interface Props {
    product: IProduct 
}

const ProductTabs: FC<Props> = ({product}) => {
    const [activeImage, setActiveImage] = useState(product?.images?.[0] || null);
    
    return (
        <Fragment>
            <div className="mb-12 mt-8">
                <Tabs defaultValue="description" className="w-full">
                    <TabsList className="w-full grid grid-cols-3 md:grid-cols-6 mb-8 rounded-xl bg-gray-100/80 p-1">
                        <TabsTrigger 
                            value="description" 
                            className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
                        >
                            <FileText className="w-4 h-4" />
                            <span className="hidden md:inline">Description</span>
                        </TabsTrigger>
                        
                        <TabsTrigger 
                            value="features" 
                            className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
                        >
                            <Stars className="w-4 h-4" />
                            <span className="hidden md:inline">Features</span>
                        </TabsTrigger>
                        
                        <TabsTrigger 
                            value="specifications" 
                            className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
                        >
                            <Info className="w-4 h-4" />
                            <span className="hidden md:inline">Specifications</span>
                        </TabsTrigger>
                        
                        <TabsTrigger 
                            value="size-guide" 
                            className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
                        >
                            <Ruler className="w-4 h-4" />
                            <span className="hidden md:inline">Size Guide</span>
                        </TabsTrigger>
                        
                        <TabsTrigger 
                            value="gallery" 
                            className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
                        >
                            <Grid3X3 className="w-4 h-4" />
                            <span className="hidden md:inline">Gallery</span>
                        </TabsTrigger>
                        
                        <TabsTrigger 
                            value="videos" 
                            className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
                        >
                            <Film className="w-4 h-4" />
                            <span className="hidden md:inline">Videos</span>
                        </TabsTrigger>
                    </TabsList>
                    
                    {/* Description Tab */}
                    <TabsContent value="description" className="animate-in fade-in-50 duration-300">
                        <div className="prose prose-lg max-w-none bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Product Description</h2>
                            <p className="mb-4 text-gray-700 leading-relaxed">{product?.description}</p>
                        </div>
                    </TabsContent>
                    
                    {/* Features Tab */}
                    <TabsContent value="features" className="animate-in fade-in-50 duration-300">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {product?.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700">{feature}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                    
                    {/* Specifications Tab */}
                    <TabsContent value="specifications" className="animate-in fade-in-50 duration-300">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Product Specifications</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(product?.specifications || {}).map(([key, value], index) => (
                                    <div key={index} className="flex p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="font-medium text-gray-800 min-w-28">{key}</span>
                                        <span className="text-gray-700">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                    
                    {/* Size Guide Tab */}
                    <TabsContent value="size-guide" className="animate-in fade-in-50 duration-300">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Size Guide</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse bg-white">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Size</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Chest (in)</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Waist (in)</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Length (in)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="border border-gray-200 px-4 py-3 font-medium">S</td>
                                            <td className="border border-gray-200 px-4 py-3">36-38</td>
                                            <td className="border border-gray-200 px-4 py-3">30-32</td>
                                            <td className="border border-gray-200 px-4 py-3">27</td>
                                        </tr>
                                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                            <td className="border border-gray-200 px-4 py-3 font-medium">M</td>
                                            <td className="border border-gray-200 px-4 py-3">38-40</td>
                                            <td className="border border-gray-200 px-4 py-3">32-34</td>
                                            <td className="border border-gray-200 px-4 py-3">28</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="border border-gray-200 px-4 py-3 font-medium">L</td>
                                            <td className="border border-gray-200 px-4 py-3">40-42</td>
                                            <td className="border border-gray-200 px-4 py-3">34-36</td>
                                            <td className="border border-gray-200 px-4 py-3">29</td>
                                        </tr>
                                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                            <td className="border border-gray-200 px-4 py-3 font-medium">XL</td>
                                            <td className="border border-gray-200 px-4 py-3">42-44</td>
                                            <td className="border border-gray-200 px-4 py-3">36-38</td>
                                            <td className="border border-gray-200 px-4 py-3">30</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="border border-gray-200 px-4 py-3 font-medium">XXL</td>
                                            <td className="border border-gray-200 px-4 py-3">44-46</td>
                                            <td className="border border-gray-200 px-4 py-3">38-40</td>
                                            <td className="border border-gray-200 px-4 py-3">31</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800 flex items-center gap-2">
                                <Info className="w-4 h-4" />
                                <p>
                                    Measurements may vary by ±1 inch. For the best fit, measure yourself and use the chart above to determine your size.
                                </p>
                            </div>
                        </div>
                    </TabsContent>
                    
                    {/* Gallery Tab */}
                    <TabsContent value="gallery" className="animate-in fade-in-50 duration-300">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Product Gallery</h2>
                            <div className="flex flex-col gap-6">
                                {/* Main Image */}
                                <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                                    {activeImage && (
                                        <Image
                                            src={activeImage.src}
                                            alt={activeImage.alt}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    )}
                                </div>
                                
                                {/* Thumbnail Row */}
                                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                                    {product?.images?.map((image, index) => (
                                        <div 
                                            key={index} 
                                            className={`aspect-square relative rounded-md overflow-hidden border cursor-pointer transition-all ${
                                                activeImage?.src === image.src ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-400'
                                            }`}
                                            onClick={() => setActiveImage(image)}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 25vw, 12vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    
                    {/* Videos Tab */}
                    <TabsContent value="videos" className="animate-in fade-in-50 duration-300">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Product Videos</h2>
                            
                            {/* Video Grid - Replace with actual videos from your product data */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Example Video Item 1 */}
                                <div className="flex flex-col gap-3">
                                    <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
                                        {/* Replace with actual video thumbnails */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Image
                                                src={product?.images?.[0]?.src || "/api/placeholder/800/450"}
                                                alt="Video thumbnail"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                                            <div className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Play className="w-8 h-8 text-blue-600 ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="font-medium text-gray-800">Product Overview</h3>
                                    <p className="text-sm text-gray-600">See how this product can transform your experience</p>
                                </div>
                                
                                {/* Example Video Item 2 */}
                                <div className="flex flex-col gap-3">
                                    <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
                                        {/* Replace with actual video thumbnails */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Image
                                                src={product?.images?.[1]?.src || "/api/placeholder/800/450"}
                                                alt="Video thumbnail"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                                            <div className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Play className="w-8 h-8 text-blue-600 ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="font-medium text-gray-800">How to Use</h3>
                                    <p className="text-sm text-gray-600">Quick tutorial on getting the most out of this product</p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Fragment>
    )
}

export default ProductTabs