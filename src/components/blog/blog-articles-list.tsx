import { PostData, getSortedPostsData } from "@/lib/posts";
import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { getMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link";

function PostCard(post: Post) {
    console.log(post);

    return (
        <div className="mb-8">
            <h2 className="text-xl">
                <Link
                    href={post.url}
                    className="text-blue-700 hover:text-blue-900"
                    legacyBehavior>
                    {post.title}
                </Link>
            </h2>
            <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
                {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <div className="text-sm">
                {/* <Content /> */}
            </div>
        </div>
    );
}

export function BlogArticlesList(

) {
    const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    return (
        <div className="container mx-auto px-24">
            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
        </div>
    )
}
