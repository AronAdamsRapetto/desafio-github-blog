import { NavLink } from 'react-router-dom'
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

export function Post() {
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
        <h1>Title</h1>
        <PostInfoContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>usuario</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>tempo</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>comentarios</span>
          </div>
        </PostInfoContainer>
      </PostHeader>
    </PostPageContainer>
  )
}
