'use client' // Assuming you might have interactive elements

import React from 'react'
import Link from 'next/link'

function FullStackDevelopmentServicesPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Full-Stack Development Services
        </h1>

        <p className="text-gray-700 mb-8">
          Champions Consulting delivers comprehensive full-stack development
          services, building robust, scalable, and performant web applications
          tailored to your specific business needs. With expertise across both
          front-end and back-end technologies, we provide end-to-end solutions
          that drive innovation and efficiency.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">
            Our Full-Stack Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Front-End Development
              </h3>
              <p className="text-gray-700 mb-4">
                We create engaging and user-friendly interfaces using modern
                front-end frameworks and libraries.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li className="mb-2">
                  **React & Next.js:** Building dynamic single-page applications
                  and server-rendered web applications for optimal performance
                  and SEO.
                </li>
                <li className="mb-2">
                  **Typescript:** Ensuring code quality and maintainability with
                  strong typing.
                </li>
                {/* Add more front-end technologies as needed */}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Back-End Development
              </h3>
              <p className="text-gray-700 mb-4">
                We develop scalable and secure server-side logic to power your
                applications.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li className="mb-2">
                  **Node.js & Nestjs:** Building efficient and scalable APIs and
                  server-side applications.
                </li>
                <li className="mb-2">
                  **GraphQL & REST APIs:** Designing and implementing robust
                  data access layers.
                </li>
                {/* Add more back-end technologies as needed */}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">
            Our Full-Stack Development Process
          </h2>
          <p className="text-gray-700 mb-6">
            We follow a structured development process to ensure project
            success:
          </p>
          <ol className="list-decimal list-inside text-gray-700">
            <li className="mb-4">
              **Requirements Gathering:** We work closely with you to understand
              your business needs and project goals. (Based on &quot;Stakeholder
              Collaboration&quot; and &quot;Business Requirements Analysis&quot;
              from your resume)
            </li>
            <li className="mb-4">
              **Architecture & Design:** We design scalable and maintainable
              system architectures. (Based on your &quot;Architecture&quot;
              experience)
            </li>
            <li className="mb-4">
              **Development & Implementation:** We build high-quality code
              adhering to best practices. (Based on &quot;Full Stack
              Development&quot; responsibilities)
            </li>
            <li className="mb-4">
              **Testing & Quality Assurance:** We ensure robust functionality
              and performance through rigorous testing. (Based on &quot;Code
              Quality&quot; and &ldquo;Perfromance Optimisation&quot;)
            </li>
            <li className="mb-4">
              **Deployment & Maintenance:** We handle deployment and provide
              ongoing support. (Based on &quot;Vercel Deployment&quot; and
              &quot;Gooogle Cloud Management&quot;)
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">
            Why Choose Champions Consulting for Full-Stack Development?
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              **End-to-End Expertise:** We handle all aspects of your project,
              from front-end to back-end.
            </li>
            <li className="mb-2">
              **Scalability & Performance:** We build applications designed to
              grow and perform under high load.
            </li>
            <li className="mb-2">
              **Modern Technologies:** We utilize the latest tools and
              frameworks for efficient development.
            </li>
            <li className="mb-2">
              **Clean & Maintainable Code:** We prioritize code quality and
              maintainability for long-term success.
            </li>
            <li className="mb-2">
              **Collaborative Approach:** We work closely with you throughout
              the development lifecycle.
            </li>
          </ul>
        </section>

        <section className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-gray-700 mb-8">
            Contact us to discuss your full-stack development needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md font-semibold"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </section>
  )
}

export default FullStackDevelopmentServicesPage
