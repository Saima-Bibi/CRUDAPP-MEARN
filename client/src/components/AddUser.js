import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function AddUser() {

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
            [e.target.name]: e.target.value
     } )
    }
    const handleSubmission=async (e)=>{
        e.preventDefault()
        try {
             const  adduser = await axios.post('http://localhost:4000/api/creatUser',value);
             const response = adduser.data;

             if(response.success){
                toast.success(response.message)
             }
             console.log(response)
             
        } catch (error) {
            console.log(error)
        }
   
    }
  return (
    <>
      
      <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form  onSubmit={handleSubmission}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add User</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" style={{marginLeft:'210px'}}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text"  name='name'  className="form-control" value={value.name}  onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Password </label>
                                    <input type="text"  name='password'  className="form-control" value={value.password} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email"  name='email' className="form-control" value={value.email} onChange={handleChange} required />

                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" name='phone' className="form-control" value={value.phone} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add"  data-bs-dismiss="modal"/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}
