import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { validationSchema } from "../utils/validation"
import "./Task.css"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'



const TaskForm = () => {

  const initialValues = {
    name: '',
    description: '',
    duedate: '',
    status: 'TODO',
  }

  const notify = () => toast.success('👍 Task Added Successfully !', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

  const handleSubmit = (values, { resetForm }) => {

    axios.post('http://localhost:3001/add-task', values, {
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
    resetForm()
  }


  return (
    <>
      <div id="task-form">
        <h2>Create a New Task</h2>
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
              <ErrorMessage name="duedate" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status:</label>
              <Field as="select" id="status" name="status">
                <option value="TODO">Todo</option>
                <option value="ONGOING">On-going</option>
                <option value="ONHOLD">On-hold</option>
                <option value="COMPLETED">Completed</option>
              </Field>
            </div>

            <div className="form-group">
              <button type="submit" id="create">Create Task</button>
            </div>
          </Form>

        </Formik>
      </div>


      {/* for notifications i used react toastify  */}
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
  )
}

export default TaskForm
