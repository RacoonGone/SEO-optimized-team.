import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { blogPosts, getBlogPost } from "@/app/data/blog-data";
import "../blog.css";
import blogPage from ""

export default async function BlogPostPage() {
  return <>
    <Navbar />

    <Footer />
  </>;
}
