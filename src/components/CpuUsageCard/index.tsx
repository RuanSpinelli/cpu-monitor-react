import { useCpuUsage } from "../../hooks/useCpuUsage";
import { Title, Container, Usage, Content} from "../CpuUsageCard/styles";

export function CpuUsageCard() {
  const { data, error } = useCpuUsage(); // <-- desestruturação correta aqui

  return (
    <Container>
      <Title>Uso da CPU</Title>
      <Usage>
        <Content>
        {error
          ? "Erro ao carregar"
          : data?.cpuUsage !== undefined
          ? `${data.cpuUsage.toFixed(2)}%`
          : "Carregando..."}
        </Content>
      </Usage>
    </Container>
  );
}
