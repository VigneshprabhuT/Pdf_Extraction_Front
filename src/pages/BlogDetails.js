import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { allBlogPosts } from "./Blog"; // adjust path
import "../css/Blog.css"; // reuse same styles

const BlogDetail = () => {
  const { id } = useParams();
  const post = allBlogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <section className="blog-detail-not-found">
        <div className="container">
          <h2>Article not found</h2>
          <NavLink to="/blog">← Back to Blog</NavLink>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-detail">
      <div className="blog-detail-hero">
        <img src={post.image} alt={post.imageAlt} className="blog-detail-hero-img" />
        <div className="blog-detail-overlay">
          <div className="blog-detail-header">
            <NavLink to="/blog" className="back-link">← Back to Blog</NavLink>
            <span className="tag">{post.category}</span>
          </div>
          <h1>{post.title}</h1>
          <div className="blog-detail-meta">
            <span className="blog-date">{post.date}</span>
            <span className="blog-read-time">· {post.readTime}</span>
            <span className="blog-author">· {post.author}</span>
          </div>
        </div>
      </div>

      <div className="blog-detail-content">
        <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.fullContent }} />
        <div className="blog-detail-footer">
          <div className="blog-author-box">
            <div className="author-avatar">
              {/* You can add an avatar image here */}
              <span>{post.author.charAt(0)}</span>
            </div>
            <div className="author-info">
              <strong>{post.author}</strong>
              <span>{post.authorRole}</span>
            </div>
          </div>
          <div className="blog-share">
            <span>Share this article:</span>
            {/* Add social share buttons here if desired */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;