import "./App.css";
import "./CSS/Button.css";
import AppHeader from "./components/AppHeader";
import BlogArticle from "./components/PostBlogArticle";
import DraftBlogArticle from "./components/DraftBlogArticle";

import React from "react";
import { Link, Routes, Route } from "react-router-dom";


function App() {
 

  // const postBlogElements = post.map((postsBlogs, index) => {
  //   return <BlogArticle key={index} postBlogs={postsBlogs} />;
  // });

  // const blogElements = postblog.map((postblog, index) => {
  //   return <BlogArticle key={index} postBlogs={postblog} />;
  // });

  return (
    <div className="App">
      <AppHeader />
      <div className="button">
        <div className="button-post-draft">
          <Link to="/">
            <button className="button1 post">post</button>
          </Link>
          <Link to="/DraftBlogArticle">
            <button className="button1 draft">draft</button>
          </Link>
        </div>
        <div className="button-create">
          <Link to="/Create">
            <button className="button1 create">Create Draft</button>
          </Link>
        </div>
<Routes>
        <Route path="/" element={<BlogArticle />}></Route>
        <Route path="/DraftBlogArticle" element={<DraftBlogArticle />}></Route>
        <Route path="/DraftBlogArticle" ></Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
