import React, { useState } from "react";
import { blog_data } from "../../assets/assets";

// const mockBlogs = [
//   {
//     id: 1,
//     title: "The Rise of Artificial Intelligence in Modern Technology",
//     date: "Wed May 28 2025",
//     status: "Published",
//   },
//   {
//     id: 2,
//     title: "Importance of Tourism",
//     date: "Wed May 28 2025",
//     status: "Published",
//   },
//   {
//     id: 3,
//     title: "The New Way of Study",
//     date: "Wed May 28 2025",
//     status: "Published",
//   },
//   {
//     id: 4,
//     title: "Taxes on Luxury Houses",
//     date: "Wed May 28 2025",
//     status: "Published",
//   },
//   {
//     id: 5,
//     title: "Maximizing returns by minimizing resources in your startup",
//     date: "Wed May 28 2025",
//     status: "Published",
//   },
//   {
//     id: 6,
//     title: "Enhancing your skills and capturing memorable moments",
//     date: "Wed May 28 2025",
//     status: "Published",
//   },
//   {
//     id: 7,
//     title: "Tips for getting the most out of apps and software",
//     date: "Wed May 28 2025",
//     status: "Published",
//   },
//   {
//     id: 8,
//     title: "Learning new technology to boost your career in software",
//     date: "Wed May 28 2025",
//     status: "Published",
//   },
//   {
//     id: 9,
//     title: "How to create an effective startup roadmap or ideas",
//     date: "Wed May 28 2025",
//     status: "Published",
//   },
//   {
//     id: 10,
//     title: "A detailed step by step guide to manage your lifestyle",
//     date: "Wed May 28 2025",
//     status: "Published",
//   },
// ];

const ListBlog = () => {
  const [blog, setblog] = useState(blog_data);
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All blogs</h2>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Blog Title</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blog.map((blog, index) => (
              <tr
                key={blog.id}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{blog.title}</td>
                <td className="px-4 py-3">
                  {new Date(blog.createdAt).toISOString().split("T")[0]}
                </td>

                <td className="px-4 py-3">
                  <span className="text-green-600 font-medium">
                    {blog.isPublished?"published":"notpublished"}
                  </span>
                </td>
                <td className="px-4 py-3 flex items-center justify-center gap-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                    Unpublish
                  </button>
                  <button className="px-2 py-1 text-sm bg-red-100 text-red-500 rounded-full hover:bg-red-200">
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
