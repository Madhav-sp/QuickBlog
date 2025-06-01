import React from "react";
import DOMPurify from "dompurify";
import { format } from "date-fns";
import {useNavigate} from 'react-router-dom'


const BlogCard = ({ blog }) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=> navigate(`/blog/${blog._id}`)} className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl w-full max-w-sm">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <span className="text-xs text-[#5b3cf1] font-medium uppercase">
          {blog.category}
        </span>
        <h2 className="mt-2 text-xl font-semibold text-gray-800 line-clamp-2">
          {blog.title}
        </h2>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {blog.subTitle}
        </p>

        {/* HTML Description Preview (optional) */}
        <div
          className="mt-2 text-sm text-gray-600 line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog.description.slice(0,40)),
          }}
        />

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span>{format(new Date(blog.createdAt), "dd MMM yyyy")}</span>
          <span>Published: {blog.isPublished ? "Yes" : "No"}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
