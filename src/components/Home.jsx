import heroImg from "../assets/main.png"

export default function Home() {
    return (
        <div className="w-full md:flex justify-between items-center paddingY-2">
            <div className="flex flex-col gap-6 my-10 md:w-[80%] w-full">
                <h1 className="font-bold text-4xl md:w-[500px]">Making time a good time by making food the good food.</h1>
                <p className="opacity-40 text-[16px]">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>

                <span className="flex gap-6">
                    <button className="button">Order Now</button>
                    <button className="text-[#DC780B] bg-white hover:bg-[#DC780B] hover:text-white ease-in-out duration-200 px-8 py-2 rounded-2xl active:scale-95">Food Ditails</button>
                </span>
            </div>

            <img src={heroImg} alt="HeroImage" className="md:w-[800px] w-full z-[-1]" />

        </div>
    )
}
