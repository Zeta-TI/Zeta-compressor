import Banner from '../components/pages/landing-page/banner'
import PageIllustration from '../components/page-illustration'
import Hero from '../components/pages/landing-page/hero'
import Features from '../components/pages/landing-page/features'
import Zigzag from '../components/pages/landing-page/zigzag'
import Header from '../components/pages/landing-page/header'
import Footer from '../components/pages/landing-page/footer'
import Newsletter from '@/components/pages/landing-page/newsletter'

export default function Home() {

  return (
    <>
      <PageIllustration />
      <Header />
      <Hero />
      <Features />
      <Zigzag />
      <Newsletter />
      <Footer />
      <Banner />
    </>
  )
}