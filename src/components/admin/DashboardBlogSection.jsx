import React, { useState } from "react";
import { blog_data, comments_data } from "../../assets/assets";

const DashboardBlogSection = () => {
  const [blog, setblog] = useState(blog_data);
  const [comment, setcomment] = useState(comments_data)

  return (
    <div className="p-6 bg-[#f9fbfe] rounded-xl shadow">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <div className="text-2xl">📝</div>
          <div>
            <div className="text-sm text-gray-600">Blogs</div>
            <div className="text-xl font-semibold">{blog.length}</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <div className="text-2xl">💬</div>
          <div>
            <div className="text-sm text-gray-600">Comments</div>
            <div className="text-xl font-semibold">{comment.length}</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <div className="text-2xl">📄</div>
          <div>
            <div className="text-sm text-gray-600">Drafts</div>
            <div className="text-xl font-semibold">0</div>
          </div>
        </div>
      </div>

      {/* Blog Table */}
      <div>
        <h2 className="text-xl font-semibold text-[#3b82f6] mb-4">
          📚 Latest Blogs
        </h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Blog Title</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blog.slice(0,5).map((blog, index) => (
                <tr key={blog.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{blog.title}</td>
                  <td className="px-4 py-3">{blog.date}</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">
                    {blog.status}
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300">
                      Unpublish
                    </button>
                    <button className="bg-red-100 text-red-500 px-2 py-1 rounded-full hover:bg-red-200">
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardBlogSection;
