import Image from "next/image";
import ArrowRight from "../assets/svg/arrowright.svg"
import Collaborates from "../assets/png/collaborate.png"

const Collaborate = () => {
    return ( 
        <section className="w-full md:flex justify-around pt-20">
            <div className="w-11/12 md:w-[50%] mt-10 md:mt-40 m-auto">
                <h2 className="text-[#462686] font-bold text-3xl md:text-5xl" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" >Collaborate with your team and get more done.</h2>
                <p className="font-normal text-2xl text-[#333333CC] my-10" data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="1500">Communicate effectively with Oneburner for easy collaboration, team work and remote work.</p>
                <div className="bg-[#462686] flex items-center justify-around w-[200px] h-[50px] px-4 rounded-[100px] text-white"  data-aos="zoom-in"
                data-aos-duration="2000">
                    <button className=''>Start Free Trial</button>
                    <Image src={ArrowRight} alt="arrow down" className='' />
                </div>
            </div>

            <Image src={Collaborates} alt="arrow down" className='w-full md:w-[40%] mt-20' data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500" />
            
        </section>
     );
}
 
export default Collaborate;