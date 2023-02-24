import Checkbox from '@/components/smallcomponents/Checkbox'
import { ButtonIcon, ButtonText } from '@/components/smallcomponents/CommonButtons'
import FieldDefault from '@/components/smallcomponents/FieldDefault'
import RadioButton from '@/components/smallcomponents/RadioButton'

export default function Test(){

return(
    <div>

<FieldDefault/>

<FieldDefault  dropdownEnabled />


<RadioButton/>

<ButtonText/>

<div className='my-8'></div>

<ButtonText secondaryText/>


<ButtonIcon/>


<ButtonIcon secondaryIcon/>



<Checkbox/>


    </div>
)

}