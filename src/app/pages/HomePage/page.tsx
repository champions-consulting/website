'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl">
            Full-Stack Solutions for the Future
          </h1>
          <p className="text-lg md:text-xl mb-12">
            We empower businesses with cutting-edge software, from dynamic web
            applications to robust blockchain solutions and intelligent AI
            integrations.
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
            <Link
              href="/contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md font-semibold mb-4 md:mb-0"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/full-stack-development-services"
              className="inline-block bg-transparent hover:bg-gray-800 text-white py-3 px-8 rounded-md font-semibold border border-white"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              About Champions Consulting
            </h2>
            <p className="text-gray-700 mb-6">
              Champions Consulting brings together a team of experienced
              developers, led by Dimitar Danailov, a seasoned full-stack
              engineer with over 15 years of experience. We combine the agility
              of a focused team with the strategic vision of enterprise-level
              consulting.
            </p>
            <p className="text-gray-700">
              Champions Consulting provides high-level software architecture and
              technical guidance, leveraging a proven track record of optimizing
              development processes and delivering complex solutions.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about-us.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
            Our Key Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                Web Application Development
              </h3>
              <p className="text-gray-700">
                Building dynamic and scalable web applications using React,
                Next.js, Node.js, and cutting-edge technologies.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                Blockchain Solutions
              </h3>
              <p className="text-gray-700">
                Developing secure and transparent blockchain applications and
                integrations for various industries.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                AI Integration
              </h3>
              <p className="text-gray-700">
                Implementing AI-powered features and solutions to automate
                processes and gain valuable insights.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                Software Architecture
              </h3>
              <p className="text-gray-700">
                Designing robust and scalable software architectures to ensure
                long-term project success.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                Agile Team Augmentation
              </h3>
              <p className="text-gray-700">
                Providing skilled developers to seamlessly integrate with your
                existing agile teams.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">
                DevOps & Cloud Solutions
              </h3>
              <p className="text-gray-700">
                Streamlining development and deployment processes with DevOps
                practices and cloud expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
            Trusted By Leading Organizations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-32 h-20 flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <Image
                src="/images/siemens_logo.png"
                alt="Siemens"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="w-32 h-20 flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <Image
                src="/images/redcross_logo.png"
                alt="Red Cross"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="w-32 h-20 flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <Image
                src="/images/occrp_logo.png"
                alt="OCCRP"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="w-32 h-20 flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <Image
                src="/images/fan3_logo.png"
                alt="fan3.io"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="w-32 h-20 flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <Image
                src="/images/collinson_logo.png"
                alt="Collinson Group"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Ready to Build the Future Together?
          </h2>
          <p className="text-lg mb-12">
            Let&lsquo;s discuss your project and explore how our expertise can
            drive your success.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
