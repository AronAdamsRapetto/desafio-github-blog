import styled from 'styled-components'

export const FeedPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 864px;
  margin: auto;
`

export const UserProfileContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;
  gap: 2rem;

  > img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  > div {
    width: 100%;
  }
`

export const UserProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme.title};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    &:active {
      color: ${(props) => props.theme.blue};
    }

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${(props) => props.theme.subtitle};
  margin-top: 1.5rem;

  svg {
    color: ${(props) => props.theme.label};
  }

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
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

  & div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.25rem;

    > h2 {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme.title};
    }

    > span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.span};
    }
  }
`
