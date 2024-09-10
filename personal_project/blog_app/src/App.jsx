import React, { useState } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="app">
      <h1>My Blog</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
