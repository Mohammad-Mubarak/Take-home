import React, { useState } from "react"
import Sidebar from "react-sidebar"

const Try = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open)
    }

    return (
        <Sidebar
            sidebar={<div> <h1>on hold</h1> <h2>on going</h2></div>}
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
        >
            <button onClick={() => onSetSidebarOpen(true)}>Open sidebar</button>

        </Sidebar>
    )
}

export default Try
