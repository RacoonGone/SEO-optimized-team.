import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import BlogListing from "./BlogListing";
import "./blog.css";

export const metadata: Metadata = { title: "Blog", description: "News, ideas, and practical advice for modern teams." };

export default function BlogPage() {
  return <>
    <Navbar />
    <BlogListing />
    <Footer />
  </>;
}
