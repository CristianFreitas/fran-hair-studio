import { Geist } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Fran Hair Studio",
  description: "Seu espaço de beleza e transformação",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}