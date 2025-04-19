/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
import { create } from 'zustand';

// Type Definitions
export interface ReviewImage {
  id: string;
  url: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  buyerName: string;
  rating: number;
  comment: string;
  images: ReviewImage[];
  likes: number;
  dislikes: number;
  isPaid: boolean;
  date: string;
}

export interface ReviewData {
  rating: number;
  comment: string;
  images: File[];
}

export type SortOption = 'recent' | 'helpful' | 'highest' | 'lowest';
export type StarFilter = 'all' | '5' | '4' | '3' | '2' | '1';

export interface ReviewFilters {
  sortBy: SortOption;
  starFilter: StarFilter;
  page: number;
  limit: number;
}

interface ReviewStore {
  // Review Creation States
  isDialogOpen: boolean;
  isConfirmOpen: boolean;
  submitting: boolean;
  currentStep: 1 | 2 | 3;
  reviewData: ReviewData;
  
  // Review Listing States
  filters: ReviewFilters;
  reviews: Review[];
  totalReviews: number;
  loading: boolean;
  
  // Review Creation Actions
  setDialogOpen: (open: boolean) => void;
  setConfirmOpen: (open: boolean) => void;
  setSubmitting: (submitting: boolean) => void;
  setCurrentStep: (step: 1 | 2 | 3) => void;
  updateReviewData: (data: Partial<ReviewData>) => void;
  resetReviewForm: () => void;
  
  // Review Listing Actions
  setFilters: (filters: Partial<ReviewFilters>) => void;
  setReviews: (reviews: Review[]) => void;
  setTotalReviews: (total: number) => void;
  setLoading: (loading: boolean) => void;
  
  // Review Management Actions
  addReview: (review: Review) => void;
  updateReview: (id: string, data: Partial<Review>) => void;
  deleteReview: (id: string) => void;
  toggleLike: (reviewId: string) => void;
  toggleDislike: (reviewId: string) => void;
}

// Initial States
const initialReviewData: ReviewData = {
  rating: 0,
  comment: '',
  images: []
};

const initialFilters: ReviewFilters = {
  sortBy: 'recent',
  starFilter: 'all',
  page: 1,
  limit: 10
};

export const useReviewStore = create<ReviewStore>((set) => ({
  // Initial States
  isDialogOpen: false,
  isConfirmOpen: false,
  submitting: false,
  currentStep: 1,
  reviewData: initialReviewData,
  filters: initialFilters,
  reviews: [],
  totalReviews: 0,
  loading: false,

  // Review Creation Actions
  setDialogOpen: (open) => set({ isDialogOpen: open }),
  
  setConfirmOpen: (open) => set({ isConfirmOpen: open }),
  
  setSubmitting: (submitting) => set({ submitting }),
  
  setCurrentStep: (step) => set({ currentStep: step }),
  
  updateReviewData: (data) =>
    set((state) => ({ 
      reviewData: { ...state.reviewData, ...data } 
    })),
  
  resetReviewForm: () =>
    set({ 
      currentStep: 1,
      reviewData: initialReviewData,
      isDialogOpen: false,
      isConfirmOpen: false,
      submitting: false
    }),

  // Review Listing Actions
  setFilters: (filters) =>
    set((state) => ({ 
      filters: { ...state.filters, ...filters },
      ...(filters.sortBy || filters.starFilter ? { page: 1 } : {})
    })),
  
  setReviews: (reviews) => set({ reviews }),
  
  setTotalReviews: (total) => set({ totalReviews: total }),
  
  setLoading: (loading) => set({ loading }),

  // Review Management Actions
  addReview: (review) =>
    set((state) => ({
      reviews: [review, ...state.reviews],
      totalReviews: state.totalReviews + 1
    })),

  updateReview: (id, data) =>
    set((state) => ({
      reviews: state.reviews.map((review) =>
        review.id === id ? { ...review, ...data } : review
      )
    })),

  deleteReview: (id) =>
    set((state) => ({
      reviews: state.reviews.filter((review) => review.id !== id),
      totalReviews: state.totalReviews - 1
    })),

  toggleLike: (reviewId) =>
    set((state) => ({
      reviews: state.reviews.map((review) =>
        review.id === reviewId
          ? { ...review, likes: review.likes + 1 }
          : review
      )
    })),

  toggleDislike: (reviewId) =>
    set((state) => ({
      reviews: state.reviews.map((review) =>
        review.id === reviewId
          ? { ...review, dislikes: review.dislikes + 1 }
          : review
      )
    }))
}));

// Helper functions for common operations
export const getFilteredAndSortedReviews = (
  reviews: Review[],
  filters: ReviewFilters
): Review[] => {
  let filtered = [...reviews];

  // Apply star filter
  if (filters.starFilter !== 'all') {
    filtered = filtered.filter(
      review => review.rating === parseInt(filters.starFilter)
    );
  }

  // Apply sort
  switch (filters.sortBy) {
    case 'helpful':
      filtered.sort((a, b) => b.likes - a.likes);
      break;
    case 'highest':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'lowest':
      filtered.sort((a, b) => a.rating - b.rating);
      break;
    default: // 'recent'
      filtered.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
  }

  return filtered;
};