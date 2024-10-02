import React from 'react'
import { AccountBox, Dashboard, Favorite, InsertDriveFile, LocalOffer, LocalShipping, Logout, Notifications, Person, Settings, ShoppingCart, StackedLineChart } from '@mui/icons-material'


const sideBar = () => {
  return (
    <div className='sideBar w-1/6 border-x min-h-[100vh] bg-white '>
        <div className="top h-[50px] flex items-center justify-center">
            <span className='logo text-base font-bold text-blue-800'>My Admin</span>
        </div>
        <hr className='h-[1px] border-x'/>
        <div className="center p-[10px]" >
          <ul>
            <p className="text-xs font-bold mt-[15px] text-[#999] mb-[5px]">Main</p>
            <li className='liStyle'><Dashboard className='size-[10px] text-[#7451f8]'/><span>Dashboard</span></li>
            <p className="text-xs font-bold mt-[15px] text-[#999] mb-[5px]">Lists</p>
            <li className='liStyle'><Person className='size-[10px] text-[#7451f8]'/> <span>Users</span></li>
            <li className='liStyle'><LocalOffer className='size-[10px] text-[#7451f8]'/><span>Products</span></li>
            <li className='liStyle'><ShoppingCart className='size-[10px] text-[#7451f8]'/><span>Orders</span></li>
            <li className='liStyle'><LocalShipping className='size-[10px] text-[#7451f8]'/><span>Delivery</span></li>
            <p className="text-xs font-bold mt-[15px] text-[#999] mb-[5px]">Useful Links</p>
            <li className='liStyle'><StackedLineChart className='size-[10px] text-[#7451f8]'/><span>Stats</span></li>
            <li className='liStyle'><Notifications className='size-[10px] text-[#7451f8]'/><span>Notification</span></li>
            <li className='liStyle'><Favorite className='size-[10px] text-[#7451f8]'/><span>System health</span></li>
            <li className='liStyle'><InsertDriveFile className='size-[10px] text-[#7451f8]'/><span>Logs</span></li>
            <li className='liStyle'><Settings className='size-[10px] text-[#7451f8]'/><span>Settings</span></li>
            <li className='liStyle'><AccountBox className='size-[10px] text-[#7451f8]'/><span>Profile</span></li>
            <li className='liStyle'><Logout className='size-[10px] text-[#7451f8]'/><span>Logout</span></li>
          </ul>
        </div>
        <div className="bottom">color option</div>
    </div>
  )
}

export default sideBar