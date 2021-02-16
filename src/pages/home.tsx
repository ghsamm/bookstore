import React, { FunctionComponent, useEffect, useState } from 'react'
import BookCardList from '../components/BookCardList'
import ErrorMessage from '../components/ErrorMessage'
import Book from '../models/book'
import getBooks from '../services/getBooks'

const HomePage: FunctionComponent = () => {
    const [books, setBooks] = useState<Book[]>([])
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        (async () => {
            try {
                const newBooks = await getBooks()
                setBooks(newBooks)
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err)
                }
            }
        })()
    }, [])

    if (error) {
        return <ErrorMessage message='Failed to load list of books!' />
    }

    return <div>
        <BookCardList books={books} />
    </div>
}

export default HomePage