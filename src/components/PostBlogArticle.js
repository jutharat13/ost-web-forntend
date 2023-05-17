import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "http://dev.opensource-technology.com:3000/api";

function PostBlogArticle() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    axios.get(`${baseURL}/posts`).then((response) => {
      setPost(response.data.posts);
      console.log(response.data.posts);
    });
  }, []);

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
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default PostBlogArticle;
