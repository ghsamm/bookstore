import React, { FunctionComponent } from 'react'
import BookCardList from '../components/BookCardList'
import ErrorMessage from '../components/ErrorMessage'
import useRequest from '../hooks/useRequest'
import getBooks from '../services/getBooks'





const HomePage: FunctionComponent = () => {
    const { data: books, isLoading, error } = useRequest(getBooks)

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error || !books) {
        return <ErrorMessage message='Failed to load list of books!' />
    }

    return <div>
        <BookCardList books={books} />
    </div>
}

export default HomePage