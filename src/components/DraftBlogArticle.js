function DraftBlogArticle() {
  return (
    <div className="blogArticle">
      <div className="titleName">
        <h2>title</h2>
        <p>content</p>
        <p>created_at</p>

        <div className="buttonEdit">
          <button>Edit</button>
          <button>Published</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default DraftBlogArticle;
