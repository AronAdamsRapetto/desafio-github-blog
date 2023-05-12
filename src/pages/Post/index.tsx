import { NavLink, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  NavContainer,
  PostHeader,
  PostInfoContainer,
  PostPageContainer,
} from './styles'
import { useState, useCallback, useEffect } from 'react'
import { API } from '../../lib/axios'
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'

interface PostData {
  postOwner: string
  title: string
  body: string
  comments: number
  created_at: string
  html_url: string
}

interface PostDataResponse extends PostData {
  user: {
    login: string
  }
}

export function Post() {
  const [postData, setPostData] = useState<PostData>({} as PostData)
  const { postId } = useParams()

  const formatPostData = (postData: PostDataResponse) => {
    const createdAt = new Date(postData.created_at)
    const distanceToNowDate = formatDistanceToNow(createdAt, {
      locale: ptBR,
      addSuffix: true,
    })

    return {
      postOwner: postData.user.login,
      title: postData.title,
      body: postData.body,
      comments: postData.comments,
      created_at: distanceToNowDate,
      html_url: postData.html_url,
    }
  }

  const getPost = useCallback(async () => {
    const { data } = await API.get(
      `/repos/AronAdamsRapetto/desafio-github-blog/issues/${postId}`,
    )

    const formatedData = formatPostData(data)
    setPostData(formatedData)
  }, [postId])

  useEffect(() => {
    getPost()
  }, [getPost])

  return (
    <PostPageContainer>
      <PostHeader>
        <NavContainer>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </NavLink>
          <a href="#">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </NavContainer>
        <h1>{postData.title}</h1>
        <PostInfoContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{postData.postOwner}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{postData.created_at}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{`${postData.comments} comentários`}</span>
          </div>
        </PostInfoContainer>
      </PostHeader>
    </PostPageContainer>
  )
}
