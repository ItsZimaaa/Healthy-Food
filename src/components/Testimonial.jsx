import Profile from "../assets/ProfilePicture.jpg"
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineStarBorderPurple500, MdOutlineStarPurple500 } from "react-icons/md";

export default function Testimonial() {
    return (
        <div>
            <div>
                <span>
                    <h1 className='heading2'>Testimonial</h1>
                    <h2 className='heading'>Making Food great again and again</h2>
                </span>

                <p className='paragraph mt-4'>
                    You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.
                </p>

                <img src={Profile} className="rounded-full w-[75px] h-[75px] object-cover" />

                <div>
                    <MdArrowBackIos />
                    <p className="paragraph mt-4">
                        You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.
                    </p>
                    <MdArrowForwardIos />
                </div>

                <span className="flex text-[28px] text-[#DC780B]">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                </span>

            </div>
        </div>
    )
}
