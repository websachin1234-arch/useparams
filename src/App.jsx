import { blogs } from "./blogs";
import { Link, Routes, Route, useParams } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-2">
          Latest Blogs
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Read, learn and grow every day
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
               to={"/blog/" + blog.title.toLowerCase().replaceAll(" ", "-")}
               key={blog.title}
              className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
                  Blog
                </span>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">{blog.text}</p>
                <span className="text-blue-600 font-semibold">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogPage() {
  const { slug } = useParams();
 const blog = blogs.find(
  (items) => items.title.toLowerCase().replaceAll(" ", "-") === slug);

  if (!blog) {
    return <p className="p-6">Blog not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link to="/" className="text-blue-600 font-semibold">
          ← Back
        </Link>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover rounded-2xl mt-6 mb-8"
        />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {blog.title}
        </h1>
        <p className="text-gray-600 text-lg">{blog.text}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:slug" element={<BlogPage />} />
    </Routes>
  );
}

export default App;