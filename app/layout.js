import './globals.css';
import Nav    from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://brandedmessaging.com'),
  title:       'Branded Messaging | The Human-Friendly Side of RCS',
  description: 'Independent insights on branded messaging, RCS, and A2P messaging strategy across North America — with a special focus on the Canadian market. Verified sender identity, rich customer experiences, and campaign guides for US and Canadian businesses.',
  alternates: {
    canonical: 'https://brandedmessaging.com',
  },
  openGraph: {
    type:        'website',
    url:         'https://brandedmessaging.com',
    siteName:    'Branded Messaging',
    title:       'Branded Messaging | The Human-Friendly Side of RCS',
    description: 'Independent insights on branded messaging, RCS, and A2P messaging strategy across North America — with a special focus on the Canadian market.',
    locale:      'en_CA',
  },
  twitter: {
    card:        'summary_large_image',
    site:        '@brandedmsg',
    title:       'Branded Messaging | The Human-Friendly Side of RCS',
    description: 'Independent insights on branded messaging, RCS, and A2P messaging strategy across North America — with a special focus on the Canadian market.',
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
