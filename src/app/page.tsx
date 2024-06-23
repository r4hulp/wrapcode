import { BlogArticlesList } from "@/components/blog/blog-articles-list";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { PostData, getSortedPostsData } from "@/lib/posts";
import Image from "next/image";


export default async function Home() {


  return (
    <section>
      

      <BlogArticlesList />
    </section>
  );
}

