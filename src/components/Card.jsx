export default function Card({ icon, title, details }) { 
    return (
        <div className='w-80 h-[300px] rounded-3xl flex flex-col justify-center gap-4 items-center text-center hover:scale-105 ease-in-out duration-300 '>
            <span className='bg-white w-[90px] h-[90px] rounded-full flex justify-center items-center'>
                <img src={icon} alt={title} className='w-[50px]' />
            </span>

            <h1 className="heading">{title}</h1>
            <p className="paragraph">{details}</p>
        </div>
    )
}
