import React, { useState, useEffect } from 'react'
import './Hold.css'
import Update from '../Update/Update'
import { Box, Paper, Button, Typography, Modal } from '@mui/material'


function Hold({ status }) {

    var value = sessionStorage.getItem("data")


    const [data, SetData] = useState([])
    const [updatetoggle, SetUpdateToggle] = useState(false)
    const [selectedTaskData, setSelectedTaskData] = useState({})
    async function dataget() {
        const datapend = await fetch('http://localhost:3001/get-all-tasks')
        const finaldata = await datapend.json()

        if (status === 'COMPLETED') {
            let Temptasks = []
            for (let i = 0; i < finaldata.length; i++) {
                if (finaldata[i].status === 'COMPLETED') {
                    Temptasks.push(finaldata[i])
                }

            }
            SetData(Temptasks)
        }

        if (status === 'TODO') {
            let Temptasks = []
            for (let i = 0; i < finaldata.length; i++) {
                if (finaldata[i].status === 'TODO') {
                    Temptasks.push(finaldata[i])
                }

            }
            SetData(Temptasks)

        }

        if (status === 'ONGOING') {
            let Temptasks = []
            for (let i = 0; i < finaldata.length; i++) {
                if (finaldata[i].status === 'ONGOING') {
                    Temptasks.push(finaldata[i])
                }

            }
            SetData(Temptasks)
        }


        if (status === 'ONHOLD') {
            let Temptasks = []
            for (let i = 0; i < finaldata.length; i++) {
                if (finaldata[i].status === 'ONHOLD') {
                    Temptasks.push(finaldata[i])
                }
            }
            SetData(Temptasks)

        }

    }

    useEffect(() => {
        dataget()
    }, [data])

    function SetSelectedData(value) {
        setSelectedTaskData(value)
        SetUpdateToggle(!updatetoggle)

    }

    return (
        <>
            <div className="grid-container">
                {

                    (data.map((value) => {
                        return (
                            <>
                                <Box
                                >
                                    <Paper elevation={3}>
                                        <div className="task-card" key={value.id} onClick={() => SetSelectedData(value)}>
                                            <div className="task-name">{value.name}</div>
                                            <div className="task-description">{value.description}</div>
                                            <div className="due-date">Due Date: {value.duedate}</div>
                                            <div className="status" style={{ color: value.status === 'COMPLETED' ? "green" : "orange" }}>Status: {value.status}</div>
                                        </div>
                                    </Paper>
                                </Box>

                            </>)
                    }))
                }
            </div >

            <div className={`popup_container ${updatetoggle ? 'active' : ''}`}>
                {
                    updatetoggle ? <Update {...selectedTaskData} lay={true} Rerenderdata={dataget} togglepopup={(data) => SetUpdateToggle(data)} /> : null
                }
            </div>

        </>
    )
}

export default Hold