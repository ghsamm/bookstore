import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowBack } from '@styled-icons/material/ArrowBack'

import BaseCard from '../components/BaseCard'
import BaseImage from '../components/BaseImage'
import Detail from '../components/Details'
import ErrorMessage from '../components/ErrorMessage'
import Link from '../components/Link'
import LoadingSpinner from '../components/LoadingSpinner'
import useRequest from '../hooks/useRequest'
import getBook from '../services/getBook'

const S = {
    BookDetailsPage: styled.div``,
    Navigation: styled.div`
        margin: 20px;
        display: flex;
    `,
    Back: styled.div`
        padding: 10px 15px;
        &:hover {
            background-color: rgba(0,0,0,0.01);
        }
    `,
    Container: styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin: 10px;
    `,
    Card: styled(BaseCard)`
        display: grid;
        flex-basis: 300px;
        min-height: 300px;
        aspect-ratio: 2/3;
    `,
    Image: BaseImage,
    Content: styled.div``,
    Title: styled.h2``,
    Details: styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
    `
}

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
            </S.Content>
        </S.Container>
    </S.BookDetailsPage>

}

export default BookDetailsPage