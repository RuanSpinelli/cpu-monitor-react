// ProcessListCard/styles.ts
import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(176, 196, 204);
  padding: 1rem;
  border-radius: 10px;
  
  overflow-x: auto;

   &:hover {
    transform: scale(1.02);
  }

    transition: transform 0.3s;
`;


export const Cell = styled.div`
  padding: 0.25rem ;

    
  background-color:rgb(32, 37, 49);
  @media (max-width: 600px) {
    &:before {
      content: attr(data-label) ": ";
      font-weight: bold;
      display: inline-block;
      width: 110px;
    }
    display: block;
  }
`;


export const Title = styled.h2`
  margin-bottom: 1rem;
  color:rgb(32, 37, 49);
  font-family: 'Roboto', sans-serif;

`;

export const Table = styled.table`
  width: 100%;

  font-family: 'Roboto', sans-serif;
  min-width: 500px; // Evita quebrar em telas muito pequenas
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color:rgb(61, 61, 97);
`;

export const Th = styled.th`

  text-align: left;
  padding: 0.5rem;
`;

export const Td = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #f1f8f6;
  }
`;

// Linha de cabeçalho
export const HeaderRow = styled.div`
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1.5fr 2fr;
  padding: 0.5rem;
  color:rgb(176, 196, 204);
  background-color: rgb(32, 37, 49);
  font-weight: bold;

  @media (max-width: 600px) {
    display: none;
  }
`;

// Linha de dados
export const Row = styled.div`
  display: grid;

  color:rgb(176, 196, 204);
  border-radius: 20rem;

  grid-template-columns: 1fr 2fr 1.5fr 2fr;
  padding: 0.5rem;


  @media (max-width: 600px) {
    display: block;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 1rem;
    background: #fff;
  }
`;