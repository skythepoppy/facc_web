import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Filipino Catholic Community - Austin",
  description: "Showcasing events, news, and about the Filipino Catholic community in Austin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800`}
      >
        {/* Navbar */}
        <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">FACC Austin</div>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
              <li><Link href="/events" className="hover:text-yellow-300">Events</Link></li>
              <li><Link href="/news" className="hover:text-yellow-300">News</Link></li>
              <li><Link href="/volunteer" className="hover:text-yellow-300">Volunteer</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-700 text-center py-6 mt-12 border-t">
          Filipino Austin Catholic Community © 2025 | Austin, TX
        </footer>
      </body>
    </html>
  );
}
