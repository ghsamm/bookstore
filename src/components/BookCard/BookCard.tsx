import React, { FunctionComponent } from 'react'
import Book from '../../models/book'
import Link from '../Link'
import * as S from './BookCard.style'

interface Props {
    book: Book
}

const BookCard: FunctionComponent<Props> = ({ book }) => {


    return <Link to={`/books/${book.id}`}>
        <S.BookCard>
            <S.Image link={book.cover} />
            <S.Content>
                <S.Title>{book.title}</S.Title>
                <S.Author>{book.author}</S.Author>
            </S.Content>
            <S.SeeMore>See More Details</S.SeeMore>
        </S.BookCard>
    </Link>
}

export default BookCard