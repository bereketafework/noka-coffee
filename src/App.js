import './App.css';
import About from './compenents/about/About';
import Header from './compenents/header/Header';
import Home from './compenents/home/Home';
import ContactUs from './compenents/contact-us/ContactUs';
import Gallery from './compenents/gallery/Gallery';
import Source from './compenents/source/Source';
import News from './compenents/news/News';
import Footer from './compenents/footer/Footer';



const App = ()=> {
  
  return (
   <>

   <Header />
   <main >
     <Home />
     <Source />
     <Gallery />
     {/* <News /> */}
     <About />
     <ContactUs />
     <Footer />
   </main>
   </>
  );
}

export default App;
