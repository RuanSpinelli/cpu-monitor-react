import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;          /* ativa flexbox */
  flex-direction: row;    /* alinha os filhos na horizontal */
  gap: 16px;              /* espaçamento entre os cards */
  flex-wrap: nowrap;      /* impede quebra de linha, tudo fica numa linha só */
  justify-content: center; /* começa alinhado à esquerda */
  align-items: center;      /* alinha o topo dos cards */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
