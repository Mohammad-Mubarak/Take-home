

import Sidebar from './Components/SIdebar/Sidebars'
import './App.css'
import Task from './Components/Task'
import Home from './Components/Home/Home'
import Try from './Components/SIdebar/Try'
import { Route, Router, Routes } from 'react-router-dom'
import Hold from './Components/AllTask/Hold'
import Update from './Components/Update/Update'
import OnHold from './Components/OnHold/OnHold'
import Todo from './Components/Todo/Todo'
import Ongoing from './Components/Going/Ongoing'
import Completed from './Components/Completed/Completed'
import SecondLayout from './Components/Secondlaayout/SecondLayout'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path='/addtask' element={<Task />} />
          <Route path='/onhold' element={<OnHold/>} />
          <Route path='/todo' element={<Todo/>} />
          <Route path='/ongoing' element={<Ongoing/>} />
          <Route path='/completed' element={<Completed/>} />
          <Route path='/layout' element={<SecondLayout/>} />
        </Route>
      </Routes>

   
    </div>
  )
}

export default App
