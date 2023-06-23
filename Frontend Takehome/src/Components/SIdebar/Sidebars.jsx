import React from 'react'
import "./SIdebar.css"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { NavLink ,NavNavLink } from 'react-router-dom'
import {BiTask} from 'react-icons/bi'
import {IoMdDoneAll} from 'react-icons/io'
import {GrInProgress} from 'react-icons/gr'
import {FaHandHolding} from 'react-icons/fa'
import {RiCalendarTodoFill} from 'react-icons/ri'
 
function Sidebars() {
    return (
        <>
            <div className="sidebar">
                <NavLink to="/addtask">
                    <div className="option-one">Add Task <BiTask/></div>
                </NavLink>
                <NavLink to="/onhold">
                    <div className="option-two">HOLD <RiCalendarTodoFill/></div>
                </NavLink>
                <NavLink to="/ongoing">
                    <div className="option-three">GOING <GrInProgress/></div>

                </NavLink>
                <NavLink to="/todo">

                    <div className="option-four">TODO <FaHandHolding/></div>
                </NavLink>
                <NavLink to="/completed">
                    <div className="option-five" style={{fontSize:"15px" , color:"green"}}>Completed <IoMdDoneAll/></div>
                </NavLink>

                <NavLink to="/layout">
                    <div className="option-five" style={{fontSize:"15px" , color:"green"}}>LayoutTwo <IoMdDoneAll/></div>
                </NavLink>

            </div>

        </>
    )
}

export default Sidebars