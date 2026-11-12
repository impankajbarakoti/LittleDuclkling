import HeroSection from '../Component.jsx/HeroSection'
import CoreValues from '../Component.jsx/CoreValues'
import InstitutionInfoAndServices from '../Component.jsx/InstitutionInfoAndServices'
import PhotoGallery from '../Component.jsx/PhotoGallery'
import GoogleReviews from '../Component.jsx/GoogleReviews'
import CtaBannerSection from '../Component.jsx/CtaBannerSection'

const HomeSection = () => {
  return (
    <div>
        <HeroSection/>
        <CoreValues/>
        <InstitutionInfoAndServices/>
        <PhotoGallery/>
        <GoogleReviews/>
        <CtaBannerSection/>
    </div>
  )
}

export default HomeSection