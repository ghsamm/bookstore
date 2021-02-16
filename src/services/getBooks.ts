import axios from 'axios'
import Book from '../models/book'
import { API_URL } from './config'

type Res = { books: Book[] }

const getBooks = async () => {
    const res = await axios.get<Res>(API_URL)
    return res.data.books
}

export default getBooks