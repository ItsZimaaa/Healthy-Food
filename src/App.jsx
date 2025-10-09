import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import TakeAway from "./components/TakeAway";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="w-[80%] mx-auto"> 
      <Navbar />

      <div>
        <Home />
      </div>

      <div className="flex flex-col items-center">
        <Features />
      
      </div>

      <div>
        <AboutUs />
      </div>

      <div>
        <Menu />
      </div>

      <div>
        <TakeAway />
      </div>

      <div>
        <Testimonial />
      </div>

      <div>
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  )
}
