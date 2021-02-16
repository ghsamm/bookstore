import { Link as ReactRouterLink } from 'react-router-dom'
import styled from 'styled-components'

export const Link = styled(ReactRouterLink)`
    color: inherit;
    text-decoration: none;
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

export const SeeMore = styled.div.attrs({ className: 'see-more' })`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
`

export const BookCard = styled.div`
    border: 2px solid black;
    background-color: black;
    color: white;
    border-radius: 4px;
    overflow: hidden;
    aspect-ratio: 2 / 3;
    max-width: 300px;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    position: relative;
    &:hover {
        .see-more {
            opacity: 1;
        }
    }
`