import React from 'react'
import Dropdown from './dropdowns/Dropdown'

const Navbar = () => {

    const logoutHandler = () => { }
    
    return (
        <>
            <div className='border-b bg-cblue flex justify-between items-center p-2 sm:p-4'>
                <div className='text-center text-white'>
                    <h1 className='text-2xl'>Data</h1>
                </div>
                <Dropdown logoutHandler={logoutHandler} />
            </div>
        </>
    )
}

export default Navbar