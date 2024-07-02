import './App.css'
import Navbar from '@/components/header/Navbar'
import Footer from './components/footer/Footer'
import Sliding from './components/dashboard/carousel/Carousel'
function App() {
  

  return (
    <div className='flex flex-col mx-auto'>
      <Navbar/>
      <Sliding/>
      <Footer/>
    </div>
  )
}

export default App
