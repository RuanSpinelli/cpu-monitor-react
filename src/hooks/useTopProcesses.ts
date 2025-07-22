import { useEffect, useState } from "react";
import axios from "axios";

export interface ProcessData {
  pid: number;
  name: string;
  cpuLoadPercent: number;
  memoryBytes: number;
}

export function useProcessList() {
  const [data, setData] = useState<ProcessData[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      axios.get<ProcessData[]>("http://localhost:8080/top-processes") // ajuste o endpoint
        .then((res) => {
          console.log("Processos:", res.data);
          setData(res.data);
          setError(false);
        })
        .catch((err) => {
          console.error("Erro ao buscar processos:", err);
          setError(true);
        });
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  return { data, error };
}
