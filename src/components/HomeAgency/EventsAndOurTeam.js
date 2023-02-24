import { ButtonText } from "../smallcomponents/CommonButtons"

export default function EventsAndOurTeam(){
    return(


        <div className="bg-[#28293E] sm:pt-12 px-6 py-4 sm:commonPaddingTablet xl:commonPaddingDesktop">


<div >

<div className="text-center ">

<p className="sm:text-lg text-primaryColor tracking-common">Events</p>

<p className="text-commonHeading sm:text-[56px] mt-5 mb-12   font-extrabold text-white leading-[48px] sm:leading-[64px]">Explore Future Conferences</p>

</div>


<div className="text-white  flex flex-col lg:flex-row lg:flex-wrap  gap-y-8 sm:justify-between  ">

{[1,2,3,4].map((elem)=>{
    return <div className="w-full lg:w-[350px] sm:w-full relative py-9 px-7 sm:px-10 rounded-md " style={{border:'1px solid #3A3C56'}}>


<div className="flex gap-x-3 ">
    <p className="text-7xl font-extrabold">3</p>
    <div className="font-bold text-2xl">
        <p>November</p>
        <p>2021</p>
    </div>
</div>

<div className="mt-2 mb-8 leading-8" >
    <span>ic</span>
    <span >9:00 am - 3:00 pm</span>
</div>

<div className="bg-[#3A3C56] h-[1px] w-full"></div>

<div>
<p className="text-2xl font-bold mt-10 mb-5">Design Weeks</p>
<p className="mb-6" style={{color:'rgba(255, 255, 255, 0.64)'}}>Digital agency is a business you hire to outsource your digital.</p>

<a href="#!" >Explore Now</a>

</div>


    </div> 
})}


</div>


<div className="flex justify-center mt-8 mb-4">


<ButtonText secondaryText text="Explore More" />

</div>


</div>



        </div>


    )
}