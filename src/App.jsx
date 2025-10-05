import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import TakeAway from "./components/TakeAway";

export default function App() {
  return (
    <main className="w-[80%] mx-auto">
      <Navbar />

      <div>
        <Home />
      </div>

      <div className="flex flex-col items-center my-20">
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
    </main>
  )
}
