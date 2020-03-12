import styled from "styled-components"

export const Button = styled.button`
  background-color: ${props => {
    if (props.type === "info") return "#66CCFF"
    if (props.type === "success") return "#33CC66"
    if (props.type === "danger") return "orangered"
<<<<<<< HEAD
    if (props.type === "default") return "#CCCC99"
=======
    if (props.type === "default") return "#66CCFF"
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3
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
