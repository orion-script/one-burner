import Image from 'next/image'
import Logo from "../assets/svg/logo.svg"
import ArrowDown from "../assets/svg/arrowdown.svg"
import ArrowRight from "../assets/svg/arrowright.svg"
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

const NavBAr = () => {
    return ( 
        <nav className='bg-slate-200 w-full px-10 m-auto flex justify-between items-center fixed top-0 left-0 right-0 shadow-xl z-50'>
            
            <Link href="/" className='w-7/12 md:w-2/12'>
                <Image src={Logo} alt="logo image" className='w-full' />
            </Link>
        
            <FaBars className=' md:hidden'/>

            <div className="hidden md:flex items-center justify-between w-[30%]">
                <div className="flex items-center">
                <a href="">Product</a>
                <Image src={ArrowDown} alt="arrow down" className='ml-2 cursor-pointer mt-1' />
                </div>

                <a href="">Pricing</a>
                <Link href="/enterprise">Enterprise</Link>
                <a href="">Support</a>
            </div>

            <div className="hidden md:flex items-center justify-between w-[30%]">
                <a href="">Contact Sales</a>

                <Link href="/login">Login</Link>
                
                <div className="bg-[#462686] flex items-center justify-around w-[39%] px-4 rounded-[100px] text-white">
                    <button className=''>Try For Free</button>
                    <Image src={ArrowRight} alt="arrow down" className='' />
                </div>
            </div>
        </nav>
     );
}
 
export default NavBAr;