import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddStudent } from '../../features/StudentSlice';

import { useNavigate } from 'react-router-dom';


const AddNewStudent = () => {
  const studentList=useSelector((state)=>state.Student);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [Name,setName]=useState('')
    const [Age,setAge]=useState('')
    const [Batch,setBatch]=useState('')
    const [Course,setCourse]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
     
        dispatch(AddStudent({
            Id:studentList.length,
            Name,
            Age,
            Batch,
            Course
        }))
        setName('');
        setAge('');
        setBatch('');
        setCourse('');
        navigate('/student');
        
    }
  return (

    <div className='form'>
    <h1 className='heading'>New Student</h1>


    <form onSubmit={handleSubmit} className='form'>
      <div className="Form_Contanier">
        <div className="Form_item">
          <label htmlFor="name">Name</label>
          <input type='text' value={Name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="Form_item">
          <label>Age</label>
          <input type='number' value={Age} onChange={(e)=>setAge(e.target.value)}/>
        </div>
      </div>

      <div className="Form_Contanier">
        <div className="Form_item">
          <label>Batch</label>
          <input type='text' value={Batch} onChange={(e)=>setBatch(e.target.value)}/>
        </div>
        <div className="Form_item">
          <label>Course</label>
          <input type='text' value={Course} onChange={(e)=>setCourse(e.target.value)}/>
        </div>
      </div>
      <div className="btn">
        <input type='submit' value='submit'/>
        <input type='submit' value='Cancel'/>
      </div>
      
    </form>

    </div>
  )
}

export default AddNewStudent