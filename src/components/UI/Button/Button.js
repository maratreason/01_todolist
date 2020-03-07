import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => {
    if (props.type === 'info') return 'yellow'
    if (props.type === 'success') return 'green'
    if (props.type === 'danger') return 'orangered'
}};
`
