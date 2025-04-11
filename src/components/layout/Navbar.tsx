import React from 'react'

import Link from 'next/link'

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Full-Stack Solutions
        </Link>
        <div>
          <Link
            href="/champions-consulting"
            className="mr-4 hover:text-blue-300"
          >
            Champions Consulting
          </Link>
          <Link href="/blog" className="mr-4 hover:text-blue-300">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
