/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import NotFound from "@/app/not-found";
import { FC } from "react";

import CetegoryProductsWithPagination from "@/components/ui/section/CetegoryProductsWithPagination";

const CategoryPage: FC<{params: Promise<{slug: string}>}> = async ({params}) => {
    const slug = (await params).slug;

    if (!slug) {
        return <NotFound />
    }

    let slugs = ["electronics","clothing", "home-kitchen","beauty-personal-care", "sports-outdoors","books-stationery","toys-games","jewelry-accessories"];
    if (!slugs.includes(slug)) {
        return <NotFound />
    }

    return (
        <CetegoryProductsWithPagination slug={slug} />
    )
}

export default CategoryPage;
