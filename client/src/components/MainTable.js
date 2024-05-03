import React from 'react'
import Table from './Table'
import AddUser from './AddUser'

import DeleteUser from './DeleteUser'
import UpdateUser from './UpdateUser'
export default function MainTable() {
  return (
    <>
      <Table></Table>
      <AddUser></AddUser>
      <UpdateUser></UpdateUser>
      <DeleteUser></DeleteUser>
   
    </>
  )
}
