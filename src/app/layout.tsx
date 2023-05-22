import './globals.css';
import {Inter} from 'next/font/google';
import {Providers} from "@/app/providers";

const inter = Inter({subsets: ['latin']});

export const metadata = {
    title: 'Polygon',
    description: 'Stocks statistics app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} p-8`}>
            <Providers>
                {children}
            </Providers>
        </body>
        </html>
    )
}
