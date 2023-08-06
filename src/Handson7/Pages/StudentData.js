import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const StudentData = () => {
    const navigate=useNavigate();
    const data=useSelector((state)=>state.Student);
    // console.log(data)
  return (
    <div>
        {
          <table className='table'>

          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Batch</td>
              <td>Course</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Batch}</td>
                <td>{item.Course}</td>
                <td>
                  <button
                    onClick={() => {
                      const id = item.id;
                      navigate('/editstudent', { state: id });
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        }
    </div>
  )
}

export default StudentData