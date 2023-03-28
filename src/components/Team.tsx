import Image from "next/image";
import Teams from "../assets/png/team.png"
import Timeline from "../assets/png/timeline.png"

const Team = () => {
    return ( 
        <>
            <div className="w-11/12 md:flex justify-between mt-40 md:my-20 m-auto">
                <Image src={Teams} alt="teams image" className="md:w-2/5" />
                <div className="md:w-[35%] my-20">
                    <h2 className="font-normal text-2xl md:text-4xl py-4 text-[#333333]">Bring your team up to speed</h2>
                    <p className="font-normal text-base md:text-xl text-[#454545CC]">Collaborate on project from start to finish, see information at a glance, add comment, attachment and more with Oneburner.</p>
                </div>
            </div>

            <div className="w-11/12 md:flex justify-between mt-40 md:my-20 m-auto">
                <div className="md:w-[35%] my-20">
                    <h2 className="font-normal text-2xl md:text-4xl py-4 text-[#333333]">Automated task timeline.</h2>
                    <p className="font-normal text-base md:text-xl text-[#454545CC]">View dates, projects, calendar, sprint and more with reliability.</p>
                </div>
                <Image src={Timeline} alt="time line image" className="md:w-2/5" />
            </div>
        </>
     );
}
 
export default Team;