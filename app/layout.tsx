import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pixen-flow.dev'),
  title: {
    default: 'PixenFlow - World-Class React UI Components & Animations',
    template: '%s | PixenFlow'
  },
  description: 'Discover the ultimate collection of stunning, animated, and interactive React UI components. Build extraordinary user interfaces with our premium, fully customizable components powered by Three.js, Framer Motion, and modern web technologies.',
  keywords: [
    'react components',
    'ui components',
    'animated components',
    'interactive ui',
    'three.js',
    'framer motion',
    'component library',
    'design system',
    'web animations',
    'react animations',
    'ui kit',
    'frontend development',
    'modern ui',
    'glassmorphism',
    '3d components',
    'webgl components'
  ],
  authors: [{ name: 'PixenFlow Team' }],
  creator: 'PixenFlow',
  publisher: 'PixenFlow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixen-flow.dev',
    title: 'PixenFlow - World-Class React UI Components & Animations',
    description: 'Discover the ultimate collection of stunning, animated, and interactive React UI components. Build extraordinary user interfaces with premium, fully customizable components.',
    siteName: 'PixenFlow',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PixenFlow - Premium React UI Components',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixenFlow - World-Class React UI Components & Animations',
    description: 'Discover the ultimate collection of stunning, animated, and interactive React UI components.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
