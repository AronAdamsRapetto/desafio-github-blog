import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  FeedPageContainer,
  PostCard,
  PostsContainer,
  SearchContainer,
  SearchFormContainer,
  UserInfoContainer,
  UserProfileContainer,
  UserProfileHeader,
} from './styles'
import { useCallback, useEffect, useState } from 'react'
import { API } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface User {
  avatarUrl: string
  name: string
  bio: string
  followers: number
  company: string
  login: string
  profileLink: string
}

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
  const [user, setUser] = useState<User>({} as User)
  const [posts, setPosts] = useState<Post[]>([])

  const fetchUser = async () => {
    const response = await API.get('/users/AronAdamsRapetto')

    const {
      name,
      login,
      avatar_url: avatarUrl,
      followers,
      company,
      bio,
      html_url: htmlUrl,
    } = response.data

    setUser({
      name,
      login,
      avatarUrl,
      followers,
      company,
      bio,
      profileLink: htmlUrl,
    })
  }

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
    fetchUser()
    fetchPosts()
  }, [fetchPosts])

  return (
    <FeedPageContainer>
      <UserProfileContainer>
        <img src={user.avatarUrl} alt="" />
        <div>
          <UserProfileHeader>
            <h1>{user.name}</h1>
            <a href={user.profileLink} target="_blank" rel="noreferrer">
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </UserProfileHeader>
          <span>{user.bio}</span>
          <UserInfoContainer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{user.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company ? user.company : 'Vazio'}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{`${user.followers} seguidores`}</span>
            </div>
          </UserInfoContainer>
        </div>
      </UserProfileContainer>

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
