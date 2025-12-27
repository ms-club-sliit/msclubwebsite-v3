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
      } catch (err) {
        ToastUtils.warn('Something went wrong! Please try again.');
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
      className="w-5 h-5 text-gray-400"
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
    <section className="bg-primary-bg min-h-screen py-section-y px-section-x sm:px-2 sm:py-6">
      <BackgroundContainer>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-0">
            Recent Blogs
          </h1>

          <div className="relative min-w-[329px] md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search Blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#1E293B] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base sm:text-lg sm:py-3 sm:pl-10 sm:pr-4"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-14">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No blogs found</div>
            <div className="text-gray-500 text-sm">
              Try adjusting your search terms
            </div>
          </div>
        )}
      </BackgroundContainer>
    </section>
  );
};

export default BlogSection;
