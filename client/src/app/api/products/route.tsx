/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import { NextResponse } from 'next/server';
import {ProductInterface} from '@/components/ui/card/Product'
import { demoProducts } from '@/_lib/data/demoProducts';

export async function GET(request: Request) {
  return NextResponse.json(demoProducts);
}




