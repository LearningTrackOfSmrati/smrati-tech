import React from 'react'
import config from '../config/portfolio'
import './Blogs.css'

const Blogs = () => {
  return (
    <section id="blogs" className="blogs">
      <div className="container">
        <h2 className="section-title">
          Latest Blogs
        </h2>
        <div className="blogs-grid">
          {config.blogs.map((blog, index) => (
            <article key={index} className="blog-card">
              <div className="blog-header">
                <span className="blog-category">{blog.category}</span>
                <span className="blog-date">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-read-time">{blog.readTime}</span>
                <a href={blog.link} className="blog-link">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs

