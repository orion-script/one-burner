import Image from 'next/image'
import Logo from "../assets/svg/logo.svg"
import ArrowDown from "../assets/svg/arrowdown.svg"
import ArrowRight from "../assets/svg/arrowright.svg"
import Menu from "../assets/svg/icon-hamburger.svg"
import Close from "../assets/svg/close.svg"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const NavBAr = () => {
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        navbar ? document.body.classList.add("fixed") : document.body.classList.remove("fixed");
    }, [navbar])

    return (
        <nav className="w-full flex flex-col md:flex-row justify-between items-center h-20 bg-slate-300 text-black fixed top-0 left-0 right-0 z-10">

            <div className="flex items-center justify-between py-3 md:py-5 md:block w-full px-4 md:w-2/12 h-14 md:h-14">
                <Link href="/">
                    <Image src={Logo} alt="logo image" className='h-10 w-[7rem] md:w-[10rem]' />
                </Link>

                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                    <button
                        className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <Image src={Close} width={15} height={15} alt="close icon" />
                        ) : (

                            <Image src={Menu} width={15} height={15} alt="menu icon" />
                        )}
                    </button>
                </div>
            </div>



            <div
                className={`w-full md:w-4/5 pb-3 md:pb-0 md:mt-0 md:flex h-14 justify-between items-center z-50 ${navbar ? 'bg-slate-300 w-full pt-10 px-10 md:pt-0 md:px-0 h-screen' : 'hidden'
                    }`}
            >

                <ul className="h-screen md:h-auto items-center justify-center md:flex md:w-[45%]">

                    <li className="flex justify-center pb-6 md:pb-0 text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href="" onClick={() => setNavbar(!navbar)} className='flex'>
                            Product
                        </Link>
                        <Image src={ArrowDown} width={18} height={18} alt="arrow down icon" className='pl-2 cursor-pointer' />
                    </li>

                    <li className="pb-6 md:pb-0 text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href="" onClick={() => setNavbar(!navbar)}>
                            Pricing
                        </Link>
                    </li>


                    <li className="pb-6 md:pb-0 text-black py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href="/enterprise" onClick={() => setNavbar(!navbar)}>
                            Enterprise
                        </Link>
                    </li>

                    <li className="pb-6 md:pb-0 text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href="" onClick={() => setNavbar(!navbar)}>
                            Support
                        </Link>
                    </li>

                    <div className="bg-[#462686] md:hidden flex items-center justify-around w-8/12 h-10 mt-5 m-auto px-4 rounded-[100px] text-white">
                        <button className=''>Try For Free</button>
                    </div>
                </ul>

                <ul className='h-screen md:h-auto items-center justify-center md:flex md:w-[45%]'>
                    <li className="pb-6 md:pb-0 text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href="" onClick={() => setNavbar(!navbar)}>
                            Contact Sale
                        </Link>
                    </li>

                    <li className="pb-6 md:pb-0 text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href="/login" onClick={() => setNavbar(!navbar)}>
                            Login
                        </Link>
                    </li>
                </ul>

                <div className="bg-[#462686] hidden md:flex md:justify-around items-center text-center py-2 w-3/12 md:w-2/12 rounded-[100px] text-white">
                    <button className='m-auto text-center'>Try For Free</button>
                    <Image src={ArrowRight} width={18} height={18} alt="arrow right icon" className='pr-2' />
                </div>

            </div>
        </nav>
    );
}

export default NavBAr;