/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { NextResponse } from "next/server";

import { demoProducts } from "@/_lib/data/demoProducts";

export async function GET(request: Request, {params}: {params: Promise<{slug: string}>}) {
    const slug = (await params).slug;
    if (!slug) {
        return new Response("Slug is required", {status: 400});
    }
  
    
    
    return NextResponse.json(demoProducts,{status: 200});
}

