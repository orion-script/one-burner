import Image from "next/image";
import Chat4 from "../assets/svg/chat-4.svg"
import Widget from "../assets/svg/widget.svg"
import Phone2 from "../assets/svg/phone-2.svg"
import Hero from "../assets/png/hero.png"

const About = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between w-10/12 m-auto my-20">
            <div className="w-3/5 md:w-2/12 m-auto md:h-[20rem]">
                <div className="py-5">
                    <Image src={Chat4} alt="chat icon" className="h-8" data-aos="zoom-in" />
                    <p className="text-[#454545CC] font-normal text-lg" data-aos="fade-down">Live chat</p>
                </div>

                <div className="py-5">
                    <Image src={Widget} alt="widget icon" className="h-8" data-aos="zoom-in" />
                    <p className="text-[#454545CC] font-normal text-lg" data-aos="fade-up">Mail support</p>
                </div>

                <div className="py-5">
                    <Image src={Phone2} alt="phone icon" className="h-8" data-aos="zoom-in" />
                    <p className="text-[#454545CC] font-normal text-lg" data-aos="fade-down">Phone call support</p>
                </div>
            </div>

            <Image src={Hero} alt="hero image" className="w-2/4 md:w-3/12 h-56 mt-10 mx-auto" data-aos="zoom-in-up" />

            <div className="w-11/12 md:w-5/12 mt-10 md:mt-14">
                <h2 className="text-[#333333] font-normal text-2xl md:text-4xl" data-aos="fade-up">24/7 customer support</h2>
                <p className="text-[#454545CC] font-normal text-base md:text-xl my-5" data-aos="fade-down">Our team of responsible member is always available to help you all day long and ready to meet your demand. Reach out to us and we will always be there.</p>
            </div>
        </div>
    );
}

export default About;