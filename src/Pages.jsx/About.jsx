import React from 'react'
import AboutHeader from '../Component.jsx/AboutHeader'
import AboutSection from '../Component.jsx/AboutSection'
import HelpfulDetailsSection from '../Component.jsx/HelpfulDetailsSection'
import CoreValues from '../Component.jsx/CoreValues'
import PhotoGallery from '../Component.jsx/PhotoGallery'
import CtaBannerSection from '../Component.jsx/CtaBannerSection'

const About = () => {
  return (
    <div>
        <AboutHeader />
        <AboutSection />
        <CoreValues />
        <HelpfulDetailsSection />
        <PhotoGallery/>
        <CtaBannerSection/>
    </div>
  )
}

export default About