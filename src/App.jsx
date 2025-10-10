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
    <main>
      <Navbar />

      <Home />

      <Features />

      <AboutUs />

      <Menu />

      <TakeAway />

      <Testimonial />

      <Contact />

      <Footer />
    </main>
  )
}