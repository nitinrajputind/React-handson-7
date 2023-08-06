import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../features/StudentSlice";


export default configureStore({
reducer:{
    Student:StudentSlice,
  
 }
})