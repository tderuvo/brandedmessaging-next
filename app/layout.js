import './globals.css';
import Nav    from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title:       'Branded Messaging',
  description: 'The human-friendly side of RCS — verified, rich, branded business messaging across North America.',
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
