import styled from 'styled-components'

export const PostsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
  margin: 3rem auto;
`

export const PostCard = styled.article`
  max-width: 416px;
  padding: 2rem;
  background: ${(props) => props.theme.post};
  border-radius: 10px;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.25rem;
    gap: 2rem;

    > h2 {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme.title};
    }

    > span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.span};
      min-width: 5rem;
    }
  }
`
