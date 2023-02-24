import { FaAngleDown } from "react-icons/fa"

export default function FieldDefault({dropdownEnabled,labelEnabled,fullWidth,placeholder,messageField}){


        const commonClassNames = `pt-1 flex items-center  w-full outline-none leading-8`


    return (


        <div className={`  ${fullWidth?'w-full':'w-[270px]'}   `}>

{labelEnabled&&
<p className="uppercase dark:hidden text-[#391400] mb-4 text-xs font-bold leading-3	">label</p>
}

<div className="w-full rounded-md pl-4 pr-2 py-1.5  flex border-[1px]  border-solid border-[#F3D1BF] dark:border-none  bg-white items-center" >


{messageField?        


<textarea  type="text" placeholder={placeholder?placeholder:'Placeholder'} className={`${commonClassNames}     h-24 resize-none `} style={{color:'rgba(57, 20, 0, 0.64)'}}   />


                :


<input  type="text" placeholder={placeholder?placeholder:'Placeholder'} className={`${commonClassNames}   `} style={{color:'rgba(57, 20, 0, 0.64)'}}   />}







        {dropdownEnabled&&
        
<p className="ml-auto text-primaryColor text-xl ">
        
<FaAngleDown/>

</p>

        }



</div>



        </div>


    )

}


