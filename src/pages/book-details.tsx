import React, { FunctionComponent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import Book from '../models/book'
import getBook from '../services/getBook'

interface Params {
    id: string
}

const BookDetailsPage: FunctionComponent = () => {
    const [book, setBook] = useState<Book | null>(null)
    const [error, setError] = useState<Error | null>(null)

    const { id } = useParams<Params>()

    useEffect(() => {
        (async () => {
            try {
                const newBook = await getBook(id)
                if (!newBook) {
                    throw new Error()
                }
                setBook(newBook)
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err)
                    return
                }
                throw err
            }
        })()
    }, [id])

    if (error) {
        return <ErrorMessage message='Failed to load book details!' />
    }

    return <div>
        <pre>
            {JSON.stringify(book, null, 2)}
        </pre>
    </div>

}

export default BookDetailsPage