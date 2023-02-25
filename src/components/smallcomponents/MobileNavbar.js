import {ImCross} from 'react-icons/im'
import Link from "next/link";
import { useEffect, useState } from 'react';


const showFunction = ()=>{
    document.querySelector(".mobileNavbar").style.left = '0'    
}

const removeFunction = ()=>{
    document.querySelector(".mobileNavbar").style.left = '-100%'

}


export default function MobileNavbar(){

useEffect(()=>{

    const mobileNavbarParent = document.querySelector(".mobileNavbarParent");
    const avienCheckingBro = document.querySelector(".avienCheckingBro");

    console.log(mobileNavbarParent.nextElementSibling.nextElementSibling);

    mobileNavbarParent.nextElementSibling.nextElementSibling.addEventListener("click",()=>{
    showFunction()
})

avienCheckingBro.addEventListener("click",()=>{
    removeFunction()
    })

    return ()=>{

        mobileNavbarParent.nextElementSibling.nextElementSibling.removeEventListener("click",()=>{
            showFunction()
        })

        avienCheckingBro.removeEventListener("click",()=>{
            removeFunction()
            })

    }
    
},[])


    return (

        <>

        <div className="mobileNavbarParent absolute h-screen left-[-100%] top-0 px-8 z-10 w-full  text-white text-2xl   py-8 mobileNavbar" style={{transition:'all 0.6s',backgroundColor:'rgba(0,0,0,0.95)'}}>

<div className="avienCheckingBro text-white  mb-8 flex justify-end text-4xl " >
    <ImCross/>
</div>


<div className="flex flex-col gap-y-5 text-center">

 
<Link href="/">

<div >Home</div>

</Link>

<Link href="/about">

<div >About</div>

</Link>

<Link href="/services">

<div >Services</div>

</Link>

<Link href="/portfolio">

<div >Portfolio</div>

</Link>

<Link href="/contact">

<div >Contact</div>

</Link>

</div>

</div>



<div className="md:flex md:items-center md:gap-x-8 text-xl hidden  text-white">

 
<Link href="/">

<div >Home</div>

</Link>

<Link href="/about">

<div >About</div>

</Link>

<Link href="/services">

<div >Services</div>

</Link>

<Link href="/portfolio">

<div >Portfolio</div>

</Link>

<Link href="/contact">

<div >Contact</div>

</Link>

</div>


</>


    )
}