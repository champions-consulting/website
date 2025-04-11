import React from 'react'
import Image from 'next/image'

type ClientLogoProps = {
  src: string
  alt: string
  width?: number
  height?: number
  isPriority: boolean
  style?: React.CSSProperties
}

function ClientLogo({
  src,
  alt,
  width,
  height,
  isPriority,
  style,
}: ClientLogoProps) {
  return (
    <div
      className="w-32 h-20 flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
      style={style}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
        {...(isPriority ? {priority: true} : {loading: 'lazy'})}
      />
    </div>
  )
}

function ClientLogos() {
  const clients = [
    {
      index: 'siemens',
      name: 'Siemens Energy',
      logo: '/organizations/Siemens_Energy_logo.svg',
      width: 120,
      height: 60,
      isPriority: true,
      style: {width: '8rem', height: '5rem'},
    },
    {
      index: 'red-cross',
      name: 'Red Cross',
      logo: '/organizations/ICRC.svg',
      width: 60,
      height: 60,
      isPriority: false,
    },
    {
      index: 'occrp',
      name: 'OCCRP',
      logo: '/organizations/occrp.svg',
      width: 120,
      height: 120,
      isPriority: false,
    },
    {
      index: 'fan3',
      name: 'fan3.io',
      logo: '/organizations/fan3.svg',
      width: 120,
      height: 60,
      isPriority: false,
      style: {
        width: '5rem',
        height: '5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderRadius: '0.5rem',
        padding: '0.5rem',
      },
    },
    {
      index: 'collinson',
      name: 'Collinson Group',
      logo: '/organizations/collinson.svg',
      width: 120,
      height: 60,
      isPriority: false,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
          Trusted By Leading Organizations
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map(client => (
            <ClientLogo
              key={client.index}
              src={client.logo}
              alt={client.name}
              width={client.width}
              height={client.height}
              isPriority={client.isPriority}
              style={client.style}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
