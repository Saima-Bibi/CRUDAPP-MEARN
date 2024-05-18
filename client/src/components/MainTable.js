import React from 'react'
import Table from './Table'
import AddUser from './AddUser'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'
import { useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'



export default function MainTable() {
  const [deletedUserId,setDeletedUserId] = useState()
  const [updatedUserId, setUpdatedUserId] = useState()
   // console.log(updatedUserId)
  const[value, setValue] = useState({
    name:'',
    password:'',
    email:'',
    phone: ''
 }
 )
 
const handleChange =(e)=>{
  setValue({

      ...value,
      [e.target.name]:e.target.value
  }
     
  )
}

const UpadteUserData =async (Updatedid) => {
  const res = await axios.get(`http://localhost:4000/api/read/${Updatedid}`);
  console.log(res);
  setValue({
    name: res.data.name,
    password: res.data.password,
    email: res.data.email,
    phone:res.data.phone,
  });
  setUpdatedUserId(Updatedid)
  
}

const DeletedUser = (Deletedid) =>{
    setDeletedUserId(Deletedid)

}







 const handleSubmission =async(e)=>{
  e.preventDefault()
  try {
    const updatedUser = await axios.put(`http://localhost:4000/api/updateUser/${updatedUserId}`,value)
    const response = updatedUser.data
    if (response.success) {
      toast.success(response.message)
  }
   // console.log(response)
  } catch (error) {
    console.log(error)
  }
}
const handleDelete =async()=>{
try {
  const deleteUser = await axios.delete(`http://localhost:4000/api/deleteUser/${deletedUserId}`)
  const response = deleteUser.data
  if(response.success){
    toast.success(response.message)
  }
} catch (error) {
  
}
}
  
   
  return (
    <>
      <Table UpdatedUser={UpadteUserData} DeletedUser={DeletedUser}></Table>
      <AddUser></AddUser>
      <UpdateUser value={value} handleChange={handleChange} handleSubmission= {handleSubmission} ></UpdateUser>
      <DeleteUser handleDelete= {handleDelete}></DeleteUser>
   
    </>
  )
}
