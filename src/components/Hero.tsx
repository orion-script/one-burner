import Image from "next/image";
import Component from "../assets/png/Component.png"

const Hero = () => {
    return ( 
       <Image src={Component} alt="component image" className="w-11/12 m-auto mt-20 md:mt-40" data-aos="zoom-in-up" data-aos-easing="linear"
       data-aos-duration="1500" />
     );
}
 
export default Hero;