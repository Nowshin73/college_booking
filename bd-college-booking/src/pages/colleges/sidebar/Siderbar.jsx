import React, { useState } from 'react'
import ActiveLink from '../../../components/navbar/ActiveLink'
import ActiveSideLink from './ActiveSideLink'

function Siderbar({ colleges }) {
    const [category, setCategory] = useState([]);
   
    return (
        <>
            <div className="tab">
                <button className="tablinks p-5 " onClick="openCity(event, 'All')">All Colleges</button>
                <button className="tablinks p-5" onClick="openCity(event, 'Medical')">Medical College</button>
                <button className="tablinks p-5" onClick="openCity(event, 'Engg')">Engineering College</button>
                <button className="tablinks p-5" onClick="openCity(event, 'Fasion')">Fasion & Design</button>
            </div>

            <div id="All" className="tabcontent">
                <h3>London</h3>
                <p>London is the capital city of England.</p>
            </div>

            <div id="Medical" className="tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital of France.</p>
            </div>

            <div id="Engg" className="tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital of Japan.</p>
            </div>
            <div id="Fasion" className="tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital of Japan.</p>
            </div>

        </>
    )
}

export default Siderbar