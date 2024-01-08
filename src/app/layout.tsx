import { Inter } from 'next/font/google'
import NavBar from "@/app/_components/nav/NavBar";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
        {children}
      </body>
    </html>
  )
}
