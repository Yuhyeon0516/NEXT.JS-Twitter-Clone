import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'X. 무슨 일이 일어나고 있나요? /X',
    description: 'X. 무슨 일이 일어나고 있나요? /X',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div>{children}</div>
            </body>
        </html>
    );
}
