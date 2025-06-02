import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  assets,
  blog_data,
  comments_data as initialComments,
} from "../assets/assets";

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const blog = blog_data.find((item) => item._id === id);
    setData(blog);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newComment = {
      name,
      content: comment,
    };

    setComments([newComment, ...comments]);
    setName("");
    setComment("");
  };

  if (!data) {
    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-16 animate-pulse">
          {/* Skeleton Title */}
          <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>

          {/* Skeleton Subtitle */}
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>

          {/* Skeleton Meta Info */}
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>

          {/* Skeleton Image */}
          <div className="w-full h-64 bg-gray-300 rounded-lg mb-10"></div>

          {/* Skeleton Content Blocks */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-2 text-gray-900">{data.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{data.subTitle}</p>

        {/* Meta Info */}
        <div className="text-sm text-gray-500 mb-6">
          {new Date(data.createdAt).toLocaleDateString()} · {data.category}
        </div>

        {/* Blog Image */}
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-auto rounded-lg shadow mb-10"
        />

        {/* Blog Content */}
        <div
          className="text-gray-800 text-base leading-7 space-y-5"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>

      {/* Comment Section */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h3 className="text-xl font-semibold mb-6">
          Comments ({comments.length})
        </h3>

        <div className="space-y-4 mb-10">
          {comments.map((com, index) => (
            <div
              key={index}
              className="bg-purple-50 border border-purple-100 p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">{com.name}</p>
                  <p className="text-gray-700">{com.content}</p>
                  <p className="text-sm text-gray-400 mt-1">Just now</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Comment Form */}
        <h4 className="text-lg font-semibold mb-2">Add your comment</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Social Media Share */}
      <div className="max-w-4xl mx-auto px-4 pb-16 text-center">
        <p className="text-lg font-medium mb-2">Share this article on:</p>
        <div className="flex justify-center space-x-6">
          <img src={assets.facebook_icon} alt="Facebook" className="w-8 h-8" />
          <img src={assets.twitter_icon} alt="Twitter" className="w-8 h-8" />
          <img
            src={assets.googleplus_icon}
            alt="Google Plus"
            className="w-8 h-8"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
