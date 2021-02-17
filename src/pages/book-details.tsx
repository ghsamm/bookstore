import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import useRequest from '../hooks/useRequest'
import getBook from '../services/getBook'

interface Params {
    id: string
}

const BookDetailsPage: FunctionComponent = () => {
    const { id } = useParams<Params>()
    const { data: book, isLoading, error } = useRequest(() => getBook(id))


    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error || !book) {
        return <ErrorMessage message='Failed to load book details!' />
    }

    return <div>
        <pre>
            {JSON.stringify(book, null, 2)}
        </pre>
    </div>

}

export default BookDetailsPage