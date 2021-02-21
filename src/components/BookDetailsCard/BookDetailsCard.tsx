import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Book from '../../models/book'
import BaseCard from '../BaseCard'
import BaseImage from '../BaseImage'

interface Props {
    book: Book
}

const S = {
    BookDetailsCard: styled(BaseCard)`
        max-width: 500px;
        aspect-ratio: 2 / 3;
        max-height: 600px;
    `,
    Image: styled(BaseImage)`
        flex: 1;
    `
}

const BookDetailsCard: FunctionComponent<Props> = ({ book }) => {

    return <S.BookDetailsCard>
        <S.Image link={book.cover} />
    </S.BookDetailsCard>
}

export default BookDetailsCard