import Book from '../models/book'
import getBooks from './getBooks'

// since we do not have an API endpoint, I have to refetch the whole list
const getBook = async (id: string): Promise<Book | null> => {
    const books = await getBooks()
    return books.find(book => book.id === id) || null
}

export default getBook