import Image from "next/image";
import ArrowRight from "../assets/svg/arrowright.svg"

const Better = () => {
    return ( 
        <div className="bg-[#7837F8] w-full h-[19rem] mb-10 py-10 text-center text-white">
            <h2 className="font-bold text-xl md:text-4xl">Choose a better way to work</h2>
            <p className="font-medium text-lg md:text-2xl mt-5">No credit card details | No additional installation | No time wasting</p>
            <div className="bg-[#462686] flex items-center justify-around w-[200px] h-[50px] px-4 rounded-[100px] text-white m-auto mt-10" data-aos="zoom-in">
                    <button className=''>Start Free Trial</button>
                    <Image src={ArrowRight} alt="arrow down" className='' />
                </div>
        </div>
     );
}

export default Better;