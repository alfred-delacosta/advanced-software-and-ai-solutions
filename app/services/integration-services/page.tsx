import IntegrationServicesPage from "@/components/IntegrationServicesPage";
import { integrationServices } from "@/data/integrationServices";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: integrationServices.seoTitle,
  description: integrationServices.seoDescription,
  path: integrationServices.path,
});

export default function Page() {
  return <IntegrationServicesPage />;
}
