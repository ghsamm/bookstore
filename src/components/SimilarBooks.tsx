import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import useRequest from '../hooks/useRequest'
import getSimilarBooks from '../services/getSimilarBooks'
import ErrorMessage from './ErrorMessage'
import Link from './Link'
import LoadingSpinner from './LoadingSpinner'

const S = {
    SimilarBooks: styled.div`
    
    `,
    SectionTitle: styled.h3`

    `,
    BookTitle: styled.div`
        margin-bottom: 10px;
        text-decoration: underline;
    `
}

interface Props {
    bookId: string
}

const SimilarBooks: FunctionComponent<Props> = ({ bookId }) => {
    const { data: books, isLoading, error } = useRequest(() => getSimilarBooks(bookId))

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error || !books) {
        return <ErrorMessage message='Failed to load similar books!' />
    }

    if (books.length === 0) {
        return null
    }

    return <div>
        <h3>Books by the same author</h3>
        {books.map(book => (
            <Link key={book.id} to={`/books/${book.id}`}>
                <S.BookTitle>{book.title}</S.BookTitle>
            </Link>
        ))}
    </div>
}

export default SimilarBooks