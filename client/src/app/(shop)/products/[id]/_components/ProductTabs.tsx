/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs"
import Image from 'next/image'
import { IProduct } from '../_lib/product.interface'

interface Props {
    product : IProduct 
}

const ProductTabs: FC<Props> = ({product}) => {
    return (
        <Fragment>
            <div className="mb-12">
                <Tabs defaultValue="description">
                    <TabsList className="w-full grid grid-cols-4 mb-8">
                        <TabsTrigger value="description">Description</TabsTrigger>
                        <TabsTrigger value="specifications">Specifications</TabsTrigger>
                        <TabsTrigger value="size-guide">Size Guide</TabsTrigger>
                        <TabsTrigger value="gallery">Gallery</TabsTrigger>
                    </TabsList>
                    <TabsContent value="description">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-heading-3 font-semibold mb-4">Product Description</h2>
                            <p className="mb-4">{product?.description}</p>

                            <h3 className="text-heading-4 font-semibold mb-3">Key Features</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                {product?.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </TabsContent>
                    <TabsContent value="specifications">
                        <div>
                            <h2 className="text-heading-3 font-semibold mb-4">Product Specifications</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(product?.specifications || new Object()).map(([key, value], index) => (
                                    <div key={index} className="py-2 border-b">
                                        <span className="font-medium">{key}</span>: {value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="size-guide">
                        <div>
                            <h2 className="text-heading-3 font-semibold mb-4">Size Guide</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border px-4 py-2 text-left">Size</th>
                                            <th className="border px-4 py-2 text-left">Chest (in)</th>
                                            <th className="border px-4 py-2 text-left">Waist (in)</th>
                                            <th className="border px-4 py-2 text-left">Length (in)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">S</td>
                                            <td className="border px-4 py-2">36-38</td>
                                            <td className="border px-4 py-2">30-32</td>
                                            <td className="border px-4 py-2">27</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border px-4 py-2">M</td>
                                            <td className="border px-4 py-2">38-40</td>
                                            <td className="border px-4 py-2">32-34</td>
                                            <td className="border px-4 py-2">28</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">L</td>
                                            <td className="border px-4 py-2">40-42</td>
                                            <td className="border px-4 py-2">34-36</td>
                                            <td className="border px-4 py-2">29</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="border px-4 py-2">XL</td>
                                            <td className="border px-4 py-2">42-44</td>
                                            <td className="border px-4 py-2">36-38</td>
                                            <td className="border px-4 py-2">30</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">XXL</td>
                                            <td className="border px-4 py-2">44-46</td>
                                            <td className="border px-4 py-2">38-40</td>
                                            <td className="border px-4 py-2">31</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 mt-3">
                                Measurements may vary by ±1 inch. For the best fit, measure yourself and use the chart above to determine your size.
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent value="gallery">
                        <div>
                            <h2 className="text-heading-3 font-semibold mb-4">Product Gallery</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {product?.images?.map((image, index) => (
                                    <div key={index} className="aspect-square relative rounded-md overflow-hidden border">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Fragment>
    )
}

export default ProductTabs