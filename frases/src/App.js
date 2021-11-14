import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './componentes/Frase';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 400px;
  font-family: Lucida casual;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size: 400;
  }

`;


function App() {

  const [ frase, guardarFrase ] = useState({});


  const consultarAPI = async () => {
    const api = await fetch('http://sunnyquotes.net/q.php?random');
    const frase = await api.json()
    guardarFrase(frase);
  }

  //Cargar una frase
  useEffect( () => {
    consultarAPI()
  }, []);

  return (
    <Container>
      <Frase 
        frase = {frase}
      />
      <Boton
        onClick={consultarAPI}  
      >
        Obtener frase
      </Boton>
    </Container>
  );
}

export default App;
