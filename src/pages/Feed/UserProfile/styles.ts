import styled from 'styled-components'

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
