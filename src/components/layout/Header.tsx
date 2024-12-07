// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Button } from "@/components/ui/button"
// import { Menu, X } from 'lucide-react'

// const navItems = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Courses', href: '/courses' },
//   { name: 'Consultations', href: '/consultations' },
//   { name: 'Contact', href: '/contact' },
// ]

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="bg-[#1a0b2e] text-white">
//       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <Link href="/">
//             <Image src="/logo.png" alt="Astrowallas Logo" width={150} height={50} />
//           </Link>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           {navItems.map((item) => (
//             <Link key={item.name} href={item.href} className="hover:text-purple-400 transition-colors">
//               {item.name}
//             </Link>
//           ))}
//         </div>
//         <div className="hidden md:block">
//           <Button className="bg-purple-600 hover:bg-purple-700">Book a Consultation</Button>
//         </div>
//         <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </nav>
//       {mobileMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 hover:text-white transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <div className="px-3 py-2">
//               <Button className="w-full bg-purple-600 hover:bg-purple-700">Book a Consultation</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from 'lucide-react'

const mainNavItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

const policyNavItems = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-conditions' },
  { name: 'Refund Policy', href: '/refund-policy' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [policyMenuOpen, setPolicyMenuOpen] = useState(false)

  return (
    <header className="relative z-50 w-full bg-[#1a0b2e] backdrop-blur-sm text-white">
      <nav className="container mx-auto px-4 py-1 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/Logo.png" alt="Astrowallas Logo" width={100} height={50} />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {mainNavItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="hover:text-purple-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Policies Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPolicyMenuOpen(!policyMenuOpen)}
              className="flex items-center space-x-1 hover:text-purple-400 transition-colors"
            >
              <span>Policies</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${policyMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {policyMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-[#2d1b4e] rounded-md shadow-lg py-1">
                {policyNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-purple-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:block">
          <Button className="bg-purple-600 hover:bg-purple-700">
            Book a Consultation
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2d1b4e]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="px-3 py-2 space-y-1">
              <div className="text-sm font-medium text-gray-400">Policies</div>
              {policyNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium hover:bg-purple-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="px-3 py-2">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}