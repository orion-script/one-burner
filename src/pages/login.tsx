import Image from 'next/image'
import Logo from "../assets/svg/logo.svg"
import ArrowRight from "../assets/svg/arrowright.svg"
import Eye from "../assets/svg/eye-19.svg"

const Login = () => {
    return ( 
        <>
        <div className="flex justify-between w-10/12 m-auto items-center pt-10">
            <Image src={Logo} alt="logo image" className='w-7/12 md:w-2/12' />

            <div className="flex justify-between items-center w-4/12">
                <a href="" className='font-normal text-lg'>New Customer?</a>

                <div className="bg-[#462686] flex items-center justify-around px-4 rounded-[100px] text-white h-10 w-[10rem]">
                    <button className=''>Try For Free</button>
                    <Image src={ArrowRight} alt="arrow down" className='' />
                </div>
            </div>
        </div>

        <h2 className='font-normal text-xl text-center pt-14'>Sign In</h2>

        <form action="" className='flex flex-col w-2/4 m-auto pt-10'>
            <label htmlFor="">Email / Username</label>
            <input type="text" className='w-full my-3 border-2 border-gray-200 focus:border-gray-200 focus:outline-none h-12 pl-5 rounded-lg shadow-lg' />

            <label htmlFor="">Password</label>

                <input type="password" className='w-full my-3 border-2 border-gray-200 focus:border-gray-200 focus:outline-none h-12 pl-5 rounded-lg shadow-lg' />
            {/* <span> */}
                {/* <Image src={Eye} alt="eye icon" className='absolute' /> */}
            {/* </span> */}

            <button>#462686</button>
        </form>
        </>
     );
}
 
export default Login;