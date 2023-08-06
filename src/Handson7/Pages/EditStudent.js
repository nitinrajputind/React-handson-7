import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { EditedStudent } from '../../features/StudentSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EditStudent = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const data=useLocation();
    const studentId=data.state;
    console.log(studentId);
    const stdData=useSelector((state)=>state.Student.filter((item)=>item.id===studentId));
    const {Name,Age,Batch,Course}=stdData[0];

    const [newName,setName]=useState(Name)
    const [newAge,setAge]=useState(Age)
    const [newBatch,setBatch]=useState(Batch)
    const [newCourse,setCourse]=useState(Course)

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(EditedStudent({
            id:studentId,
            newName,
            newAge,
            newBatch,
            newCourse
        }))
        navigate('/student');
        
        // console.log(Name);
        // console.log(Age);
        // console.log(Batch);
        // console.log(Course);

    }
  return (
    <div className='form'>
    <h1 className='heading'>Edit Student</h1>

    <form onSubmit={handleSubmit} className='form'>
      <div className="Form_Contanier">
        <div className="Form_item">
        <label>Name</label>
        <input type='text' value={newName} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="Form_item">
        <label>Age</label>
        <input type='number' value={newAge} onChange={(e)=>setAge(e.target.value)}/>
        </div>
      </div>
      <div className="Form_Contanier">
        <div className="Form_item">
        <label>Batch</label>
        <input type='text' value={newBatch} onChange={(e)=>setBatch(e.target.value)}/>
        </div>
        <div className="Form_item">
        <label>Course</label>
        <input type='text' value={newCourse} onChange={(e)=>setCourse(e.target.value)}/>
        </div>
      </div>
        
        <div className="btn">
          <input type='submit' value='Edit'/>
        <input type='submit' value='cance'/>
        </div>
    </form>
    </div>
  )
}

export default EditStudent