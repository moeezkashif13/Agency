import DivOpenMobileNavbar from "./DivOpenMobileNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar(){
    return (

<div className="flex bg-blackAlike  commonPadding sm:commonPaddingTablet xl:commonPaddingDesktop relative pt-6">


<div className="flex items-center gap-x-3 ">

<img src="/logo.svg"  />

<h1  className="text-2xl font-bold text-white">Agency</h1>


</div>

        <div className="ml-auto lg:mx-auto md:flex" >

<MobileNavbar  />


<DivOpenMobileNavbar/>


</div>

</div>



    )
}