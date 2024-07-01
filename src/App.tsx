import {useState} from 'react';

import style from './style/app.module.scss';
import Header from './components/Header/Header';
import Container from './components/Container/Container';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Container />
    </div>
  );
}

export default App;
