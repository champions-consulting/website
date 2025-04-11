import HomePage from './pages/HomePage/page'

import {Metadata} from 'next'

import generateMetadata from '@/utils/seo/metadata'

import seo from '@/app/pages/HomePage/seo'

export const metadata: Metadata = generateMetadata(seo)

export default function Home() {
  return <HomePage />
}
