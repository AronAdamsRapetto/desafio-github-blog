import styled from 'styled-components'

export const PostPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 864px;
  margin: auto;
`

export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${(props) => props.theme.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;

  > div {
    display: flex;
  }

  > h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: bold;
    color: ${(props) => props.theme.title};
    margin-bottom: 0.5rem;
  }
`

export const NavContainer = styled.div`
  justify-content: space-between;
  margin-bottom: 1.25rem;

  > a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-weight: bold;
    font-size: 0.75rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const PostInfoContainer = styled.div`
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.span};
  }
`
