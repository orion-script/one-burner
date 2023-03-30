import Image from "next/image";
import Logo from "../assets/svg/logo.svg"
import ArrowDown from "../assets/svg/arrowdown.svg"
import World from "../assets/svg/world.svg"
import FacebookFooter from "../assets/svg/facebook-footer.svg"
import TwitterFooter from "../assets/svg/twitter-footer.svg"
import LinkedInFooter from "../assets/svg/linkedin-footer.svg"
import YoutubeFooter from "../assets/svg/youtube-footer.svg"

const Footer = () => {
    return ( 
        <footer className="flex flex-col">
            <div className="w-11/12 md:flex justify-between m-auto items-center">
                <Image src={Logo} alt="logo image" className='w-7/12 md:w-2/12' h-10 />

                <span className="bg-[#E5E5E5] border border-[#462686] flex items-center w-[120px] h-8 cursor-pointer">
                    <Image src={World} alt="world icon" className='ml-2 cursor-pointer mt-1 mr-2 h-4' />
                    <p>English</p>
                    <Image src={ArrowDown} alt="arrow down" className='ml-2 cursor-pointer mt-1' />
                </span>
            </div>

            <div className="md:flex justify-between w-11/12 m-auto mt-10">
                <div className="w-11/12 md:w-[25%]">
                    <h2 className="font-normal text-xl text-[#454545] mb-2">No 1 CRM solution in Africa</h2>
                    <p className="pb-14 font-normal text-lg text-[#01001D99]">Terms of Use | Privacy Policy</p>

                    <p className="text-[#01001D99] font-normal text-lg mb-2">Get in touch</p>
                    <h2 className="text-[#333333CC] font-normal text-xl mb-5">+234-80-000-0000</h2>

                    <div className="flex w-10/12">
                    <Image src={FacebookFooter} alt="facebook icon" className='ml-2 cursor-pointer mt-1 mr-2 h-4' />
                    <Image src={TwitterFooter} alt="twitter icon" className='ml-2 cursor-pointer mt-1 mr-2 h-4' />
                    <Image src={LinkedInFooter} alt="linkedin icon" className='ml-2 cursor-pointer mt-1 mr-2 h-4' />
                    <Image src={YoutubeFooter} alt="youtube icon" className='ml-2 cursor-pointer mt-1 mr-2 h-4' />
                    </div>
                </div>

                <div className="md:flex justify-between w-11/12 md:w-[65%] text-[#01001D99]">
                    <div className="flex flex-col justify-between my-5">
                        <a href="" className="text-[#150B28] font-bold text-xl pb-5">Product</a>
                        <a href="">Features</a>
                        <a href="">Enterprise</a>
                        <a href="">Security</a>
                        <a href="">Trust</a>
                        <a href="">Customer Stories</a>
                        <a href="">Pricing</a>
                        <a href="">Integrations</a>
                        <a href="">Oneburner Partners</a>
                    </div>

                    <div className="flex flex-col mb-5">
                        <a href="" className="text-[#150B28] font-bold text-xl pb-5">Company</a>
                        <a href="">About Us</a>
                        <a href="">Contact Us</a>
                        <a href="">Careers</a>
                        <a href="">In the News</a>
                    </div>
                    
                    <div className="flex flex-col mb-5">
                        <a href="" className="text-[#150B28] font-semibold md:font-bold text-lg md:text-xl pb-5">ONEBURNER FOR TEAMS</a>
                        <a href="">Engineering</a>
                        <a href="">Financial Services</a>
                        <a href="">CRM and Sales</a>
                        <a href="">IT</a>
                        <a href="">Marketing</a>
                        <a href="">Customer Support</a>
                        <a href="">Human Resources</a>
                        <a href="">Project Management</a>
                        <a href="">Remote Work</a>
                    </div>

                    <div className="flex flex-col">
                        <a href="" className="text-[#150B28] font-bold text-xl pb-5">RESOURCES</a>
                        <a href="">Community</a>
                        <a href="">Guides</a>
                        <a href="">Templates</a>
                        <a href="">Video Tutorials</a>
                        <a href="">Professional Services</a>
                        <a href="">Knowledge Base</a>
                        <a href="">Blog</a>
                        <a href="">Webinars</a>
                        <a href="">Find a Partner</a>
                    </div>
                </div>
            </div>

            <hr className="w-11/12 h-px my-8 border-0 bg-gray-300  m-auto
            " />

            <p className="pl-4 md:pl-12 pb-5">© 2020 Oneburner.com | All Rights Reserved. </p>
        </footer>
     );
}
 
export default Footer;