// to provide metadata for slug pages
// export async function generateMetadata({ params }: {params: Promise<{slug: string}>}) {
//   const {slug}:any = await params;
//   const post = await getPost(slug);
//   return {
//     title: post.title,
//     description: post.excerpt,
//     alternates: {canonical: `/blog/${slug}`}
//   }
// }

export default function DynamicBlogPage(){
  return (
    <div>This is dynamic blog page</div>
  )
}