import Link from "next/link";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={service.href} className="card" style={{ display: "block", height: "100%" }}>
      <p className="eyebrow">{service.shortTitle}</p>
      <h3 className="h3">{service.title}</h3>
      <p className="muted" style={{ margin: 0 }}>{service.summary}</p>
    </Link>
  );
}
