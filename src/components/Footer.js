import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'

export default function Footer(){
    return(

        <div className="bg-[#FDF0E9] flex flex-col items-center lg:items-start pb-10 text-secondaryColor sm:commonPaddingTablet xl:commonPaddingDesktop ">

<div className='sm:mt-24 lg:flex lg:w-full'>

<div>
<p className='text-2xl text-center font-bold leading-8 my-12 sm:my-0'>Agency</p>
</div>


<div className='text-center flex flex-col lg:flex-row 2xl:mx-auto lg:gap-x-40 xl:gap-x-56 lg:mt-0 gap-y-12  my-6  '>


<div className='lg:ml-52 '>
    <p className="uppercase text-primaryColor tracking-common">Menu</p>
    <div className='flex flex-col mt-4 gap-y-1.5'>
        <a href='#!'>About</a>
        <a href='#!'>Services</a>
        <a href='#!'>Blog</a>
        <a href='#!'>Contact</a>
    </div>
</div>


<div >
    <p className="uppercase text-primaryColor tracking-common">Service</p>
    <div className='flex flex-col mt-4 gap-y-1.5'>
        <a href='#!'>Design</a>
        <a href='#!'>Development</a>
        <a href='#!'>Marketing</a>
        <a href='#!'>See More</a>
    </div>
</div>

</div>



<div className="flex text-white gap-x-2 mt-12 mb-16 sm:my-0 lg:ml-auto">

<a href='#!' className="w-12 h-12 flex items-center justify-center text-lg rounded-full bg-primaryBackground">
        <FaFacebookF/>
</a>

<a href='#!' className="w-12 h-12 flex items-center justify-center text-lg rounded-full bg-primaryBackground">
        <FaTwitter/>
</a>

<a href='#!' className="w-12 h-12 flex items-center justify-center text-lg rounded-full bg-primaryBackground">
        <FaInstagram/>
</a>


</div>

</div>




<div className='bg-[#F3D1BF] h-[1px] w-4/5 sm:w-full sm:my-14'></div>

<div className='  sm:w-full '>

<p className='mt-11 mb-8 sm:mt-0 leading-8 text-center' style={{color:'rgba(57, 20, 0, 0.64)'}}>Copyright © 2022 Laaqiq. All Rights Reserved.</p>


<div className='flex gap-x-16 justify-center text-secondaryColor sm:ml-auto'>

<a href="#!">Terms of Use</a>
<a href="#!">Privacy Policy</a>

</div>
</div>



        </div>

    )
}