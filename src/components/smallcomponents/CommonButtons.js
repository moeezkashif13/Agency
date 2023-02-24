export const ButtonText = ({secondaryText,text})=>{
    return(
        <button className={`${secondaryText?'bg-white' : 'bg-primaryBackground dark:bg-darkPrimaryBackground'}
        
dark:text-white
uppercase
        dark:border-solid dark:border-2 dark:border-[#ffffff4b]

        flex justify-center items-center rounded-md py-4 px-6 text-sm font-black ${secondaryText?'text-black':'text-white'}`} style={{boxShadow:
        
            secondaryText?'boxShadow: 0px 3px 9px 0px #39140014' : 'none'
        
        }}>

{text}

        </button>
    )
}

export const ButtonIcon = ({secondaryIcon})=>{

return(
    <div className={`w-12 h-12 rounded-full ${secondaryIcon?'bg-none':'bg-primaryBackground dark:bg-darkPrimaryBackground'} 
    
    dark:border-solid dark:border-2 dark:border-[#ffffff4b]
    
    `} style={{boxShadow:secondaryIcon?'0px 3px 9px 0px #39140014    ':'none'}}  ></div>
)

}