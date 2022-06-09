import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/cartReducer'
import alertify from 'alertifyjs';


const UptadeCart = (OrginalComponent) => {
    const NewComponent = ()=>{

        const dispatch = useDispatch() 

        const handleClick = item =>{
            dispatch(addToCart({...item}))
            alertify.success(`<b>${item.name}</b> '  səbətə əlavə etdiniz'`)
        }


        return(
            <OrginalComponent
            handleClick={handleClick}
            />
        )
    }
    return NewComponent
}

export default UptadeCart
