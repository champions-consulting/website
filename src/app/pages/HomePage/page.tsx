'use client'

import React from 'react'
import Link from 'next/link'
import ClientLogos from './ClientLogos'

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
              Champions Consulting is a collective of senior engineers,
              architects, and technology leaders with deep expertise in
              delivering scalable full-stack solutions. We bring a strategic
              blend of hands-on development experience and high-level
              architectural guidance.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                16+ years of full-stack engineering experience across the team
              </li>
              <li>
                13+ years leading technical teams and managing engineering
                departments
              </li>
              <li>
                Proven success in remote-first B2B engagements for over 6 years
              </li>
              <li>
                CTO-level leadership on scaling teams and delivery in companies
                of 25+ employees
              </li>
              <li>Multiple Staff Engineer and Engineering Manager tenures</li>
              <li>
                Extensive track record in software architecture and tech
                leadership roles
              </li>
              <li>
                Contributors to open-source initiatives including Mozilla
                Foundation and XState
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              Our Edge
            </h3>
            <p className="text-gray-700">
              We&apos;re not just implementers—we partner with your team to
              define technical direction, improve development workflows, and
              ensure delivery of complex systems with precision and quality.
            </p>
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

      <ClientLogos />

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
