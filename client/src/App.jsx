import './App.css'
import Navbar from '@/components/header/Navbar'
import Footer from './components/footer/Footer'
import Sliding from './components/dashboard/carousel/Carousel'
import Countup from './components/dashboard/countup/Countup'
import OurClient from './components/dashboard/customers/OurClient'
function App() {
  

  return (
    <div className='flex flex-col mx-auto'>
      <Navbar/>
      <Sliding/>
      <OurClient/>
      <Countup/>
      <Footer/>
    </div>
  )
}

export default App
