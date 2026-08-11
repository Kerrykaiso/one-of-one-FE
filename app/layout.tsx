import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "./components/QueryProvider";
import { SiteHeader } from "./components/layout/SiteHeader";
import { Footer } from "./components/layout/Footer";
import { CartProvider } from "./features/cart/CartContext";
export const metadata: Metadata = {
  title: { default: "One of One — Art Worth Wearing", template: "%s — One of One" },
  description: "Limited artist editions on premium garments. Original work, made wearable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider><CartProvider><SiteHeader/><main>{children}</main><Footer/></CartProvider></QueryProvider>
      </body>
    </html>
  );
}
