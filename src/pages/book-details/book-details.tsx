import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowBack } from '@styled-icons/material/ArrowBack'

import Detail from '../../components/Details'
import ErrorMessage from '../../components/ErrorMessage'
import Link from '../../components/Link'
import LoadingSpinner from '../../components/LoadingSpinner'
import useRequest from '../../hooks/useRequest'
import getBook from '../../services/getBook'
import * as S from './book-details.style'
import SimilarBooks from '../../components/SimilarBooks'

interface Params {
    id: string
}

const BookDetailsPage: FunctionComponent = () => {
    const { id } = useParams<Params>()
    const { data: book, isLoading, error } = useRequest(() => getBook(id))

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error || !book) {
        return <ErrorMessage message='Failed to load book details!' />
    }

    return <S.BookDetailsPage>
        <S.Navigation>
            <Link to='/'>
                <S.Back>
                    <ArrowBack width={20} />
                </S.Back>
            </Link>
        </S.Navigation>
        <S.Container>
            <S.Card>
                <S.Image link={book.cover} />
            </S.Card>
            <S.Content>
                <S.Title>{book.title}</S.Title>
                <S.Details>
                    <Detail label='Written by' content={book.author} />
                    <Detail label='ISBN' content={book.isbn} />
                </S.Details>
                <SimilarBooks bookId={book.id} />
            </S.Content>
        </S.Container>
    </S.BookDetailsPage>

}

export default BookDetailsPage