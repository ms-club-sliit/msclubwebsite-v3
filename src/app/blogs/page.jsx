"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSection from '@/components/BlogSection';
import ExploreBlogsSection from '@/components/Hero-Blog';

export default function blog() {
    return (
        <>
            <Header />
            <ExploreBlogsSection />
            <BlogSection />
            <Footer />
        </>
    );
}