import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';

const publicSans = Public_Sans({
  variable: "--public-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ioTask",
  description: "Project Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.classNames} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
