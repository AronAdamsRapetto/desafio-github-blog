import { PostList } from './PostList'
import {
  FeedPageContainer,
  SearchContainer,
  SearchFormContainer,
} from './styles'
import { UserProfile } from './UserProfile'

export function Feed() {
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

      <PostList />
    </FeedPageContainer>
  )
}
