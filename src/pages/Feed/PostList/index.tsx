import { useCallback, useEffect, useState } from 'react'
import { PostCard, PostsContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { API } from '../../../lib/axios'

interface Post {
  body: string
  created_at: string
  id: number
  title: string
}

interface PostResponse extends Post {
  state: string
}

export function PostList() {
  const [posts, setPosts] = useState<Post[]>([])

  const formatPosts = useCallback((postList: PostResponse[]) => {
    const filteredPosts = postList.filter(
      (item: PostResponse) => item.state === 'open',
    )

    const formatedPosts = filteredPosts.map((post: Post) => {
      const createdAt = new Date(post.created_at)
      const distanceToNowDate = formatDistanceToNow(createdAt, {
        locale: ptBR,
        addSuffix: true,
      })

      const shortTitle =
        post.title.length > 38 ? `${post.title.slice(0, 38)}...` : post.title

      return {
        body: `${post.body.slice(0, 120)}...`,
        created_at: distanceToNowDate,
        id: post.id,
        title: shortTitle,
      }
    })

    return formatedPosts
  }, [])

  const fetchPosts = useCallback(async () => {
    const {
      data: { items },
    } = await API.get('/search/issues', {
      params: {
        q: `repo:AronAdamsRapetto/desafio-github-blog`,
      },
    })

    const formatedPosts = formatPosts(items)

    setPosts(formatedPosts)
  }, [formatPosts])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContainer>
      {posts.length &&
        posts.map((post: Post) => (
          <PostCard key={post.id}>
            <div>
              <h2>{post.title}</h2>
              <span>{post.created_at}</span>
            </div>
            <span>{post.body}</span>
          </PostCard>
        ))}
    </PostsContainer>
  )
}
