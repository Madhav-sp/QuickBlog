import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blog_data } from "../assets/assets";

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const blog = blog_data.find((item) => item._id === id);
    setData(blog);
  }, [id]);

  if (!data) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen text-gray-700 text-xl">
          Blog not found or loading...
        </div>
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

        {/* Meta */}
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

      <Footer />
    </>
  );
};

export default Blog;
