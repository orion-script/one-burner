import Image from "next/image";
import CEO from "../assets/png/Ellipse-5.png"

const Hassan = () => {
    return (
        <>
            <p className="text-center px-2 md:px-28 font-light text-2xl" data-aos="fade-up">Best. Product. Ever! We like Oneburner more and more each day because it makes our work a lot easier. It's just amazing. Very easy to use, impressed us on multiple levels. Thank you so much for your help and is worth much more than we paid. We were treated like royalty.</p>

            <div className="inline-flex items-center justify-center w-full mt-20">
                <hr className="hidden md:block w-10/12 h-px my-8 border-0 bg-gray-300" />
                <div className="absolute px-3 -translate-x-1/2 bg-white left-1/2 md:flex items-center mt-20 md:mt-0">
                    <Image src={CEO} alt="ceo image" className="h-20 md:h-14 w-20 md:w-14 m-auto" />
                    <div className="pl-5 text-[#333333]">
                        <h2 className="font-semibold md:font-bold text-xl">Kemi Hassan</h2>
                        <p className="font-light md:font-normal text-sm md:text-xl">CEO, Saharaa Inc.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hassan; 