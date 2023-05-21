import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"


const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <div className='text-[14px] max-w-[250px] rounded placeholder:text-gray-400 bg-sky-100 pl-2 border border-black flex items-center gap-1'>
            <MagnifyingGlassIcon className='w-4' />
            <input className='border-none w-full p-1 bg-transparent focus:ring-0' type="text" value={filter || ""} onChange={(e) => setFilter(e.target.value)} placeholder="Search.." />
        </div>
    )
}

export default GlobalFilter