import React, { useState } from "react";


const AddBlog = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [publishNow, setPublishNow] = useState(false);

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleAddBlog = () => {
    const blogData = {
      thumbnail,
      title,
      subTitle,
      description,
      category,
      status: publishNow ? "Published" : "Draft",
      date: new Date().toDateString(),
    };
    console.log(blogData);
    alert("Blog added (check console)");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Add New Blog</h2>

      {/* Thumbnail */}
      <label className="block mb-2 font-medium text-gray-700">Thumbnail</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleThumbnailChange}
        className="mb-4 border border-gray-300 p-2 rounded w-full"
      />

      {/* Title */}
      <label className="block mb-2 font-medium text-gray-700">Title</label>
      <input
        type="text"
        placeholder="Enter blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 border border-gray-300 p-2 rounded w-full"
      />

      {/* Sub Title */}
      <label className="block mb-2 font-medium text-gray-700">Sub Title</label>
      <input
        type="text"
        placeholder="Enter sub title"
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
        className="mb-4 border border-gray-300 p-2 rounded w-full"
      />

      {/* Description */}
      <label className="block mb-2 font-medium text-gray-700">
        Description
      </label>
      <textarea
        placeholder="Write your blog here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={6}
        className="mb-4 border border-gray-300 p-3 rounded w-full resize-none"
      />

      {/* Category */}
      <label className="block mb-2 font-medium text-gray-700">Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-4 border border-gray-300 p-2 rounded w-full"
      >
        <option value="">Select category</option>
        <option value="Tech">Tech</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Startup">Startup</option>
        <option value="Travel">Travel</option>
      </select>

      {/* Publish Checkbox */}
      <label className="flex items-center gap-2 mb-6">
        <input
          type="checkbox"
          checked={publishNow}
          onChange={(e) => setPublishNow(e.target.checked)}
          className="accent-blue-600"
        />
        <span className="font-medium text-gray-700">Publish Now</span>
      </label>

      {/* Submit Button */}
      <button
        onClick={handleAddBlog}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
      >
        Add Blog
      </button>
    </div>
  );
};

export default AddBlog;
