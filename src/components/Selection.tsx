import Image from "next/image";
import ImageGroup from "../assets/png/image-group-41.png"

const Selection = () => {
    return ( 
        <section className="flex flex-col justify-center items-center w-full my-10 text-center"> 
            <h2 className="w-11/12 md:w-7/12 font-normal text-xl md:text-4xl" data-aos="flip-up" data-aos-easing="linear"
     data-aos-duration="1000">Integrate with your favourite tools easily in one click.</h2>

            <Image src={ImageGroup} alt="image-group-41" className="w-10/12 my-10 md:my-20 mx-auto" data-aos="fade-up" />
        </section>
     );
}
 

export default Selection;