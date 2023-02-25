import Footer from "@/components/Footer"
import { BrandsWeWorkedWith, DifferentPagesHeroSect, FAQ, OurStats } from "@/components/smallcomponents/commonComponents"
import Navbar from "@/components/smallcomponents/Navbar"

export default function AboutPage(){


    return(


        <div className="bg-mainBackground">

<Navbar/>


{/* FIRST SECTION */}


<DifferentPagesHeroSect  heading="About Us"  para="Agency provides a full service range including technical skills, design, business understanding." /> 



{/* FIRST SECTION */}



{/* SECOND SECTION */}


{/* <div className="commonPadding sm:commonPaddingTablet xl:commonPaddingDesktop ">

<div className=" sm:flex mt-20 mb-28 ">

<div className="w-full " >

<p className="text-primaryColor">About</p>

<h1 className="leading-mediumLineHeight mt-4 mb-8 font-extrabold text-commonHeading sm:text-commonHeadingDesktop sm:leading-commonLineHeightDesktop">An Experience Design Agency</h1>
</div>


<div className="sm:mt-14 w-full flex flex-col gap-y-10 text-secondaryText">
<p>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>

<p>
A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
</div>

</div>




<div className="sm:flex sm:gap-x-8 ">

<div>
<div className="w-[329px] h-[259px] sm:w-[570px] sm:h-[448px] rounded-md flex justify-center items-center mb-4 bg-cover bg-center bg-no-repeat  " style={{backgroundImage:`url(/AnotherBackground.png)`}}>

<div className="w-36 h-36 rounded-full bg-yellow-300 flex items-center justify-center">
    <p>ppp</p>
</div>

</div>

</div>

<div className="flex flex-wrap gap-4 sm:gap-x-8">

{[1,2,3,4].map(()=>{
    return <div className="w-[156px] h-[120px] sm:w-[270px] sm:h-[208px] rounded-md bg-cover bg-center bg-no-repeat " style={{backgroundImage:`url(/AnotherBackground.png)`}}>    </div>
})}



</div>




    
</div>







</div> */}





{/* SECOND SECTION */}



{/* THIRD SECTION */}


<div className="commonPadding sm:commonPaddingTablet xl:commonPaddingDesktop lg:flex my-24 gap-x-32">


<div className=" lg:w-[40%]">
    <p className="tracking-common text-primaryColor uppercase">Features</p>
    <p className="mt-8 mb-4 text-xl leading-8">Long run, and work as an extension of the merchant's team.</p>
    <p className="text-secondaryText">Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension.</p>
</div>


<div className=" lg:w-[60%] check rounded-md  sm:flex sm:mt-4  sm:[&>*]:border-r-[1px] [&>*]:border-b-[1px] [&>*]:border-[#F3D1BF]    last:sm:[&>*]:border-r-[0px] last:[&>*]:border-b-0">


{[1,2].map((elem,index)=>{
    return <div className="w-full transition hover:bg-white hover:scale-105 px-12 py-12 lg:px-6 lg:py-6   ">


    <div className="w-20 h-20 rounded-full bg-purple-500"></div>

<p className="font-bold mt-10 mb-5">Professional</p>

<p>Full service range including technical skills, design.</p>


    </div>
})}





</div>





</div>


{/* THIRD SECTION */}


{/* FOURTH SECTION */}
<div className="commonPadding sm:commonPaddingTablet xl:commonPaddingDesktop my-20 ">
<OurStats/>
</div>
{/* FOURTH SECTION */}


{/* FIFTH SECTION */}

<div className="commonPadding sm:commonPaddingTablet xl:commonPaddingDesktop bg-blackAlike py-16 flex flex-col gap-y-24">

<FAQ  desktopColumn />


<BrandsWeWorkedWith/>


</div>

{/* FIFTH SECTION */}



<div>

<Footer/>

</div>


        </div>



    )


}