import React from 'react';
import styled from 'styled-components';
import HomePage from './pages/home';

const S = {
  App: styled.div`
    font-size: 14px;
  `
}

function App() {
  return (
    <S.App>
      <HomePage />
    </S.App>
  );
}

export default App;
