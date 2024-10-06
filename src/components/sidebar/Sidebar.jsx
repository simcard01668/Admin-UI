import React from 'react'
import { AccountBox, Dashboard, Favorite, InsertDriveFile, LocalOffer, LocalShipping, Logout, Notifications, Person, Settings, ShoppingCart, StackedLineChart } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const sideBar = () => {
  return (
    <div className='sideBar w-1/6 border-x min-h-[100vh] bg-white min-w-[146px]'>
      <div className="top h-[50px] flex items-center justify-center">
        <Link to="/">
          <span className='logo text-base font-bold text-blue-800'>My Admin</span>
        </Link>
      </div>
      <hr className='h-[1px] border-x' />
      <div className="center p-[10px]" >
        <ul>
          <p className="text-xs font-bold mt-[15px] text-[#999] mb-[5px]">Main</p>
          <Link to="/">
          <li className='liStyle'><Dashboard className='size-[10px] text-[#7451f8]' /><span className='liMargin'>Dashboard</span></li>
          </Link>
          
          <p className="text-xs font-bold mt-[15px] text-[#999] mb-[5px]">Lists</p>
          <Link to="/users">
          <li className='liStyle'><Person className='size-[10px] text-[#7451f8]' /> <span className='liMargin'>Users</span></li>
          </Link>
          <li className='liStyle'><LocalOffer className='size-[10px] text-[#7451f8]' /><Link><span className='liMargin'>Products</span></Link></li>
          <li className='liStyle'><ShoppingCart className='size-[10px] text-[#7451f8]' /><Link><span className='liMargin'>Orders</span></Link></li>
          <li className='liStyle'><LocalShipping className='size-[10px] text-[#7451f8]' /><Link><span className='liMargin'>Delivery</span></Link></li>

          <p className="text-xs font-bold mt-[15px] text-[#999] mb-[5px]">Useful Links</p>
          <li className='liStyle'><StackedLineChart className='size-[10px] text-[#7451f8]' /><Link><span className='liMargin'>Stats</span></Link></li>
          <li className='liStyle'><Notifications className='size-[10px] text-[#7451f8]' /><Link><span className='liMargin'>Notifications</span></Link></li>
          <li className='liStyle'><Favorite className='size-[10px] text-[#7451f8]' /><Link><span className='liMargin'>System health</span></Link></li>
          <li className='liStyle'><InsertDriveFile className='size-[10px] text-[#7451f8]' /><Link><span className='liMargin'>Logs</span></Link></li>
          <li className='liStyle'><Settings className='size-[10px] text-[#7451f8]' /><Link><span className='liMargin'>Settings</span></Link></li>
          <li className='liStyle'><AccountBox className='size-[10px] text-[#7451f8]' /><Link><span className='liMargin'>Profile</span></Link></li>
          <li className='liStyle'><Logout className='size-[10px] text-[#7451f8]' /><Link><span className='liMargin'>Logout</span></Link></li>
        </ul>
      </div>
      <div className="bottom flex items-center m-[10px] gap-1.5">
        <div className="colorOption size-[20px] border-[1px] border-purple-300 bg-gray-100 rounded-[5px] cursor-pointer">

        </div>
        <div className="colorOption size-[20px] border-[1px] border-purple-300 bg-black rounded-[5px] cursor-pointer">

        </div>
        <div className="colorOption size-[20px] border-[1px] border-purple-300 bg-blue-950 rounded-[5px] cursor-pointer">

        </div>
      </div>
    </div>
  )
}

export default sideBar