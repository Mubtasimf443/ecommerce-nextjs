"use client";
/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/shadcn/select";
// import { FunnelIcon, StarIcon } from "@heroicons/react/24/solid";
import {Funnel as FunnelIcon ,Star as StarIcon } from 'lucide-react'
import CreateReview from "../../_components/review/CreateReview";

interface Props {
  showingNumber: number;
  totalReviews: number;
}

const ReviewTabFilter: React.FC<Props> = ({ showingNumber, totalReviews }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <FunnelIcon className="w-5 h-5 text-emerald-500 mr-2" />
          <Select defaultValue="recent">
            <SelectTrigger className="w-[140px] bg-white border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="helpful">Most Helpful</SelectItem>
              <SelectItem value="highest">Highest Rated</SelectItem>
              <SelectItem value="lowest">Lowest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center">
          <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
          <Select defaultValue="all">
            <SelectTrigger className="w-[120px] bg-white border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500">
              <SelectValue placeholder="All Stars" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stars</SelectItem>
              <SelectItem value="5">5 Stars</SelectItem>
              <SelectItem value="4">4 Stars</SelectItem>
              <SelectItem value="3">3 Stars</SelectItem>
              <SelectItem value="2">2 Stars</SelectItem>
              <SelectItem value="1">1 Star</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <CreateReview />
    </div>
  );
};

export default ReviewTabFilter;