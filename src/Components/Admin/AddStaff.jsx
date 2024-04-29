import React, { useState } from 'react'
import './AddStaff.css'
import axios from'axios';
const AddStaff = () => {
const [profile,setProfile]=useState("");
const [image,setImage]=useState(null);

  function converBase64(file){
    return new Promise((res,rej)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            res(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            rej(error)
        }
    })
  }


  const upload=async(e)=>{
    const data=await converBase64(e.target.files[0]);
    setImage(e.target.files[0])
    console.log(image);
    setProfile(data);
  }
  const Submit=async(e)=>{ 
    e.preventDefault();

    console.log(e.target);
    const formData=new FormData(e.target);
    formData.append('image',image)
    const res=await axios.post('http://localhost:3000/api/addstaff',formData,{headers:{"Content-Type":"multipart/formdata"},})
    console.log(res);
  }
  return (
    <div>
      <form action="" onSubmit={Submit}>
      <div className="regParent">
        <div className="regChild1">
          {
            profile!=""?<img src={profile} alt="no image" />:<img src="./images/profile.jpg" alt="no image" />
          }
          {/* <img src="./images/profile.jpg" alt="no image" /> */}
          {/* <img src={profile} alt="no image" /> */}
          
        </div>
        <div className="regChild2">
        <table className='table'>
        <tbody>
        <tr>
        
        <td><input type="text" name='fname' placeholder='First Name' /></td>
        <td><input type="text" name='lname' placeholder='Last Name' /></td>
      </tr>
      <tr>
      <td><input type="text" name='empid' placeholder='Employee ID' /></td>
        <td><input type="text" name='email' placeholder='Email' /></td>
      </tr>
      <tr>
        <td><input type="text" name='phone' placeholder='Phone' /></td>
        <td><input type="text" name='designation' placeholder='Designation' /></td>
      </tr>
      <tr>
        <td><input type="text" name='address' placeholder='Address' /></td>
        {/* <td ><input type="file" name="profile" className='profile'  /></td> */}
        <td><label htmlFor="file-upload">Choose File</label>
<input name='profile' type="file"  id="file-upload" onChange={upload}/></td>
      </tr>
      <tr>
        <td colSpan={2}><button className='regadd'>Add</button></td>
      </tr>
        </tbody>
      </table>
        </div>
      </div>
      </form>
      {/* <form action="" className='addStaff'>
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
      </form> */}
    </div>
  )
}

export default AddStaff
