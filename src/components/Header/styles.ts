import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.profile};
  align-items: flex-start;

  & img {
    padding-top: 4rem;
  }

  & img:first-child {
    padding-top: 4.37rem;
    padding-bottom: 2.37rem;
  }

  & img:last-child {
    padding: 1.87rem 0;
  }
`
