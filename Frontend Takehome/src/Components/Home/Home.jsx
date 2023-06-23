import React from 'react'
import "./Home.css"
import Sidebars from '../SIdebar/Sidebars'
import TaskForm from '../Task'
import { Outlet } from 'react-router-dom'
function Home() {
    return (
        <>
            <div className="main-container">
                <div className="side">
                    <Sidebars />
                </div>
                <div className='Task_bar'>
                   <Outlet/>
                </div>
            </div>

        </>
    )
}

export default Home