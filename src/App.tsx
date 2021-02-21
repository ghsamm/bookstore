import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import BookDetailsPage from './pages/book-details';
import HomePage from './pages/home';
import fromTheme from './style/fromTheme';

const S = {
  App: styled.div`
    font-size: 14px;
    color: ${fromTheme(t => t.colors.text)};
    max-width: 800px;
    margin: auto;
  `
}

function App() {
  return (
    <S.App>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/books/:id'>
          <BookDetailsPage />
        </Route>
      </Switch>
    </S.App>
  );
}

export default App;
