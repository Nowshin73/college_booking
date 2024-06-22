import React, { useState } from 'react'
import ActiveLink from '../../../components/navbar/ActiveLink'
import ActiveSideLink from './ActiveSideLink'

function Siderbar({ colleges }) {
    const [category, setCategory] = useState([]);

    return (
        <>
            <div className='sidebar flex flex-col w-[20%] bg-white shadow-md text-black font-semibold'>
                <button className='p-5' onClick={() => Category("All")}>All Colleges</button>
                <button className='p-5' onClick={() => Category("Medical")}> Medical Colleges</button>
                <button className='p-5' onClick={() => Category("Engineering")}> Engineering Colleges</button>
                <button className='p-5' onClick={() => Category("Fasion")}>Fasion & Design</button>
            </div>
        </>
    )
}

export default Siderbar