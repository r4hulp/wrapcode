import { format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params } : { params : { slug : string }}) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if(!post) {
    return { status: 404 }
  }

  return post;

}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if(!post) {
    return <div>Post not found</div>
  }
  
  const Content = getMDXComponent(post.body.code)

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Content />
    </article>
  )
}

export default PostLayout
