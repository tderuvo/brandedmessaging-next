import './globals.css';
import Nav    from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://brandedmessaging.com'),
  title:       'Branded Messaging | The Human-Friendly Side of RCS',
  description: 'Learn how branded messaging helps businesses move beyond plain SMS with verified sender identity, rich customer experiences, campaign strategy, RCS, A2P messaging, and SMS fallback.',
  alternates: {
    canonical: 'https://brandedmessaging.com',
  },
  openGraph: {
    type:        'website',
    url:         'https://brandedmessaging.com',
    siteName:    'Branded Messaging',
    title:       'Branded Messaging | The Human-Friendly Side of RCS',
    description: 'Learn how branded messaging helps businesses move beyond plain SMS with verified sender identity, rich customer experiences, campaign strategy, RCS, A2P messaging, and SMS fallback.',
    locale:      'en_CA',
  },
  twitter: {
    card:        'summary_large_image',
    site:        '@brandedmsg',
    title:       'Branded Messaging | The Human-Friendly Side of RCS',
    description: 'Learn how branded messaging helps businesses move beyond plain SMS with verified sender identity, rich customer experiences, campaign strategy, RCS, A2P messaging, and SMS fallback.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
