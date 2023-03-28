import Image from "next/image";
import Report from "../assets/png/report.png"
import Chat from "../assets/png/chat.png"

const Selection2 = () => {
    return ( 
        <>
        <div className="w-11/12 md:flex justify-between mt-40 md:my-20 m-auto">
            <Image src={Report} alt="report image" className="md:w-2/5" />
            <div className="md:w-[35%] my-20">
                <h2 className="font-normal text-2xl md:text-4xl py-4 text-[#333333]">Timeless report generator.</h2>
                <p className="font-normal text-base md:text-xl text-[#454545CC]">You can generate quick report of activities of all that has to do with the daily running of your business and teams.</p>
            </div>
        </div>

        <div className="w-11/12 md:flex justify-between mt-40 md:my-20 m-auto">
            <div className="md:w-[35%] my-20">
                <h2 className="font-normal text-2xl md:text-4xl py-4 text-[#333333]">Efficient lead management.</h2>
                <p className="font-normal text-base md:text-xl text-[#454545CC]">Track and manage prospective customers. Manage their notes, emails, meetings, calls, contacts, and files.</p>
            </div>
            <Image src={Chat} alt="chat image" className="md:w-2/5" />
        </div>
    </>
     );
}
 
export default Selection2;