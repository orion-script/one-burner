import Image from "next/image";
import Why from "../assets/png/why-choose-us.png"
import Award from "../assets/png/Award.png"
// import { Fragment } from "react";

const Grow = () => {
    return (
        <div className="mb-[5rem] md:mb-[15rem]">

            <Image src={Why} alt="why choose us image" className="mb-5" data-aos="zoom-in-up" data-aos-easing="linear"
                data-aos-duration="1500" />

            <Image src={Award} alt="award image" className="absolute top-[32rem] md:top-[80rem]" data-aos="zoom-in-up" data-aos-easing="linear"
                data-aos-duration="1500" />
        </div>
    );
}

export default Grow