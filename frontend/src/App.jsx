import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Services from "./components/Services"
import Teams from "./components/Teams"
import Testimonial from "./components/Testimonial"

function App() {

  return (
    <>
     <Navbar/>
     <Header/>
     <About/>
     <Services/>
     <Teams/>
     <Project/>
     <Testimonial/>
     <Blog/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
