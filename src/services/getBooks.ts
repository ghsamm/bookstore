import axios from 'axios'
import Book from '../models/book'
import { API_URL } from './config'

const getBooks = async () => {
    const res = await axios.get<Book[]>(API_URL)
    return res.data
}

export default getBooks