import Image from 'next/image'
import Logo from "../assets/svg/logo.svg"
import ArrowRight from "../assets/svg/arrowright.svg"
import Eye from "../assets/svg/eye-19.svg"
import OutLook from "../assets/svg/outlook.svg"
import LinkedIn from "../assets/svg/linkedin.svg"
import Google from "../assets/svg/google-icon.svg"

const Login = () => {
    return ( 
        <>
        <div className="flex justify-between w-10/12 m-auto items-center pt-2 md:pt-5">
            <Image src={Logo} alt="logo image" className='w-5/12 md:w-2/12' />

            <div className="hidden md:flex justify-between items-center md:w-4/12">
                <a href="" className='font-normal text-sm md:text-lg'>New Customer?</a>

                <div className="bg-[#462686] flex items-center justify-around px-4 rounded-[100px] text-white h-10 w-[10rem]">
                    <button className='font-medium'>Try For Free</button>
                    <Image src={ArrowRight} alt="arrow down" className='' />
                </div>
            </div>
        </div>

        <h2 className='font-medium text-xl text-center pt-5 md:pt-10'>Sign In</h2>

        <form action="" className='flex flex-col w-11/12 md:w-2/4 m-auto pt-5 md:pt-10'>
            <label htmlFor="">Email / Username</label>
            <input type="text" className='w-full my-2 border-2 border-gray-200 focus:border-gray-200 focus:outline-none h-12 pl-5 rounded-lg shadow-lg' />

            <label htmlFor="">Password</label>

                <input type="password" className='w-full my-2 border-2 border-gray-200 focus:border-gray-200 focus:outline-none h-12 pl-5 rounded-lg shadow-lg' />
            {/* <span> */}
                {/* <Image src={Eye} alt="eye icon" className='absolute' /> */}
            {/* </span> */}

            <button className='bg-[#462686] rounded-full h-10 mt-5 md:mt-8 text-white font-medium text-lg'>Log In</button>
        </form>

        <a href="" className='font-normal text-xl text-center'>
            <p className='mt-5'>Forgot Password?</p>
        </a>

        <div className="flex m-auto w-11/12 md:w-5/12 items-center h-12 mt-5">
            <p className='text-center'>
                -Or sign in with :
            </p>

            <Image src={OutLook} alt="outlook icon" className='h-10' />
            <Image src={LinkedIn} alt="linkedin icon" className='h-10' />
            <Image src={Google} alt="google icon" className='h-10' />
        </div>

        <p className='text-center font-normal text-sm md:text-lg mt-4'>© 2020 Oneburner.com. All Rights Reserved. </p>
        </>
     );
}
 
export default Login;