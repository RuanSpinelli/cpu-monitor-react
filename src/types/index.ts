// src/types/index.ts
export interface CPUUsageDTO {
  cpuUsagePercent: number;
}

export interface ProcessInfoDTO {
  pid: number;
  name: string;
  cpuLoadPercent: number;
  memoryBytes: number;
}
