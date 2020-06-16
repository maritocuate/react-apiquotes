import React from 'react';
import styled from '@emotion/styled'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color:white;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border:2px solid black;
`;

function App() {

  const consultarApi = async () => {
    const consulta = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const respuesta = await consulta.json()

    console.log(respuesta[0].quote)
  }

  return (
    <Contenedor>
      <Boton onClick={consultarApi}>Obtener frase</Boton>
    </Contenedor>
  );
}

export default App;
