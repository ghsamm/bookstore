import Book from '../models/book'
import getBooks from './getBooks'

// since we do not have an API endpoint, I have to refetch the whole list
const getBook = async (id: string): Promise<Book | undefined> => {
    const books = await getBooks()
    return books.find(book => book.id === id)
}

export default getBook