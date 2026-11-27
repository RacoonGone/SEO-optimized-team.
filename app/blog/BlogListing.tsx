"use client";

import { blogPosts } from "@/app/data/blog-data";
import Link from "next/link";

export default function BlogListing() {
  return (
    <section className="blog-list-page">
      <div className="wrap-container">
        <div className="content-container content-container-blog">
          <div className="center-container center-container-blog">
              <div className="blog-text-container">
                  <h1 className="blog-list-title">Blog</h1>
                  <p className="blog-list-desc">Open source knowledge from our team helps teams to work better and faster.</p>
              </div>
              <div className="blog-card-grid">
                {blogPosts.map((post) =>
                    <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
                        <img className="blog-image" src={post.image} alt={post.title} />
                        <div className="blog-card-body">
                            <div className="blog-content-container">
                                <h1 className="blog-card-title">{post.title}</h1>
                                <p className="blog-card-excerpt">{post.excerpt}</p>
                            </div>
                            <div className="blog-detail">
                                <div className="blog-author">
                                    <img className="blog-author-image" src={post.avatar} alt={post.author} />
                                    <span className="blog-author-name">{post.author}</span>
                                    <img className="blog-divider" src="/blog-divider.svg" />
                                    <span className="blog-date">{post.date}</span>
                                </div>
                            </div>
                        </div>
                    </Link>)}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
