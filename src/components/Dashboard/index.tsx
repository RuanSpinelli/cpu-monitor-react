import { CpuUsageCard } from "../CpuUsageCard";
import { ProcessListCard } from "../ProcessListCard";
import { DashboardContainer } from "./styles";

export function Dashboard() {
  return (
    <DashboardContainer>
      <CpuUsageCard />
      <ProcessListCard />
    </DashboardContainer>
  );
}
