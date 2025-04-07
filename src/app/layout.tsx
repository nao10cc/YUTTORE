import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ゆっとれ！- 運動習慣、ゆるっと始めよう！',
  description: '忙しい方でも無理なく続けられる、オンライントレーニングサービス',
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
      </head>
      <body>
        <div id="wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
