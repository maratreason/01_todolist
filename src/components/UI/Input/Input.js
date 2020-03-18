import styled from "styled-components"

export const Input = styled.input`
  max-width: 85%;
  padding: 1rem;
  flex-grow: 1;
  border-radius: 5px;
  border: 1px solid #ccc;
`
export const SearchInput = styled(Input)`
  margin-top: 0.5rem;
  max-width: 100%;
`

export const Checkbox = styled.div`
  max-width: 100%;
  display: flex;

  label {
    order: 1;
  }

  input {
    margin-right: 5px;
  }
`
