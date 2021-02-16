import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Book from '../models/book'

interface Props {
    book: Book
}

interface ImageProps {
    link: string
}

const S = {
    BookCard: styled.div`
        border: 2px solid black;
        background-color: black;
        border-radius: 4px;
        overflow: hidden;
        aspect-ratio: 2 / 3;
        min-height: 250px;
        display: flex;
        flex-direction: column;
    `,
    Image: styled.div<ImageProps>`
        background-image: url(${props => props.link});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        flex: 1;
    `,
    Content: styled.div`
        padding: 5px;
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 5px;
    `,
    Title: styled.div`
        text-align: center;
        font-weight: bold;
        font-size: 1.3em;
        line-height: 1.4;
    `,
    Author: styled.div`
        text-align: right;
        font-style: italic;
    `
}

const BookCard: FunctionComponent<Props> = ({ book }) => {
    return <S.BookCard>
        <S.Image link={book.cover} />
        <S.Content>
            <S.Title>{book.title}</S.Title>
            <S.Author>{book.author}</S.Author>
            <div></div>
        </S.Content>
    </S.BookCard>
}

export default BookCard