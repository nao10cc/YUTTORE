import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'ゆっとれ！- 運動習慣、ゆるっと始めよう！',
  description: '忙しい方でも無理なく続けられる、オンライントレーニングサービス',
  icons: {
    icon: '/images/favicon.png',
  },
  openGraph: {
    title: 'ゆっとれ！- 運動習慣、ゆるっと始めよう！',
    description: '忙しい方でも無理なく続けられる、オンライントレーニングサービス',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'ゆっとれ！オンライントレーニング',
      }
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ゆっとれ！- 運動習慣、ゆるっと始めよう！',
    description: '忙しい方でも無理なく続けられる、オンライントレーニングサービス',
    images: ['/images/hero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=M+PLUS+Rounded+1c:wght@400;700&display=swap" rel="stylesheet" />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q17C2FXJNH" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q17C2FXJNH');
          `}
        </Script>
      </head>
      <body>
        <div id="wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
