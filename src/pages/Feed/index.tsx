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

export function Feed() {
  return (
    <FeedPageContainer>
      <UserProfileContainer>
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <div>
          <UserProfileHeader>
            <h1>Name</h1>
            <a href="#">
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </UserProfileHeader>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            consectetur reiciendis beatae rem, veritatis temporibus illum ipsa
          </span>
          <UserInfoContainer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>git name</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>git company</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>git followers</span>
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
        <PostCard>
          <div>
            <h2>Title</h2>
            <span>Há 1 dia</span>
          </div>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod neque
            eos eligendi excepturi in eaque sint aspernatur earum impedit
            asperiores, iure quibusdam odit adipisci minima totam, vitae, porro
            et amet?
          </span>
        </PostCard>
        <PostCard>
          <div>
            <h2>Title</h2>
            <span>Há 1 dia</span>
          </div>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod neque
            eos eligendi excepturi in eaque sint aspernatur earum impedit
            asperiores, iure quibusdam odit adipisci minima totam, vitae, porro
            et amet?
          </span>
        </PostCard>
        <PostCard>
          <div>
            <h2>Title</h2>
            <span>Há 1 dia</span>
          </div>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod neque
            eos eligendi excepturi in eaque sint aspernatur earum impedit
            asperiores, iure quibusdam odit adipisci minima totam, vitae, porro
            et amet?
          </span>
        </PostCard>
      </PostsContainer>
    </FeedPageContainer>
  )
}
