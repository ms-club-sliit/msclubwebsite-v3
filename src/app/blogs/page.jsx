"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BlogSection from "@/components/blog/BlogSection";
import Hero from "@/components/common/Hero";

export default function blog() {
  return (
    <>
      <Header />
      <Hero
        logoLink="/medium.png"
        title="Explore Blogs"
        paragraph="Read all the blog post which written by our students and more to boost your skills and expand your network."
        button1Text="Follow Our Medium Page"
        button1Link="https://medium.com/ms-club-of-sliit"
        showSecondButton={false}
      />
      <BlogSection />
      <Footer />
    </>
  );
}
