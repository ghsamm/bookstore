import React, { FunctionComponent } from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'
import Book from '../../models/book';
import BookCard from './BookCard';
import { ThemeProvider } from 'styled-components';
import theme from '../../style/theme';


const Wrapper: FunctionComponent = ({ children }) => {
    return <MemoryRouter>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </MemoryRouter>
}

it('renders correctly', () => {

    const book: Partial<Book> = {
        id: '97978',
        cover: 'https://picsum.photos/640/480/?image=1000',
        title: 'Book of the year',
        author: 'Some one'
    }

    const tree = renderer
        .create(<Wrapper><BookCard book={book as Book} /></Wrapper>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});