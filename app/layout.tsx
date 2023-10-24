import type { Metadata } from 'next';
import { Providers } from "./providers";
import './globals.css'

export const metadata: Metadata = {
  title: 'Matheus Willock',
  description: 'Matheus Willock Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}


