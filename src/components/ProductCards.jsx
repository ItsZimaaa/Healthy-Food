import { FaPlus } from "react-icons/fa";
import { MdOutlineStarBorderPurple500, MdOutlineStarPurple500 } from "react-icons/md";

export default function ProductCards({ img, heading, price, details, star }) {
  const totalStars = 5;
  const fullStars = Math.floor(star);
  const halfStar = star % 1 >= 0.5;

  return (
    <div className='w-[360px] flex flex-col gap-4 rounded-4xl hover:scale-105 ease-in-out duration-300'>
      <img src={img} className="rounded-br-4xl rounded-tl-4xl" />

      <span className="flex justify-between px-4 items-center">
        <h1 className="text-[25px] font-bold">{heading}</h1>
        <p className="text-[25px]">{price}</p>
      </span>

      <p className="text-[16px] px-4 opacity-60">
        {details}
      </p>

      <div className="flex justify-between items-center px-4">
        <button className="text-white bg-[#DC780B] rounded-full p-2 hover:scale-105 active:scale-95">
          <FaPlus />
        </button>

        <span className="flex text-[28px] text-[#DC780B]">
          {[...Array(fullStars)].map((_, i) => (
            <MdOutlineStarPurple500 key={`full-${i}`} />
          ))}

          {halfStar && (
            <span
              key="half"
              className="relative inline-block text-[28px] text-[#DC780B]"
            >
              <MdOutlineStarBorderPurple500 className="absolute top-0 left-0" />
              <MdOutlineStarPurple500
                className="absolute top-0 left-0 overflow-hidden"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              />
            </span>
          )}

          {[...Array(totalStars - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
            <MdOutlineStarBorderPurple500 key={`empty-${i}`} />
          ))}
        </span>
      </div>
    </div>
  );
}
