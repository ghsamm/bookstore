import React, { FunctionComponent } from 'react'
import Book from '../../models/book'
import * as S from './BookCard.style'

interface Props {
    book: Book
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