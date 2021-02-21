import Book from '../models/book'
import getBooks from './getBooks'

const initalPattern = /^(mrs?|dr|prof)./i

const normalizeAuthorName = (author: string) => {
    return author
        .replace(initalPattern, '')
        .toLowerCase()
        .trim()
}

// since we do not have an API endpoint, I have to refetch the whole list
const getSimilarBooks = async (id: string): Promise<Book[]> => {
    const books = await getBooks()
    const currentBook = books.find(book => book.id === id)

    if (!currentBook) {
        return []
    }
    return books.filter(book => {
        return normalizeAuthorName(book.author) === normalizeAuthorName(currentBook.author)
            && book.id !== currentBook.id
    }
    )
}

export default getSimilarBooks