import React from 'react'
import './AddStaff.css'
const AddStaff = () => {
  return (
    <div>
      <form action="" className='addStaff'>
      <table>
        <tr>
          <td><input type="text" name='empid' placeholder='Employee ID' /></td>
          <td><input type="text" name='fname' placeholder='First Name' /></td>
          <td colSpan={3}><input type="file" name="profile"  /></td>
        </tr>
        <tr>
          <td><input type="text" name='lname' placeholder='Last Name' /></td>
          <td><input type="text" name='email' placeholder='Email' /></td>
        </tr>
        <tr>
          <td><input type="text" name='Phone' placeholder='Phone' /></td>
          <td><input type="text" name='designation' placeholder='Designation' /></td>
        </tr>
        <tr>
          <td><input type="text" name='address1' placeholder='Address1' /></td>
          <td><input type="text" name='address2' placeholder='Address2' /></td>
          <td><input type="text" name='pin' placeholder='PIN' /></td>
        </tr>
      </table>
      </form>
    </div>
  )
}

export default AddStaff
