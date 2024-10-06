import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { DriveFolderUploadOutlined } from '@mui/icons-material'

const New = ({title, input}) => {
  const [file, setFile] = useState("")

  return (
    <div className='flex'>
      <Sidebar/>
      <div className="newContainer w-5/6">
        <Navbar />
        <div className="top myBoxShadow m-[20px] p-[20px]">
          <p className='text-[25px] font-bold'>{title}</p>
        </div>

        <div className="bottom myBoxShadow flex p-[20px] m-[20px]">
          <div className="left w-1/3 flex justify-center">
            <img className="rounded-full size-[100px] object-cover"src={file ? URL.createObjectURL(file) : "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="" />
          </div>

          <div className="right w-2/3">
            <form action="" className=' flex flex-wrap gap-[30px] justify-around'>
            <div className="formInput">
                <label htmlFor="avatarSelector">Image: <DriveFolderUploadOutlined /></label>
                <input id="avatarSelector" type="file" placeholder='Jane Doe' className='hidden' onChange={e=> setFile(e.target.files[0])}/>
              </div>

              {input.map((input) => (
                <div className="formInput" key={input.id}>
                  <label htmlFor={input.label}>{input.label}</label>
                  <input type="text" id={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              {/* <div className="formInput">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='Jane Doe' />
              </div>
              <div className="formInput">
                <label htmlFor="username">Name and Surname</label>
                <input type="text" placeholder='Jane Doe' />
              </div>
              <div className="formInput">
                <label htmlFor="username">Email</label>
                <input type="text" placeholder='Jane@gmail.com' />
              </div>
              <div className="formInput">
                <label htmlFor="username">Mobile</label>
                <input type="text" placeholder='6767' />
              </div>
              <div className="formInput">
                <label htmlFor="username">Password</label>
                <input type="text" placeholder='123' />
              </div>
              <div className="formInput">
                <label htmlFor="username">Address</label>
                <input type="text" placeholder='FLT D' />
              </div>
              <div className="formInput">
                <label htmlFor="username">Country</label>
                <input type="text" placeholder='China' />
              </div> */}
              <button className='bg-blue-500 text-white p-2 rounded w-[20%] self-end'>Create</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default New