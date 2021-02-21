import styled from 'styled-components'
import BaseCard from '../../components/BaseCard'
import BaseImage from '../../components/BaseImage'

export const BookDetailsPage = styled.div``

export const Navigation = styled.div`
        margin: 20px;
        display: flex;
    `

export const Back = styled.div`
        padding: 10px 15px;
        &:hover {
            background-color: rgba(0,0,0,0.01);
        }
    `

export const Container = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin: 10px;
    `

export const Card = styled(BaseCard)`
        display: grid;
        flex-basis: 300px;
        min-height: 300px;
        aspect-ratio: 2/3;
    `

export const Image = BaseImage

export const Content = styled.div``

export const Title = styled.h2``

export const Details = styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
    `
