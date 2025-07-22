import  { useProcessList } from "../../hooks/useTopProcesses";
import {
  Container,
  Title,
  Table,
  HeaderRow,
  Row,
  Cell,
} from "./styles";

export function ProcessListCard() {
  const { data, error } = useProcessList();

  return (
    <Container>
      <Title>Top Processos</Title>
      {error ? (
        <p>Erro ao carregar</p>
      ) : data.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <Table>
          <HeaderRow>
            <Cell>PID</Cell>
            <Cell>Nome</Cell>
            <Cell>CPU (%)</Cell>
            <Cell>Memória (MB)</Cell>
          </HeaderRow>
          {data.map((proc) => (
            <Row key={proc.pid}>
              <Cell>{proc.pid}</Cell>
              <Cell>{proc.name}</Cell>
              <Cell>{proc.cpuLoadPercent.toFixed(1)}</Cell>
              <Cell>{(proc.memoryBytes / (1024 * 1024)).toFixed(1)}</Cell>
            </Row>
          ))}
        </Table>
      )}
    </Container>
  );
}
