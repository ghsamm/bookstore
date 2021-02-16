import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Book from '../models/book'
import BookCard from './BookCard'

interface Props {
    books: Book[]
}

const S = {
    BookCardList: styled.div`
        display: grid;
        grid-gap: 20px;
        padding: 20px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    `
}

const BookCardList: FunctionComponent<Props> = ({ books }) => {
    return <S.BookCardList>
        {books.map(book => <BookCard key={book.id} book={book} />)}
    </S.BookCardList>
}

export default BookCardList