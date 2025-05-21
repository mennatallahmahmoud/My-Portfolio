import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'], 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-roboto'
});

export const metadata = {
  title: "Mennat-Allah Portfolio",
  description: "Frontend Developer Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
