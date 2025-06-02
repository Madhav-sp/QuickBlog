import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { comments_data } from "../../assets/assets";

const Comments = () => {
  const [selectedTab, setSelectedTab] = useState("Approved");
  const [comments, setComments] = useState(comments_data);

  const filteredComments = comments.filter((c) =>
    selectedTab === "Approved" ? c.isApproved : !c.isApproved
  );

  const handleDelete = (_id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (confirmed) {
      setComments((prev) => prev.filter((c) => c._id !== _id));
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>

      {/* Tabs */}
      <div className="flex gap-3 mb-4">
        {["Approved", "Not Approved"].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedTab(status)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              selectedTab === status
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[700px]">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Blog & Comment</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredComments.length > 0 ? (
              filteredComments.map((c) => (
                <tr
                  key={c._id}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-4 py-3">
                    <p className="font-semibold text-gray-800 mb-1">
                      {c.blog.title}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Name:</span> {c.name}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Comment:</span> {c.content}
                    </p>
                  </td>
                  <td className="px-4 py-3">{formatDate(c.createdAt)}</td>
                  <td className="px-4 py-3 flex justify-center items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        c.isApproved
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {c.isApproved ? "Approved" : "Not Approved"}
                    </span>
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete comment"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No comments found for <b>{selectedTab}</b>.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
