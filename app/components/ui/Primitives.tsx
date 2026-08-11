import Link from "next/link";
import { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) { return <div className={`container ${className}`}>{children}</div>; }
export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p>; }
export function SectionHeading({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: { label: string; href: string } }) {
  return <div className="section-heading"><div>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2></div>{action && <Link className="text-link" href={action.href}>{action.label} <span>↗</span></Link>}</div>;
}
export function ButtonLink({ href, children, variant = "dark" }: { href: string; children: ReactNode; variant?: "dark"|"light"|"outline" }) { return <Link href={href} className={`button button-${variant}`}>{children}<span aria-hidden>↗</span></Link>; }
export function Price({ value }: { value: number }) { return <span>₦{Math.round(value * 1600).toLocaleString()}</span>; }
