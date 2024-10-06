import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/navbar'
import Datatable from '../../components/datatable/Datatable'

const List = () => {
  return (
    <div className='list flex'>
      <SideBar />
      <div className="listContainer w-5/6">
        <Navbar />
        <div className="m-[20px]">
          <Datatable />
        </div>
      </div>
    </div>
  )
}

export default List