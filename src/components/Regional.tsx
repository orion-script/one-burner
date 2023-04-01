import Image from "next/image";
import Region from "../assets/png/component-6.png"

const Regional = () => {
    return ( 
        <Image src={Region} alt="regional image" className="mb-5" data-aos="zoom-in-down" data-aos-easing="linear"
        data-aos-duration="1500" />
     );
}
 
export default Regional;