import type { Metadata } from 'next';
import '@/styles/globals.css';
import { getRandomSplashArt } from '@/helpers';

export const metadata: Metadata = {
  title: 'League of Legends',
  description: 'League of Legends | Client',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 w-full h-full">
        <div
          style={{ backgroundImage: `url(${getRandomSplashArt('StarGuardian').src})` }}
          className="bg-cover bg-no-repeat"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
