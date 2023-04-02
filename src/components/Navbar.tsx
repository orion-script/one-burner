import Image from 'next/image'
import Logo from "../assets/svg/logo.svg"
import ArrowDown from "../assets/svg/arrowdown.svg"
import ArrowRight from "../assets/svg/arrowright.svg"
import Close from "../assets/svg/close.svg"
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const NavBAr = () => {
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        navbar ? document.body.classList.add("fixed") : document.body.classList.remove("fixed");
    }, [navbar])

    return (


        <>
            <nav className="w-full bg-slate-300 text-black fixed top-0 left-0 right-0 z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            {/* LOGO */}
                            <Link href="/">
                                <Image src={Logo} alt="logo image" className='h-10 w-[10rem]' />
                            </Link>

                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <Image src={Close} width={15} height={15} alt="close ison" className='' />
                                    ) : (
                                        <FaBars
                                            className="focus:border-none active:border-none"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            className={`w-full flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <div className="md:flex justify-between w-full">
                                <ul className="h-screen md:h-auto items-center justify-center md:flex md:w-[35%]">

                                    <li className="flex justify-center pb-6 md:pb-0 text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                        <Link href="" onClick={() => setNavbar(!navbar)} className='flex'>
                                            Product
                                        </Link>
                                        <Image src={ArrowDown} alt="arrow down" className='ml-2 cursor-pointer mt-1' />
                                    </li>


                                    <li className="pb-6 md:pb-0 text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                        <Link href="" onClick={() => setNavbar(!navbar)}>
                                            Pricing
                                        </Link>
                                    </li>

                                    <li className="pb-6 md:pb-0 text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                        <Link href="/enterprise" onClick={() => setNavbar(!navbar)}>
                                            Enterprise
                                        </Link>
                                    </li>

                                    <li className="pb-6 md:pb-0 text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                        <Link href="/" onClick={() => setNavbar(!navbar)}>
                                            Support
                                        </Link>
                                    </li>


                                    <div className="md:hidden">

                                        <li className="pb-6 md:pb-0 text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                            <Link href="" onClick={() => setNavbar(!navbar)}>
                                                Contact Sales
                                            </Link>
                                        </li>

                                        <li className="pb-6 md:pb-0 text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">

                                            <Link href="/login" onClick={() => setNavbar(!navbar)}>
                                                Login
                                            </Link>
                                        </li>

                                    </div>
                                </ul>


                                <ul className="h-screen md:h-auto items-center justify-center md:flex md:w-[48%]">

                                    <li className="pb-6 md:pb-0 text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                        <Link href="" onClick={() => setNavbar(!navbar)}>
                                            Contact Sales
                                        </Link>
                                    </li>

                                    <li className="pb-6 md:pb-0 text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                        <Link href="/login" onClick={() => setNavbar(!navbar)}>
                                            Login
                                        </Link>
                                    </li>

                                    <div className="bg-[#462686] flex items-center justify-around w-[39%] px-4 rounded-[100px] text-white">
                                        <button className=''>Try For Free</button>
                                        <Image src={ArrowRight} alt="arrow down" />
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBAr;