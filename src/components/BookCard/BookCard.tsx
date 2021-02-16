import React, { FunctionComponent } from 'react'
import Book from '../../models/book'
import * as S from './BookCard.style'

interface Props {
    book: Book
}

const BookCard: FunctionComponent<Props> = ({ book }) => {


    return <S.Link to={`/books/${book.id}`}>
        <S.BookCard>
            <S.Image link={book.cover} />
            <S.Content>
                <S.Title>{book.title}</S.Title>
                <S.Author>{book.author}</S.Author>
            </S.Content>
            <S.SeeMore>See More Details</S.SeeMore>
        </S.BookCard>
    </S.Link>
}

export default BookCard