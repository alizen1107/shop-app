import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Ticaret Mağazası',
  description: 'Modern e-ticaret mağazası',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex items-center">
                  <span className="text-xl font-bold">E-Mağaza</span>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/products" className="inline-flex items-center px-1 pt-1 text-gray-900">
                    Ürünler
                  </Link>
                  <Link href="/categories" className="inline-flex items-center px-1 pt-1 text-gray-900">
                    Kategoriler
                  </Link>
                  <Link href="/cart" className="inline-flex items-center px-1 pt-1 text-gray-900">
                    Sepetim
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white mt-auto">
          <div className="max-w-7xl mx-auto py-6 px-4">
            <p className="text-center">&copy; 2024 E-Mağaza. Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 