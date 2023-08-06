import React from 'react'
import StudentData from './StudentData'
import { useNavigate } from 'react-router-dom'

const Student = () => {
  const navigate=useNavigate();
  return (
    <>
    <div  className='Stu_Contanier'>
        <h1>Student's Details</h1>
        <div>
        <button onClick={()=>navigate('/addnewstudent')} className='stdbtn'>Add New Student</button>
        </div>
    </div>
    <StudentData/>
    </>
  )
}

export default Student