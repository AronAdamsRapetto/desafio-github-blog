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
