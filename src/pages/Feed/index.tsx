import {
  FeedPageContainer,
  SearchContainer,
  SearchFormContainer,
  PostCard,
  PostsContainer,
} from './styles'
import { UserProfile } from './UserProfile'
import { useCallback, useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { API } from '../../lib/axios'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { NavLink } from 'react-router-dom'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface Post {
  body: string
  created_at: string
  number: number
  title: string
}

interface PostResponse extends Post {
  state: string
}

export function Feed() {
  const [posts, setPosts] = useState<Post[]>([])
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

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
        number: post.number,
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
    console.log(items)

    const formatedPosts = formatPosts(items)

    setPosts(formatedPosts)
  }, [formatPosts])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const queryPosts = useCallback(
    async (query: string) => {
      const response = await API.get('/search/issues', {
        params: {
          q: `${query}repo:AronAdamsRapetto/desafio-github-blog`,
        },
      })
      return formatPosts(response.data.items)
    },
    [formatPosts],
  )

  const handleSearchPosts = async (data: SearchFormInputs) => {
    if (!data.query) {
      await fetchPosts()
    } else {
      const posts = await queryPosts(data.query)
      setPosts(posts)
    }
  }

  return (
    <FeedPageContainer>
      <UserProfile />

      <SearchContainer>
        <div>
          <h2>Publicações</h2>
          <span>{`${posts.length} publicações`}</span>
        </div>

        <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </SearchFormContainer>
      </SearchContainer>

      <PostsContainer>
        {posts.length
          ? posts.map((post: Post) => (
              <PostCard key={post.number}>
                <NavLink to={`/post/${post.number}`}>
                  <div>
                    <h2>{post.title}</h2>
                    <span>{post.created_at}</span>
                  </div>
                  <span>{post.body}</span>
                </NavLink>
              </PostCard>
            ))
          : null}
      </PostsContainer>
    </FeedPageContainer>
  )
}
