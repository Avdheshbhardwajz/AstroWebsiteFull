import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1a0b2e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Astrowallas</h3>
            <p className="text-sm">
              Discover the power of prediction with Astrowallas. Learn Vedic Astrology, Tarot, Numerology, and Face Reading from expert Dr. Sugandha Rawat.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-purple-400 transition-colors">Courses</Link></li>
              <li><Link href="/consultations" className="hover:text-purple-400 transition-colors">Consultations</Link></li>
              <li><Link href="/blog" className="hover:text-purple-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm">
              123 Astro Street, Cosmic City<br />
              Universe, 12345<br />
              Phone: +1 (123) 456-7890<br />
              Email: info@astrowallas.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-purple-400 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-purple-400 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-purple-400 transition-colors"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2023 Astrowallas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

