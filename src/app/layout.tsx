import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: { default: 'Goh Chun Teck' },
    description: "Homepage for Goh Chun Teck's website",
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript', 'Typescript'],
    authors: [{ name: 'Goh Chun Teck' }],
    colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="dracula">
            <head>
                <script
                    defer
                    src="https://kit.fontawesome.com/42adea93eb.js"
                    crossOrigin="anonymous"
                ></script>
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
