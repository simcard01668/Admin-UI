import React from 'react'

const sideBar = () => {
  return (
    <div className='sideBar w-1/6 border-x min-h-[100vh] bg-white '>
        <div className="top h-[50px] flex items-center justify-center">
            <span className='logo text-base font-bold text-blue-800'>My Admin</span>
        </div>
        <hr className='h-[1px] border-x'/>
        <div className="center p-[10px]" >
          <ul>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
          </ul>
        </div>
        <div className="bottom">color option</div>
    </div>
  )
}

export default sideBar