import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Calculator from './components/Calculator';

function App() {
  return (
    <>
      <Container>
        <Header/>
        <Calculator/>
      </Container>
    </>
  );
}

export default App;
