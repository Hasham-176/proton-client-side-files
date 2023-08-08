import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import OurServices from './components/OurServices'
import OurProjects from './components/OurProjects'
import ContactUs from './components/ContactUs'
import Reviews from './components/Reviews'
import BlogSection from './components/BlogSection'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <main
        className='
            flex
            flex-col
            w-full
        '
    >
      <Helmet>
          <meta name="description" content="Your all in one solutions"/>
        <meta http-equiv='content-language' content='en-us'/>
        {/* canocial tag */}
        <link rel="canonical" href="https://www.protontechnologies.com.pk/" />
        {/* og tag */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" Web Design Agency & Website Development Company | Proton Technologies" />
        <meta property="og:description" content="Your trusted partner for Cutting-Edge Web Solutions. We provide Website Design, Web Development, Hosting & Digital Marketing. Transform your online presence with us" />
        <meta property="og:url" content="https://www.protontechnologies.com.pk/" />
        <meta property="og:image" content="https://www.protontechnologies.com.pk/logo.png" />
        <meta property="og:image:width" content="880" />
        <meta property="og:image:height" content="660" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="protontechnologies" />
        {/* twitter tag */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="https://www.protontechnologies.com.pk/"/>
        <meta name="twitter:creator" content="@ProtonTechnologies"/>
        <meta name="twitter:title" content=" Web Design Agency & Website Development Company | Proton Technologies"/>
        <meta name="twitter:description" content="Your trusted partner for Cutting-Edge Web Solutions. We provide Website Design, Web Development, Hosting & Digital Marketing. Transform your online presence with us"/>
        <meta name="twitter:image" content="https://www.protontechnologies.com.pk/logo.png" />
        {/* robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet: -1" />
        <meta name="bingbot" content="index, follow, max-snippet: -1 " />
      </Helmet>
        <HeroSection />
        <AboutSection />
        <OurServices />
        <OurProjects />
        <Reviews />
        <BlogSection />
        <ContactUs />
    </main>
  )
}

export default Home