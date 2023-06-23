import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { validationSchema } from "../../utils/validation"
import { AiFillCloseCircle } from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'


const Update = ({ name, description, lay, duedate, status, id, Rerenderdata, togglepopup }) => {

  // initialvalues
  const initialValues = {
    name: name,
    description: description,
    duedate: duedate,
    status: status
  }

  const notify = () => toast.success('👍 Updated Successfully !', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

  const deleteNotification = () => toast.error('⚠️ Deleted Successfully!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })


  // updating data 
  const handleSubmit = (values, { resetForm }) => {
    axios.put(`http://localhost:3001/update-task/${id}`, values, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
    notify()
    Rerenderdata()

    // doing this bcz notifications need time other it will dont show
    setTimeout(() => {
      togglepopup(false)
    }, 1500)
  }



  // deleting data
  function deleteTask() {
    axios.delete(`http://localhost:3001/delete-task/${id}`)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error:', error)
      })

    deleteNotification()
    setTimeout(() => {
      togglepopup(false)
    }, 1500)
  }


  return (
    <div id="task-form">
      <h2>Create a New Task <AiFillCloseCircle style={{ color: "red" }} onClick={() => { togglepopup(false) }} /> </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="task-name">Task Name:</label>
            <Field type="text" id="task-name" name="name" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="task-description">Task Description:</label>
            <Field as="textarea" id="task-description" name="description" />
            <ErrorMessage name="description" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="due-date">Due Date:</label>
            <Field type="date" id="due-date" name="duedate" />
            <ErrorMessage name="dueDate" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <Field as="select" id="status" name="status">
              <option value="TODO">Todo</option>
              <option value="ONGOING">On-going</option>
              <option value="ONHOLD">On-hold</option>
              <option value="COMPLETED" >Completed</option>
            </Field>
          </div>




          <div className="form-group">
            <button type="submit" id="update" style={{ background: "orange", marginBottom: "1rem", cursor: "pointer" }}>Update Task</button>
            <span onClick={() => deleteTask()} id='delete' style={{ background: "red" }}>Delete Task</span>
          </div>
        </Form>
      </Formik>

      {
        lay ? <>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <ToastContainer />
        </>
          : null
      }

    </div>

  )
}

export default Update
