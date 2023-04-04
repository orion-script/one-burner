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
                <Image src={Logo} alt="logo image" className='w-7/12 md:w-2/12' data-aos="zoom-in-down" />

                <span className="bg-[#E5E5E5] border border-[#462686] flex items-center w-[120px] h-8 cursor-pointer" data-aos="flip-down">
                    <Image src={World} alt="world icon" className='ml-2 cursor-pointer mt-1 mr-2 h-4' />
                    <p>English</p>
                    <Image src={ArrowDown} alt="arrow down" className='ml-2 cursor-pointer mt-1' />
                </span>
            </div>

            <div className="md:flex justify-between w-11/12 m-auto mt-10">
                <div className="w-11/12 md:w-[25%]">
                    <h2 className="font-normal text-xl text-[#454545] mb-2" data-aos="fade-up">No 1 CRM solution in Africa</h2>
                    <p className="pb-14 font-normal text-lg text-[#01001D99]" data-aos="fade-down">Terms of Use | Privacy Policy</p>

                    <p className="text-[#01001D99] font-normal text-lg mb-2" data-aos="fade-up">Get in touch</p>
                    <h2 className="text-[#333333CC] font-normal text-xl mb-5" data-aos="fade-down">+234-80-000-0000</h2>

                    <div className="flex w-10/12" data-aos="fade-up">
                        <Image src={FacebookFooter} alt="facebook icon" className='ml-2 cursor-pointer mt-1 mr-2 h-4' />
                        <Image src={TwitterFooter} alt="twitter icon" className='ml-2 cursor-pointer mt-1 mr-2 h-4' />
                        <Image src={LinkedInFooter} alt="linkedin icon" className='ml-2 cursor-pointer mt-1 mr-2 h-4' />
                        <Image src={YoutubeFooter} alt="youtube icon" className='ml-2 cursor-pointer mt-1 mr-2 h-4' />
                    </div>
                </div>

                <div className="md:flex justify-between w-11/12 md:w-[65%] text-[#01001D99]">
                    <div className="flex flex-col justify-between">
                        <a href="" className="text-[#150B28] font-bold text-xl pb-3 pt-8 md:pt-0" data-aos="fade-up">Product</a>
                        <a href="" data-aos="fade-down">Features</a>
                        <a href="" data-aos="fade-down">Enterprise</a>
                        <a href="" data-aos="fade-down">Security</a>
                        <a href="" data-aos="fade-down">Trust</a>
                        <a href="" data-aos="fade-down">Customer Stories</a>
                        <a href="" data-aos="fade-down">Pricing</a>
                        <a href="" data-aos="fade-down">Integrations</a>
                        <a href="" data-aos="fade-down">Oneburner Partners</a>
                    </div>

                    <div className="flex flex-col mb-5">
                        <a href="" className="text-[#150B28] font-bold text-xl pb-3 pt-8 md:pt-0" data-aos="fade-up">Company</a>
                        <a href="" data-aos="fade-down">About Us</a>
                        <a href="" data-aos="fade-down">Contact Us</a>
                        <a href="" data-aos="fade-down">Careers</a>
                        <a href="" data-aos="fade-down">In the News</a>
                    </div>

                    <div className="flex flex-col mb-5">
                        <a href="" className="text-[#150B28] font-semibold md:font-bold text-lg md:text-xl pb-3 pt-8 md:pt-0" data-aos="fade-up">ONEBURNER FOR TEAMS</a>
                        <a href="" data-aos="fade-down">Engineering</a>
                        <a href="" data-aos="fade-down">Financial Services</a>
                        <a href="" data-aos="fade-down">CRM and Sales</a>
                        <a href="" data-aos="fade-down">IT</a>
                        <a href="" data-aos="fade-down">Marketing</a>
                        <a href="" data-aos="fade-down">Customer Support</a>
                        <a href="" data-aos="fade-down">Human Resources</a>
                        <a href="" data-aos="fade-down">Project Management</a>
                        <a href="" data-aos="fade-down">Remote Work</a>
                    </div>

                    <div className="flex flex-col">
                        <a href="" className="text-[#150B28] font-bold text-xl pb-3 pt-8 md:pt-0" data-aos="fade-up">RESOURCES</a>
                        <a href="" data-aos="fade-down">Community</a>
                        <a href="" data-aos="fade-down">Guides</a>
                        <a href="" data-aos="fade-down">Templates</a>
                        <a href="" data-aos="fade-down">Video Tutorials</a>
                        <a href="" data-aos="fade-down">Professional Services</a>
                        <a href="" data-aos="fade-down">Knowledge Base</a>
                        <a href="" data-aos="fade-down">Blog</a>
                        <a href="" data-aos="fade-down">Webinars</a>
                        <a href="" data-aos="fade-down">Find a Partner</a>
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