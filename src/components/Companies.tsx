import Image from "next/image";
import paystack from "../assets/svg/paystack.svg"
import egyptair from "../assets/svg/egyptair.svg"
import dangote from "../assets/svg/dangote.svg"
import standardbank from "../assets/svg/standardbank.svg"
import MTN from "../assets/svg/MTN.svg"
import gtbank from "../assets/svg/gtbank.svg"
import skooleeo from "../assets/svg/skooleeo.svg"

const Companies = () => {
    return ( 
        <section className="w-full text-center my-10 md:my-20">
            <p data-aos="fade-down">Over 500+ companies bond teams together with Oneburner</p>
            <div className="flex justify-between w-11/12 m-auto mt-10 md:mt-20 h-16" data-aos="fade-up">
                <Image src={paystack} alt="paystack" className="w-2/12" />
                <Image src={egyptair} alt="egyptair" className="w-2/12" />
                <Image src={dangote} alt="dangote" className="w-1/12" />
                <Image src={standardbank} alt="standardbank" className="w-1/12" />
                <Image src={MTN} alt="MTN" className="w-1/12" />
                <Image src={gtbank} alt="gtbank" className="w-1/12" />
                <Image src={skooleeo} alt="skooleeo" className="w-2/12" />
            </div>
        </section>
     );
}
 
export default Companies;