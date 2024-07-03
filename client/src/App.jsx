import './App.css'
import Navbar from '@/components/header/Navbar'
import Footer from './components/footer/Footer'
import Sliding from './components/dashboard/carousel/Carousel'
import Countup from './components/dashboard/countup/Countup'
function App() {
  

  return (
    <div className='flex flex-col mx-auto'>
      <Navbar/>
      <Sliding/>
      <Countup/>
      <Footer/>
    </div>
  )
}

export default App
