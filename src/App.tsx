import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import BookDetailsPage from './pages/book-details';
import HomePage from './pages/home';

const S = {
  App: styled.div`
    font-size: 14px;
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
