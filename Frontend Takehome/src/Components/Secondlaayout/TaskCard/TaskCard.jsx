import React, { useState, useEffect } from 'react'
import Update from '../../Update/Update'
import './TaskCard.css'

function TaskCard() {
  const [data, setData] = useState([])
  const [selectedValue, setSelectedValue] = useState('low')
  const [updatetoggle, setUpdatetoggle] = useState(false)
  const [selectedTaskData, setSelectedTaskData] = useState({})

  async function fetchData() {
    const response = await fetch('http://localhost:3001/get-all-tasks')
    const dataFound = await response.json()
    setData(dataFound)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function setSelectedData(value) {
    setSelectedTaskData(value)
    setUpdatetoggle(!updatetoggle)
  }

  function handleSelectChange(event) {
    const value = event.target.value
    setSelectedValue(value)

    let arraydata
    fetch('http://localhost:3001/get-all-tasks')
      .then((response) => response.json())
      .then((dataFound) => {
        if (value === 'low') {
          arraydata = dataFound.filter((datavalue) => {
            return datavalue.status === 'ONHOLD'
          })
        } else if (value === 'medium') {
          arraydata = dataFound.filter((datavalue) => {
            return datavalue.status === 'TODO'
          })
        } else if (value === 'high') {
          arraydata = dataFound.filter((datavalue) => {
            return datavalue.status === 'ONGOING'
          })
        } else {
          fetchData()
          return
        }

        setData(arraydata)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  return (
    <>
      <div className="filter-drop">
        <select id="filter-select" value={selectedValue} onChange={handleSelectChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="all">All Task</option>
        </select>
        <p>Selected value: {selectedValue}</p>
      </div>

      <div className="task-main-container">
        {

          data.map((value) => (
            <div className="task-two-card" key={value.id} onClick={() => setSelectedData(value)}>
              <div className="task-two-name">{value.name}</div>
              <div className="task-two-description">{value.description}</div>
              <div className="due-two-date">Due Date: {value.duedate !== null ? value.duedate.slice(0, 10) : value.duedate}</div>
              <div className="status-two" style={{ color: value.status === 'COMPLETED' ? 'green' : 'orange', fontWeight: 'bold' }}>
                Status: {value.status}
              </div>
            </div>
          ))}
      </div>

      <div className="popoup-two">
        {updatetoggle ? <Update {...selectedTaskData} lay={false} Rerenderdata={fetchData} togglepopup={(data) => setUpdatetoggle(data)} /> : null}
      </div>
    </>
  )
}

export default TaskCard