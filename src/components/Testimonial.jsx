import Profile from "../assets/ProfilePicture.jpg"
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineStarBorderPurple500, MdOutlineStarPurple500 } from "react-icons/md";

export default function Testimonial() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center text-center md:w-[700px]">
                    <span className="flex flex-col items-center">
                        <h1 className='heading2'>Testimonial</h1>
                        <h2 className='heading'>Making Food great again and again</h2>
                    </span>

                    <p className='paragraph mt-4'>
                        You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.
                    </p>
                </div>
                <div className="flex w-[500px] flex-col items-center gap-6 text-center mt-20 mb-20">

                    <img src={Profile} className="rounded-full w-[75px] h-[75px] object-cover" />

                    <div className="flex items-center gap-8">
                        <MdArrowBackIos className="text-5xl" />
                        <p className="paragraph mt-4">
                            You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.
                        </p>
                        <MdArrowForwardIos className="text-5xl" />
                    </div>

                    <span className="flex text-[28px] text-[#DC780B]">
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarBorderPurple500 />
                    </span>

                    <span>
                        <h1 className="text-2xl">Augusta W. Reynoso</h1>
                        <p className="paragraph">UI&UX DeSIGNER</p>
                    </span>

                </div>
            </div>
        </div>
    )
}
