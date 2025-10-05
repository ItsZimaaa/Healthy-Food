import aboutUs from '../assets/aboutUs.jpg'
export default function Home() {
    return (
        <div className="md:w-[100%] w-[100%] h-[650px] mx-auto flex flex-col md:flex-row items-center gap-10 my-20 ">
            <img
                src={aboutUs}
                alt="About Us"
                className="w-[500px] h-[500px] object-cover md:object-left rounded-3xl"
                loading="lazy"
            />

            <div className='flex flex-col justify-between items-start gap-6 md:w-[50%] w-full'>
                <span>
                    <h1 className='text-[#DC780B]'>About us</h1>
                    <h2 className='heading'>Food Stalls with Persons but  to  Product marketing plane
                        catlogues etc to.
                    </h2>
                </span>
                <p className='paragraph'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also
                    equipment  make your marketing plane Effective.
                </p>

                <button className='button'>Read More</button>
            </div>
        </div>
    )
}
