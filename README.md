# QuickBlog

QuickBlog is a modern blogging application built with **React** and **Tailwind CSS**. It provides a clean and responsive reading experience with dynamic blog routing, reusable components, and a well-structured frontend architecture.

The project uses locally managed mock data to simulate a real-world blogging platform, making it an excellent foundation for integrating a backend or CMS in the future.

---

# Features

* Dynamic blog pages using React Router
* Responsive and modern user interface
* Clean typography optimized for article reading
* Component-based architecture for maintainability
* Local mock data for rapid development
* HTML content rendering for rich blog articles

---

# Tech Stack

| Category    | Technology                 |
| ----------- | -------------------------- |
| Framework   | React                      |
| Styling     | Tailwind CSS               |
| Routing     | React Router               |
| Typography  | @tailwindcss/typography    |
| Data Source | Local JavaScript Mock Data |

---

# Project Structure

```text
QuickBlog/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── package.json
```

---

# Getting Started

## Prerequisites

* Node.js 18 or later
* npm

---

## Clone the Repository

```bash
git clone https://github.com/yourusername/QuickBlog.git

cd QuickBlog/client
```

---

## Install Dependencies

```bash
npm install
```

---

## Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

# How It Works

QuickBlog loads blog posts from a local mock data file.

Each blog contains information such as:

* Title
* Subtitle
* Description
* Category
* Featured Image
* Published Date
* Publication Status

When a user selects a blog, React Router uses the route parameter to locate the corresponding post and render its content dynamically.

Rich HTML content is displayed using React's `dangerouslySetInnerHTML`, allowing articles to support formatted headings, paragraphs, lists, and other HTML elements.

---

# Dependencies

* React
* React Router DOM
* Tailwind CSS
* @tailwindcss/typography

Install the typography plugin:

```bash
npm install -D @tailwindcss/typography
```

Configure Tailwind:

```javascript
plugins: [require("@tailwindcss/typography")]
```

---

# Future Enhancements

The project can be extended with:

* Backend integration using Node.js and MongoDB
* User authentication and authorization
* Admin dashboard for managing blog posts
* Rich text editor for content creation
* Categories and tags
* Search and filtering
* Pagination
* Comments system
* Blog bookmarking
* Image uploads with Cloudinary
* Markdown support

---

# Contributing

Contributions are welcome. Feel free to fork the repository, submit pull requests, or open issues for improvements and bug reports.

---

# License

This project is licensed under the MIT License.
