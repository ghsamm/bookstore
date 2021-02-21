import Book from '../models/book'
import getBooks from './getBooks'

// since we do not have an API endpoint, I have to refetch the whole list
const getBooksByAuthor = async (author: string): Promise<Book[] | null> => {
    const books = await getBooks()
    return books.filter(book => book.author === author) || null
}

export default getBooksByAuthor