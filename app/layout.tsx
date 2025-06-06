import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NESTbio",
  description:
    "Transformando algas chlorella en energía sostenible para Marte y la Tierra. La biotecnología que cambiará el futuro de la humanidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
