import Image from "next/image";
import Managements from "../assets/png/managements.png"

const Management = () => {
    return ( 
        <div className="w-full md:py-20">
            <div className="w-11/12 m-auto md:flex justify-between md:border border-gray-900 rounded-lg h-10 items-center">
                <p className="bg-gray-900 rounded-lg md:rounded-l-lg py-2 text-white px-2">CRM & Sales</p>
                <p>Human Resources</p>
                <p>Marketing</p>
                <p>Remote Work</p>
                <p>Project Management</p>
                <p className="md:px-2">Social Media</p>
            </div>
            
            <div className="w-11/12 md:flex justify-between mt-40 md:my-20 m-auto">
                <div className="md:w-[35%] my-20">
                    <h2 className="font-normal text-2xl md:text-4xl py-4 text-[#333333]">Manage team activities all in one place.</h2>
                    <p className="font-normal text-base md:text-xl text-[#454545CC]">Keep your team organized and informed with activities that are up to date.</p>
                </div>

                <Image src={Managements} alt={Managements} className="md:w-2/5" />
            </div>
        </div>
     );
}
 
export default Management;