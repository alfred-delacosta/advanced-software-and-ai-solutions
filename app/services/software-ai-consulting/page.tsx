import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const slug = "software-ai-consulting";
const service = getServiceBySlug(slug);

export const metadata = buildMetadata({
  title: service?.seoTitle.replace(" | Advanced Software and AI Solutions", "") ?? "Service",
  description: service?.seoDescription ?? "",
  path: `/services/${slug}`,
});

export default function Page() {
  const data = getServiceBySlug(slug);
  if (!data) notFound();
  return <ServiceDetail service={data} />;
}
