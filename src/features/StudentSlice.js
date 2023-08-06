import { createSlice } from "@reduxjs/toolkit";
import Student from "../Data";

const StudentSlice=createSlice({
    name:'Student',
    initialState:Student,
    reducers:{
        AddStudent:(state,action)=>{
            state.push(action.payload);
        },
        EditedStudent:(state,action)=>{
            const {id,newName,newAge,newCourse,newBatch}=action.payload;
            const existingStudent=state.find((student)=>student.id===id);
                 existingStudent.Name=newName;
                 existingStudent.Age=newAge;
                 existingStudent.Batch=newBatch;
                 existingStudent.Course=newCourse;
                 
        }

    }
})

export default StudentSlice.reducer;
export const {AddStudent,EditedStudent}=StudentSlice.actions