import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { blogPosts, getBlogPost } from "@/app/data/blog-data";
import { notFound } from "next/navigation";
import "./blogpost.css";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <div className="blog-post-page">
        <div className="wrap-container">
          <div className="content-container content-container-blog-post">
            <div className="center-container center-container-blog-post">
              <div className="blog-post-heading blog-text-container">
                <span className="blog-post-title">{post.title}</span>
                <div className="blog-post-byline">
                  <img className="blog-post-author-image" src={post.avatar} alt="" />
                  <span>{post.author}</span>
                  <img className="blog-post-divider" src="/blog-divider.svg" alt="" />
                  <span>{post.date}</span>
                </div>
              </div>

              <img className="blog-post-image" src={post.image} alt={post.title} />

              <div className="blog-post-content blog-text-container">
                {post.content.map((paragraph, index) => (
                  <span className="blog-post-paragraph" key={index}>{paragraph}</span>
                ))}

                <div className="blog-post-author">
                  <span className="blog-post-author-label">WRITTEN BY</span>
                  <div className="blog-post-author-info">
                    <img src={post.avatar} alt="" />
                    <div>
                      <span className="blog-post-author-name">{post.author}</span>
                      <span className="blog-post-author-bio">Team writer sharing ideas to help teams work better together.</span>
                    </div>
                  </div>
                </div>

                <div className="blog-post-rule" />

                <div className="blog-comments">
                  <span className="blog-comments-title">Join the conversation</span>
                  <div className="blog-comment-form">
                    <img src="/author1.png" alt="" />
                    <div className="blog-comment-input" role="textbox" aria-label="Write a comment" contentEditable suppressContentEditableWarning>
                      <span>Comment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
