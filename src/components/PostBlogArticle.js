function PostBlogArticle(props) {
    const { postblogs } = props;
  return (
    <div className="blogArticle">
      <div className="titleName">
        <h2>{postblogs.title}</h2>
        <p>{postblogs.content}</p>
        <p>{postblogs.created_at}</p>
        
        <div className="buttonEdit"><button>Edit</button></div>
      </div>
    </div>
  );
}
export default PostBlogArticle;
