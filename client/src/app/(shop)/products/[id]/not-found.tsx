/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import Link from 'next/link'
import { PackageSearch } from 'lucide-react'
import { Button } from "@/components/ui/shadcn/button"

export default function ProductNotFound() {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <PackageSearch size={96} className="text-theme-bg-accent" />
        </div>
        <h1 className="text-heading-2 font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">
          We couldn't find the product you're looking for. It might have been removed or the URL may be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-theme-bg-accent hover:bg-theme-bg-accent/90">
            <Link href="/products">
              Browse Products
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-theme-bg-accent text-theme-bg-accent hover:bg-theme-bg-accent/10">
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}