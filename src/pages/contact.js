
import Footer from "@/components/Footer";
import { ButtonText } from "@/components/smallcomponents/CommonButtons";
import { DifferentPagesHeroSect, FAQ } from "@/components/smallcomponents/commonComponents";
import DivOpenMobileNavbar from "@/components/smallcomponents/DivOpenMobileNavbar";
import FieldDefault from "@/components/smallcomponents/FieldDefault";
import MobileNavbar, { openNavbarMobile } from "@/components/smallcomponents/MobileNavbar";
import Navbar from "@/components/smallcomponents/Navbar";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegCompass } from "react-icons/fa";


const infoArray = [

    {icon:<FaPhoneAlt/>,text:'Phone',secondaryText:'+1 (234) 567-89-00'},
    {icon:<FaEnvelope/>,text:'EMail',secondaryText:'info@agency.com'},
    {icon:<FaRegCompass/>,text:'Address',secondaryText:'2247 Lunetta Street, TX 76301'}


]

const GetInTouch = ()=>{
    return <div className="bg-white px-7 py-14 rounded-md ">

    <p className="font-bold text-2xl text-secondaryColor mb-6">Get In Touch</p>
    
    <div >
        
        <div className="  relative flex flex-col gap-y-5">
    <FieldDefault fullWidth placeholder="Your Email"  />
    <FieldDefault fullWidth dropdownEnabled placeholder="Subject"  />
    <FieldDefault fullWidth messageField  placeholder="Message"  />
    </div>
    
    
    </div>
    
    <div className="flex justify-end mt-8">
        <ButtonText text="Submit Now"/>
    </div>
    
    
    </div>
}




export default function Contact(){



    return(
        <div className="bg-mainBackground">

<div >


{/* CHECKKKKK */}


<Navbar/>


{/* CHECKKKKK */}




<DifferentPagesHeroSect heading="Contact" para="Agency provides a full service range including technical skills, design, business understanding." />

</div>


<div className="hidden lg:block">

<div className="rounded-md  h-[700px] flex items-center pl-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(/Map-Desktop.png)`}}>
    

<div className="w-[470px] h-[464px] ">

<GetInTouch/>

</div>



</div>


</div>


<div className="commonPadding xl:commonPaddingDesktop mt-16  ">


<div  className=" lg:hidden">


{/*  */}
<GetInTouch/>

{/*  */}


<div className="rounded-md mt-10 flex items-center justify-center h-[700px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(/Map.png)`}}>
    

</div>

</div>







{/*  */}
<div >
<div className="check rounded-md my-8 lg:flex ">

{infoArray.map((elem,index)=>{
    return <div className="sm:flex-grow pl-7 pr-4 py-8 border-b border-[#F3D1BF] last:border-none sm:border-r sm:last:border-none ">

<div className="flex items-center gap-x-6 mb-7 border-none">
    <div className="w-16 h-16 rounded-full bg-primaryColor flex items-center justify-center text-white text-2xl">

{elem.icon}

    </div>
    <p className="text-primaryColor uppercase">{elem.text}</p>
</div>



<p className="text-secondaryColor text-xl">{elem.secondaryText}</p>

    </div>
})}


</div>
</div>

{/*  */}





{/*  */}
<div >
<FAQ  primary />
</div>
{/*  */}

<Footer/>

{/*  */}



</div>









        </div>
    )
}