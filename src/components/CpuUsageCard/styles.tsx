

import styled from "styled-components";

export const Container = styled.div`
  

  
  background-color: rgb(176, 196, 204);
  padding: 16px;
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  width: 20%;
  min-width: 200px;
    

  height: 90%;
  
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 90%;      /* largura 100% em telas pequenas */
    height: auto;     /* altura automática para se ajustar */

  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 12px;
  color:rgb(32, 37, 49);
`;

export const Usage = styled.p`
  
  font-family: 'LCD Com', sans-serif;
  font-size: 2.5rem;                                    

  color:rgb(30, 236, 133);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  `;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:rgb(22, 27, 25);

    border-radius: 2rem;
    
    width: 20rem;
    height: 10rem;
    @media (max-width: 768px) {
    width: 90%;      /* largura 100% em telas pequenas */
    height: auto;     /* altura automática para se ajustar */

  }

`;