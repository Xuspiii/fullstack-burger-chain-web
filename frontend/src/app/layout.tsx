import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burger Xusping",
  description: "Las mejores hamburguesas de mi casa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <div className="max-w-[1000px] mx-auto my-10">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
