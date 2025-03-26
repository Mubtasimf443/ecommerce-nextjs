/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import React, { Component, ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false };

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                <Header />
                <div className="flex items-center justify-center min-h-[200px] bg-red-100 border border-red-400 p-4 rounded">
                    <div className="text-red-700">
                        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
                        <p className="text-lg">Please try again later. If the issue persists, please contact us.</p>
                    </div>
                </div>
                <Footer />
                </>
            );
        }

        return this.props.children;
    }
}
