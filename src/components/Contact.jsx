export default function Contact() {
  return (
    <div className='w-full h-[500px] flex flex-col justify-center items-center gap-10 my-20'>
        <span className='flex flex-col items-center gap-4 text-center md:w-[700px]'>
            <p className='heading2'>Contact</p>
            <h1 className='heading'>Food Stalls with Persons but also specialized equipment, Skills to manage.</h1>
        </span>

        <span className='flex flex-col md:flex-row '>
            <input type="text" placeholder='Enter your message' className='input' />
            <button className='button'>Send</button>
        </span>
    </div>
  )
}
