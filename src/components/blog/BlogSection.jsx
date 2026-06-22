"use client";

import React, { useState, useEffect } from "react";
import BlogCard from "@/components/blog/BlogCard";
import BackgroundContainer from "@/components/common/BackgroundContainer";
import { fetchBlogPosts } from "@/apis";
import ToastUtils from "@/utils/toastUtils";

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const loadAllPosts = async () => {
      try {
        const allPosts = await fetchBlogPosts();
        const limitedPosts = allPosts.slice(0, 6);
        const transformedPosts = limitedPosts.map((post, index) => ({
          ...post,
          id: post.id || post.guid || `blog-${index}`,
          image: extractImageSrc(post.description),
          pubDate: formatPubDate(post.pubDate),
        }));
        setBlogData(transformedPosts);
      } catch (_err) {
        ToastUtils.warn("Something went wrong! Please try again.");
      }
    };

    loadAllPosts();
  }, []);

  function extractImageSrc(description) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, "text/html");
    const imgElement = doc.querySelector("figure img");
    return imgElement ? imgElement.getAttribute("src") || "" : "";
  }

  function formatPubDate(dateString) {
    const date = new Date(dateString.replace(" ", "T"));
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const SearchIcon = () => (
    <svg
      className="w-5 h-5 text-slate-400 dark:text-slate-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  return (
    <section className="relative min-h-screen py-16 lg:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-primary-bg overflow-hidden transition-colors duration-300">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-72 w-72 bg-blue-100/60 blur-3xl rounded-full dark:bg-blue-900/10" />
        <div className="absolute top-20 right-0 h-80 w-80 bg-indigo-100/60 blur-3xl rounded-full dark:bg-indigo-900/10" />
      </div>

      <BackgroundContainer>
        <div className="relative z-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
                Insights & Updates
              </p>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Recent Blogs
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
                Explore the latest articles, updates, and stories from our
                community.
              </p>
            </div>

            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white/80 text-slate-900 placeholder-slate-400 shadow-sm backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:placeholder-slate-400 transition-all duration-200"
              />
            </div>
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm dark:border-slate-700 dark:bg-slate-800/70 text-center py-14 px-6">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-300">
                <SearchIcon />
              </div>
              <div className="text-slate-800 dark:text-slate-200 text-lg font-semibold mb-2">
                No blogs found
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-sm">
                Try adjusting your search term or use a different keyword.
              </div>
            </div>
          )}
        </div>
      </BackgroundContainer>
    </section>
  );
};

export default BlogSection;