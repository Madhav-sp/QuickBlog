# 📝 QuickBlog

QuickBlog is a clean and fast blogging web application built using React. It allows users to view published blog posts dynamically from a mock data file (`blog_data`), with a beautiful layout and optimized readability using Tailwind CSS and `@tailwindcss/typography`.

## 🚀 Features

- 📰 View dynamic blog posts via React Router
- 💡 Blog detail page renders HTML content using `dangerouslySetInnerHTML`
- 🌐 Fully responsive layout with Tailwind CSS
- 🧠 Modular component structure
- 📄 Mock blog data using local `blog_data` JSON file

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, React Router
- **Mock Data**: Local JS data file (`blog_data`)
- **Typography Styling**: `@tailwindcss/typography`

---

## 📁 Project Structure

```
QuickBlog/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   │   └── Practices.jsx
│   │   ├── pages/
│   │   │   └── Blog.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   ├── tailwind.config.js
│   └── package.json
```

---

## 🧑‍💻 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/QuickBlog.git
cd QuickBlog/client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

---

## ✨ How Dynamic Blog Works

- Blog data is stored in `blog_data` as an array of objects with fields like `_id`, `title`, `description`, etc.
- The `Blog.jsx` page fetches blog data using the `id` from the route param via `useParams()`.
- `dangerouslySetInnerHTML` is used to render HTML blog content safely.

```js
<div
  className="prose lg:prose-xl"
  dangerouslySetInnerHTML={{ __html: data.description }}
></div>
```

---

## 📦 Dependencies

- `react-router-dom`
- `tailwindcss`
- `@tailwindcss/typography`

### To install Tailwind Typography:

```bash
npm install -D @tailwindcss/typography
```

In `tailwind.config.js`:

```js
plugins: [require('@tailwindcss/typography')],
```

---

## 🖼️ Sample Blog Data Format

```js
{
  _id: "6805f2e2d8f584af5da78d3d",
  title: "Tips for getting the most out of apps and software",
  subTitle: "Tips for Getting the Most Out of Apps and Software",
  description: "<h1>...</h1><p>...</p>",
  category: "Technology",
  image: blog_pic_4,
  createdAt: "2025-04-21T07:25:22.362Z",
  isPublished: true
}
```

---

## 📌 To Do

- [ ] Add backend with MongoDB for storing blogs
- [ ] Add user authentication
- [ ] Admin dashboard to publish/unpublish blogs
- [ ] Rich text editor for writing posts

---

## 💡 Credits

Made with ❤️ by **Madhav**

---

## 📃 License

This project is licensed under the MIT License.