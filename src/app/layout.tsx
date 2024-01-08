import { Inter } from 'next/font/google'
import NavBar from "@/app/_components/nav/NavBar";
import {Spinner} from "react-bootstrap";
import {Suspense} from "react";

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
      <Suspense fallback={<Spinner animation={"border"}/>}>
          {children}
      </Suspense>
      </body>
    </html>
  )
}
