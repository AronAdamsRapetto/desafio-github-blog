import styled from 'styled-components'

export const FeedPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 864px;
  margin: auto;
`

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 4.5rem;

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${(props) => props.theme.subtitle};
    }

    span {
      font-size: 0.875;
      color: ${(props) => props.theme.span};
    }
  }
`

export const SearchFormContainer = styled.form`
  width: 100%;

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.input};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 6px;
    color: ${(props) => props.theme.label};

    &::placeholder {
      color: ${(props) => props.theme.label};
    }

    &:focus {
      color: ${(props) => props.theme.text};
    }
  }
`

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
  border: 2px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme.label};
    cursor: pointer;
    transition: 0.2s;
  }

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }

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
