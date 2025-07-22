import { useEffect, useState } from "react";
import  api  from "../services/api";

type CpuData = {
  cpuUsage: number;
};

export function useCpuUsage() {
  const [data, setData] = useState<CpuData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/cpu-usage");
        console.log("Resposta da API:", response.data);
        setData({ cpuUsage: response.data.cpuLoadPercent });
        setError(false);
      } catch (err) {
        console.error("Erro ao carregar CPU:", err);
        setError(true);
      }
    };

    // Chama imediatamente ao montar
    fetchData();

    // E depois de 2 em 2 segundos
    const interval = setInterval(fetchData, 1000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  return { data, error };
}
