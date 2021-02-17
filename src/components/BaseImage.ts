import styled from "styled-components"

interface Props {
    link: string
}

const BaseImage = styled.div<Props>`
    background-image: url(${props => props.link});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export default BaseImage