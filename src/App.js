import "./App.css";
import "./CSS/Button.css";
import AppHeader from "./components/AppHeader";
import BlogArticle from "./components/PostBlogArticle";
import DraftBlogArticle from "./components/DraftBlogArticle";
import postblog from "./data/jsontest";

function App() {
  const blogElements = postblog.map((postblog, index) => {
    return <BlogArticle key={index} postblogs={postblog} />;
  });
  return (
    <div className="App">
      <AppHeader />
      <div className="button">
        <div className="button-post-draft">
          <button className="button1">post</button>
          <button className="button1">draft</button>
        </div>
        <div className="button-draft">
          <button className="button1">Create Draft</button>
        </div>
      </div>
      <div className="post-grid">{blogElements}</div>
      <div className="draft-grid">
        <DraftBlogArticle />
      </div>
    </div>
  );
}

export default App;
