import IphoneImage from '../assets/IphoneScreen.jpg'
import { FaAppStore } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

export default function TakeAway() {
  return (
    <div className='md:flex justify-between items-center gap-10 paddingY-2 py-20 bg-[#fcf2e7]'>
      <div className='flex flex-col gap-6 md:w-[500px]'>
        <span>
          <h1 className='heading2'>Take away</h1>
          <h2 className='heading'>Food Stalls with Persons but  to  Product marketing plane. </h2>
        </span>
        <p className='paragraph'>
          There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.
        </p>

        <span className='flex gap-4 mt-4 pb-10'>
          <button className='hover:scale-105 flex justify-center items-center gap-2 rounded-3xl border-2 active:scale-95 px-5 py-2 bg-black w-[160px] text-white'><FaAppStore />App Store</button>
          <button className='hover:scale-105 flex justify-center items-center gap-2 rounded-3xl border-2 active:scale-95 px-5 py-2 bg-white w-[160px]'><FaGooglePlay />Google Play</button>
        </span>
      </div>

      <img src={IphoneImage} className='md:w-[600px] rounded-3xl' />
    </div>
  )
}
