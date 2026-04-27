const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "Test1",
    author: "John",
    url: "example1.com",
    likes: 20,
  },
  {
    title: "Test2",
    author: "Will",
    url: "example2.com",
    likes: 10,
  },
];

const nonExistingId = async () => {
  const blog = new Blog({
    title: "Test000",
    author: "Name??",
    url: "example0000.com",
    likes: 1000,
  });

  await blog.save();
  await blog.deleteOne();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});

  return blogs.map((blog) => blog.toJSON());
};

module.exports = { initialBlogs, blogsInDb, nonExistingId };
