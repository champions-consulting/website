import React from 'react'
import ContactPage from './ContactPage'
import {Metadata} from 'next'
import generateMetadata from '@/utils/seo/metadata'
import seo from './seo'

export const metadata: Metadata = generateMetadata(seo)

export default function Contact() {
  return <ContactPage />
}
