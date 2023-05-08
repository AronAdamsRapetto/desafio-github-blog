import {
  FeedPageContainer,
  PostCard,
  PostsContainer,
  SearchContainer,
  SearchFormContainer,
} from './styles'
import { useCallback, useEffect, useState } from 'react'
import { API } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { UserProfile } from './UserProfile'

interface Post {
  body: string
  created_at: string
  id: number
  title: string
}

interface PostResponse extends Post {
  state: string
}

export function Feed() {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async (query = '') => {
    const {
      data: { items },
    } = await API.get('/search/issues', {
      params: {
        q: `${query && query + '%20'}repo:AronAdamsRapetto/desafio-github-blog`,
      },
    })

    const filteredPosts = items.filter(
      (item: PostResponse) => item.state === 'open',
    )

    const formatedPosts = filteredPosts.map((post: Post) => {
      const createdAt = new Date(post.created_at)

      return {
        body: post.body.slice(0, 120),
        created_at: formatDistanceToNow(createdAt, {
          locale: ptBR,
          addSuffix: true,
        }),
        id: post.id,
        title: post.title,
      }
    })

    setPosts(formatedPosts)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <FeedPageContainer>
      <UserProfile />
      <SearchContainer>
        <div>
          <h2>Publicações</h2>
          <span>0 publicações</span>
        </div>

        <SearchFormContainer>
          <input placeholder="Buscar conteúdo" />
        </SearchFormContainer>
      </SearchContainer>

      <PostsContainer>
        {posts.length &&
          posts.map((post: Post) => (
            <PostCard key={post.id}>
              <div>
                <h2>
                  {post.title.length > 38
                    ? `${post.title.slice(0, 38)}...`
                    : post.title}
                </h2>
                <span>{post.created_at}</span>
              </div>
              <span>{post.body + '...'}</span>
            </PostCard>
          ))}
      </PostsContainer>
    </FeedPageContainer>
  )
}
