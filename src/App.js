import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import HotelCard from './components/HotelCard/HotelCard'
import City from './components/City/City'
import Footer from './components/Footer/Footer'
import Carousel from './components/Carousel/Carousel'
import HotelTheme from './components/HotelTheme/HotelTheme'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <HotelCard/>
    <City/>
    <Carousel/>
    <HotelTheme/>
    <Footer/>
    </div>
  );
}

export default App;
