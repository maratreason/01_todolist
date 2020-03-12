import styled from "styled-components"

export const Button = styled.button`
  background-color: ${props => {
    if (props.type === "info") return "#66CCFF"
    if (props.type === "success") return "#33CC66"
    if (props.type === "danger") return "orangered"
    if (props.type === "default") return "#CCCC99"
  }};
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 0.3rem;
  color: #fff;
`
export const AddButton = styled(Button)`
  color: #fff;
`
