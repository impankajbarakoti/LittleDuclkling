import Navbar from './Component.jsx/Navbar'
import { Route,Routes } from 'react-router-dom'
import HomeSection from './Pages.jsx/HomeSection'
import Footer from './Component.jsx/Footer'
import Contact from './Pages.jsx/Contact'
import Services from './Pages.jsx/Services'
import About from './Pages.jsx/About'

const App = () => {
  return (
    <div> 
     
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App