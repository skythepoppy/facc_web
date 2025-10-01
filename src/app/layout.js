import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <header className="bg-blue-900 text-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">FACC Austin</div>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-yellow-300">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-300">About</a></li>
              <li><a href="/events" className="hover:text-yellow-300">Events</a></li>
              <li><a href="/news" className="hover:text-yellow-300">News</a></li>
              <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
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
