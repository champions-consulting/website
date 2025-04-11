import React from 'react'
import FullStackDevelopmentServicesPage from './ServicesPage'
import {Metadata} from 'next'
import generateMetadata from '@/utils/seo/metadata'
import seo from './seo'

export const metadata: Metadata = generateMetadata(seo)

export default function FullStackDevelopmentServices() {
  return <FullStackDevelopmentServicesPage />
}
