import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "http://dev.opensource-technology.com:3000/api";

function DraftBlogArticle() {

  const [post, setPost] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    axios.get(`${baseURL}/posts/draft`).then((response) => {
      setPost(response.data.posts);
      console.log(response.data.posts);
    });
  }, []);
console.log(post);

  return (
    <>
      {post.map((item, index) => (
        <div className="blogArticle">
          <div className="titleName">
            <h2 key={index}>{item.title}</h2>
            <p>{item.content}</p>
            <p>{item.created_at}</p>
            <div className="buttonEdit">
              <button className="button1 edit">Edit</button>
              <button className="button1 published">Published</button>
              <button className="button1 delete">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default DraftBlogArticle;
