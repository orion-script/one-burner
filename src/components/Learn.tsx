import Image from 'next/image'
import ArrowRight from "../assets/svg/arrowright.svg"

const Learn = () => {
    return (
        <div className="bg-[#CCCCCC1A] w-full h-[15rem] mt-36 md:mt-10">
            <h2 className="text-center font-bold text-3xl pt-10">Want to learn more on how we can impact your enterprise?</h2>

            <div className="bg-[#462686] flex items-center justify-around w-2/4 md:w-[12%] h-10 m-auto mt-10 px-4 rounded-[100px] text-white">
                <button className=''>Contact Sales</button>
                <Image src={ArrowRight} alt="arrow down icon" className='' />
            </div>
        </div>
    );
}

export default Learn;