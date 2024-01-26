import React from 'react'
import "../../../App.css"
import {useNavigate} from 'react-router-dom'

const NavbarLeft = () => {
    const navigate = useNavigate();
    return (
        <>
            <div onClick={() => navigate('')} className='text-6xl cursor-pointer'>
                ShopZone</div>
        </>
    )
}

export default NavbarLeft