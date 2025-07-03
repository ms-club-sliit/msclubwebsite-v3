"use client";

import React from 'react';
import Image from 'next/image';

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-[#33415580] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            {/* Blog Image */}
            <div className="relative w-[400px] h-[192px] bg-gray-700 overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Blog Content */}
            <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-3 line-clamp-2 leading-tight">
                    {blog.title}
                </h3>

                <div className="flex flex-col text-gray-400 text-sm mb-4">
                    <span>{blog.author}</span>
                    <span>Published On {blog.pubDate}</span>
                </div>

                <a
                    href={blog.link}
                    className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-2.5 rounded-lg transition-colors duration-200 text-sm font-medium w-full text-center"
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default BlogCard;