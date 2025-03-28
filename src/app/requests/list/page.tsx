import { whitelabel } from "@/application/whitelabel";
import { RequestGridPage } from "@/slices/appointments/screens/request/list/grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${whitelabel.systemName} | Solicitações`,
  description: `Página de listagem de solicitações do ${whitelabel.systemName}. Aqui você pode ver as solicitações em lista infinita.`,
};
export default RequestGridPage;
