type DateString = string
type UrlString = string

interface Book {
    id: string
    cover: UrlString
    isbn: string
    title: string
    subtitle: string
    author: string
    published: DateString
    publisher: string
    pages: number
    description: string
    website: UrlString
}

export default Book