import ProductCards from './ProductCards'
import VegieMuffen from "../assets/VegieMuffen.jpg"
import Salads from "../assets/Salads.jpg"
import Burger from "../assets/Burger.jpg"
import DelmonicoSteak from "../assets/DelmonicoSteak.jpg"
import EggMasala from "../assets/EggMasala.jpg"
import PeachMelba from "../assets/PeachMelba.jpg"

const productCardImages = [
    {
        id: 1,
        images: VegieMuffen,
        heading: "Vegie Muffen",
        price: "16$",
        details: "There are many things are needed to start the Fast Food Business.",
        star: 4.5
    },

    {
        id: 2,
        images: Salads,
        heading: "Salads",
        price: "12$",
        details: "There are many things are needed to start the Fast Food Business.",
        star: 5
    },

    {
        id: 3,
        images: Burger,
        heading: "Burger",
        price: "10$",
        details: "There are many things are needed to start the Fast Food Business.",
        star: 3
    },

    {
        id: 4,
        images: DelmonicoSteak,
        heading: "Delmonico Steak",
        price: "14$",
        details: "There are many things are needed to start the Fast Food Business.",
        star: 2
    },

    {
        id: 5,
        images: EggMasala,
        heading: "Egg Masala",
        price: "9$",
        details: "There are many things are needed to start the Fast Food Business.",
        star: 5
    },

    {
        id: 6,
        images: PeachMelba,
        heading: "Peach Melba",
        price: "15$",
        details: "There are many things are needed to start the Fast Food Business.",
        star: 3
    },
]

export default function Menu() {
    return (
        <div className='w-full flex flex-col items-center my-20 gap-4 paddingY-2'>
            <div className='md:w-[750px] flex flex-col items-center text-center gap-4'>
                <h1 className='text-[#DC780B]'>Menu</h1>
                <h2 className='heading'>Food Full of treaty Love</h2>
                <p className='paragraph'>
                    There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers,
                </p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10'>
                {productCardImages.map((Product) => (
                    <ProductCards
                        key={Product.id}
                        img={Product.images}
                        price={Product.price}
                        heading={Product.heading}
                        details={Product.details}
                        star={Product.star}
                    />
                ))}
            </div>

            <button className='button mt-8'>Learn more</button>

        </div>
    )
}
