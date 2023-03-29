import Image from "next/image";
import Teams from "../assets/png/team.png"
import Timeline from "../assets/png/timeline.png"

const Team = () => {
    return ( 
        <section className="w-full">
            <div className="w-11/12 md:flex justify-between mt-20 md:my-20 m-auto">
                <Image src={Teams} alt="teams image" className="w-full md:w-2/5" data-aos="zoom-in-up" />
                <div className="w-full md:w-[50%] my-20">
                    <h2 className="font-normal text-2xl md:text-4xl py-4 text-[#333333]" data-aos="fade-down" >Bring your team up to speed</h2>
                    <p className="font-normal text-base md:text-xl text-[#454545CC]" data-aos="fade-up" >Collaborate on project from start to finish, see information at a glance, add comment, attachment and more with Oneburner.</p>
                </div>
            </div>

            <div className="w-11/12 md:flex justify-between mt-10 md:mt-40 md:my-20 m-auto">
                <div className="w-full md:w-[50%] my-20">
                    <h2 className="font-normal text-2xl md:text-4xl py-4 text-[#333333]" data-aos="fade-down">Automated task timeline.</h2>
                    <p className="font-normal text-base md:text-xl text-[#454545CC]" data-aos="fade-up">View dates, projects, calendar, sprint and more with reliability.</p>
                </div>
                <Image src={Timeline} alt="time line image" className="w-full md:w-2/5" data-aos="zoom-in-down" />
            </div>
        </section>
     );
}
 
export default Team;