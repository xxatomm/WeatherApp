import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={geist.className}>
      <body>
        {children}
      </body>
    </html>
  );
}