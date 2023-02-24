import { FaAngleDown, FaAngleUp } from "react-icons/fa"

export const OurStats = ()=>{

    return <div className="lg:flex mt-16 sm:[&>*]:border-r-[1px] sm:[&>*]:border-[#F3D1BF]   check rounded-md text-[#391400]  " >


    <div className="px-12 sm:flex-grow h-[175px] flex flex-col justify-center"> 
            <p className="text-[40px] leading-[48px]  font-extrabold">42%</p>
            <p className="text-xl mt-3 leading-8">Years of experience</p>
    </div>
    
    <div className="px-12 sm:flex-grow h-[175px] flex flex-col justify-center"> 
            <p className="text-[40px] leading-[48px]  font-extrabold">73+</p>
            <p className="text-xl mt-3 leading-8">Agency Members</p>
    </div>
    
    <div className="px-12 sm:flex-grow h-[175px] flex flex-col justify-center"> 
            <p className="text-[40px] leading-[48px]  font-extrabold">5,000</p>
            <p className="text-xl mt-3 leading-8">Projects Complete</p>
    </div>
    
    
    </div>

}



export const BrandsWeWorkedWith = ()=>{
        return     <div className=" flex gap-x-10 gap-y-5 items-center flex-wrap justify-center ">
        

        <div>
            <img  src="/logos/Bitmap.png"  />
        </div>

        <div>
            <img  src="/logos/Bitmap-1.png"  />
        </div>

        <div>
            <img  src="/logos/Bitmap-2.png"  />
        </div>


        <div>
            <img  src="/logos/Bitmap-3.png"  />
        </div>

        <div>
            <img  src="/logos/Bitmap-4.png"  />
        </div>



    </div>
}



export const FAQ = ({primary,desktopColumn}) =>{
        return <div className={` xl:flex  ${desktopColumn&&'sm:flex-col w-2/3 mx-auto'}   sm:gap-x-32 `}>

        <div className={`w-full ${primary?'text-secondaryColor':'text-white'} `} >
        
        <p className="text-primaryColor ">FAQ</p>
        
        <h1 className="sm:text-4xl text-commonHeading my-4  leading-mediumLineHeight sm:mt-4 sm:mb-8 font-extrabold">Frequently Asked Questions</h1>
        
        
        <p >A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
        
        <div className="sm:mt-12 mt-8 mb-9 ">
        <a href="#!">Contact Us</a>
        </div>
        
        
        
        </div>
        
        <div className="check rounded-md w-full ">
        
        <div className="  px-7 py-10 bg-white rounded-t-md">
            <div className="flex gap-x-4">
                <p className={`text-secondaryColor leading-8 font-bold text-2xl`}>A digital agency is a business</p>
                <div style={{minWidth:'32px',height:'32px'}} className="sm:ml-auto flex items-center justify-center text-white text-xl rounded-full bg-primaryBackground">
                    
                    <FaAngleUp/>

                </div>
            </div>
        
        
        <p className={`text-secondaryText leading-8 mt-5`}>Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.</p>
        
        </div>
        
        
        {[1,2,3].map(()=>{
            return <div className="py-10 px-7">
                <div className="flex gap-x-4">
                    <p className={`${primary?'text-secondaryText':'text-white'} leading-8 font-bold text-2xl`}>Hire to outsource your digital</p>
                    <div style={{minWidth:'32px',height:'32px'}} className="sm:ml-auto flex items-center  justify-center text-white text-xl  bg-primaryBackground rounded-full">
                        <FaAngleDown/>
                    </div>
                </div>
            </div>
        })}
        
        
        
        
        </div>
        
        
        
        
        </div>
}


export const DifferentPagesHeroSect = ({heading,para})=>{

    return <> <div className="bg-blackAlike commonPadding py-4">

    <div className="text-center">


    <p className="font-extrabold text-white leading-commonLineHeightDesktop text-commonHeadingDesktop">{heading}</p>
    
    <p style={{color:'rgba(255, 255, 255, 0.64)'}}>{para}</p>
    

    </div>
    </div>








    </>


}


export const HowWeWork = ()=>{
    return (
<div>
        
        <p className="uppercase text-primaryColor   leading-8 tracking-[3px]">How we work</p>
        
        <div className="lg:flex lg:gap-x-24 ">
        
        <div className="w-full lg:w-1/2">
        
        
        
        <h1 className="sm:mt-4 sm:mb-5 sm:text-4xl text-commonHeading font-extrabold text-secondaryColor leading-mediumLineHeight my-4 sm:leading-[48px] sm:font-bold">Making Your Projects Look Awesome</h1>
        
        <p className="text-secondaryText mb-8">Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.</p>
        
        <div className="sm:mt-7">
        <a href="#!" >Read More</a>
        </div>
        
        
        </div>
        
        
        <div className="text-[#391400] flex flex-col w-full lg:w-1/2 py-20 lg:pt-5">
        
        <div className="flex  gap-x-4 sm:gap-x-7 items-center ">
                <span style={{minWidth:'55px'}} className="leading-[80px]  text-[72px] font-extrabold tracking-[-2px]">1</span>
                <p className="leading-[32px] text-2xl font-bold">Full service range including</p>
        </div>
        
        <div className="flex  gap-x-4 sm:gap-x-7 items-center ">
                <span style={{minWidth:'55px'}} className="leading-[80px]  text-[72px] font-extrabold tracking-[-2px]">2</span>
                <p className="leading-[32px] text-2xl font-bold">Technical skills, design, business</p>
        </div>
        
        <div className="flex  gap-x-4 sm:gap-x-7 items-center ">
                <span style={{minWidth:'55px'}} className="leading-[80px]  text-[72px] font-extrabold tracking-[-2px]">3</span>
                <p className="leading-[32px] text-2xl font-bold">Themselves in the merchant's</p>
        </div>
        
        {/* <div className="flex bg-red-500 ">
                <span >2</span>
                <p >Technical skills, design, business</p>
        </div>
        
        <div className="flex bg-red-500 ">
                <span >3</span>
                <p >Themselves in the merchant's</p>
        </div> */}
        
        
        
        </div>
        

        </div>
        
        
        </div>
    )
}
