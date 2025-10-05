import heroImg from "../assets/main.png"

export default function Home() {
    return (
        <div className="md:w-[100%] w-[100%] md:h-[450px] mx-auto flex flex-col md:flex-row items-center gap-10 my-20 ">
            <div className="flex flex-col gap-6 my-10 md:w-[80%] w-full">
                <h1 className="font-bold text-4xl md:w-[500px]">Making time a good time by making food the good food.</h1>
                <p className="opacity-40 text-[16px]">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>

                <span className="flex gap-6">
                    <button className="button">Order Now</button>
                    <button className="button">Food Ditails</button>
                </span>
            </div>

            <img src={heroImg} alt="HeroImage" className="md:w-[900px] w-full z-[-1]" />

        </div>
    )
}
