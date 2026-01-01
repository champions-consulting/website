'use client'

import React from 'react'
import Link from 'next/link'

function ContactPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-8 text-gray-900">
            Let&lsquo;s Discuss Your Project
          </h1>
          <p className="text-gray-700 mb-6">
            Ready to take your software development to the next level? Contact
            Champions Consulting to discuss your project needs and discover how
            our expertise can drive your success.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">
              Why Contact Champions Consulting?
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">
                <strong>Expert Solutions:</strong> Benefit from 15+ years of
                full-stack experience delivering high-quality B2B software.
              </li>
              <li className="mb-2">
                <strong>Agile Delivery:</strong> Experience efficient project
                execution with our agile development methodologies.
              </li>
              <li className="mb-2">
                <strong>Scalable Teams:</strong> Get the right team size (2-10
                developers) to match your project&lsquo;s scope and scale.
              </li>
              <li className="mb-2">
                <strong>Cutting-Edge Tech:</strong> Leverage our expertise in
                React, Next.js, Node.js, Blockchain, and AI for future-proof
                solutions.
              </li>
              <li className="mb-2">
                <strong>Proven Results:</strong> Improve your project delivery
                timelines and achieve your business objectives with confidence.
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              We&lsquo;re eager to hear from you. Reach out to us through the
              following channels:
            </p>
            <p className="text-gray-700 mb-2">
              Email:{' '}
              <Link
                href="mailto:ddanailov@champions.consulting"
                className="text-blue-500 hover:underline"
              >
                ddanailov@champions.consulting
              </Link>
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg"></div>
      </div>
    </section>
  )
}

export default ContactPage
