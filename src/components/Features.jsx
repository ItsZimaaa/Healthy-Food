import Card from "./Card";
import iconHome from "../assets/iconHome.svg"
import iconDelivery from "../assets/iconDelivery.svg"
import iconSmile from "../assets/iconSmile.svg"

const cardInfo = [
    {
        id: 1,
        title: "Quality Food",
        details: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
        icon: iconHome
    },

    {
        id: 2,
        title: "Food Delivery",
        details: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
        icon: iconDelivery
    },

    {
        id: 3,
        title: "Super Taste",
        details: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
        icon: iconSmile
    }
]


export default function Features() {
    return (
        <div className='flex flex-col items-center paddingY-2' >
            <span>
                <h1 className='heading2'>Features</h1>
                <h1 className='heading'>Food with a New Passion</h1>
            </span>

            <div className="flex md:flex-row flex-col gap-10 justify-center items-center p-10 rounded-3xl mt-10">
                {cardInfo.map((card) => (
                    <Card
                        key={card.id}
                        icon={card.icon}
                        title={card.title} 
                        details={card.details}
                    />
                ))}
            </div>
        </div>
    )
}
