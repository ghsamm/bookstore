import React, { FunctionComponent, useEffect, useState } from 'react'
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
        return <div>
            Error: {error.message}
        </div>
    }

    return <div>
        <pre>
            {JSON.stringify(books, null, 2)}
        </pre>
    </div>
}

export default HomePage