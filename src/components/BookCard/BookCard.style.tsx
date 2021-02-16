import styled from 'styled-components'


export const BookCard = styled.div`
    border: 2px solid black;
    background-color: black;
    border-radius: 4px;
    overflow: hidden;
    aspect-ratio: 2 / 3;
    min-height: 250px;
    display: flex;
    flex-direction: column;
`

interface ImageProps {
    link: string
}

export const Image = styled.div<ImageProps>`
    background-image: url(${props => props.link});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    flex: 1;
`

export const Content = styled.div`
    padding: 5px;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 1.3em;
    line-height: 1.4;
`

export const Author = styled.div`
    text-align: right;
    font-style: italic;
`
