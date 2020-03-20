import styled from "styled-components"

export const Button = styled.button`
  background-color: ${props => {
    let { buttonType } = props
    if (buttonType === "info") return "#66CCFF"
    if (buttonType === "success") return "#33CC66"
    if (buttonType === "danger") return "orangered"
    if (buttonType === "default") return "#CCCC99"
    if (props.disabled) {
      buttonType = "default"
    }
    return buttonType
  }};
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: ${props => {
    if (props.disabled) {
      return "not-allowed"
    }
    return "pointer"
  }};
  margin-left: 0.3rem;
  color: #fff;
`

export const AddButton = styled(Button)`
  color: #fff;
`
