import type { Metadata } from 'next';
import { Bodoni_Moda, Inter_Tight } from 'next/font/google';
import './globals.css';
const editorial = Bodoni_Moda({
  variable: '--font-editorial',
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
});
const interfaceFont = Inter_Tight({
  variable: '--font-interface',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
const title = 'Malvadex | Streetwear em Vila Velha';
const description =
  'Conheça a Malvadex em Vila Velha. Streetwear, peças selecionadas e loja física no IBES. Veja nossas peças e fale com a gente pelo WhatsApp.';
export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(
    'https://vista-malvadex.profissionalpulseads.chatgpt.site',
  ),
  icons: {
    icon: [{ url: '/favicon-mvdx.png', type: 'image/png', sizes: '512x512' }],
    apple: '/favicon-mvdx.png',
  },
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Malvadex',
  },
  twitter: { card: 'summary', title, description },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={editorial.variable + ' ' + interfaceFont.variable}>
        {children}
      </body>
    </html>
  );
}

