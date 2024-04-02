import Banner from '../components/landing-page/banner'
import PageIllustration from '../components/page-illustration'
import Hero from '../components/landing-page/hero'
import Features from '../components/landing-page/features'
import Zigzag from '../components/landing-page/zigzag'
import Header from '../components/landing-page/header'
import Footer from '../components/landing-page/footer'
import Newsletter from '@/components/landing-page/newsletter'

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