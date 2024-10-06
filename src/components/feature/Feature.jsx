import { ArrowDownwardOutlined, ExpandCircleDown, KeyboardArrowDown } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import React from 'react'

const Feature = () => {
  return (
    <div className='flex-[1] myBoxShadow p-[10px] justify-center flex items-center flex-col'>
        <div className="top flex justify-between items-center p-[10px] gap-[10px]">
            <h1 className="title text-[15px] text-gray-500 font-bold">Total Revenue</h1>
            <ExpandCircleDown />
        </div>

        <div className="middle flex flex-col items-center gap-[10px] mb-[10px]">
            <CircularProgressbar value={70} text={"70%"} className="progress size-[220px]" strokeWidth={4}/>
            <p className="text-[14px] font-medium">Totale sales made today</p>
            <span className="revenue text-[30px] font-bold">$2,415</span>
            <span className="revenue text-[12px] font-medium text-center text-gray-500">Previous transaction still processing. Late payment may not be taken into account</span>
        </div>
        <div className="bottom flex justify-around items-center gap-10">
            <div className="flex items-center flex-col">
                <span className="text-[13px] text-gray-500">Profits</span>
                <span className="text-[13px] text-gray-500"><KeyboardArrowDown/>$2,415</span>
            </div>
            <div className="flex items-center flex-col">
                <span className="text-[13px] text-gray-500">Cost</span>
                <span className="text-[13px] text-gray-500"><KeyboardArrowDown/>$12,415</span>
            </div>
            <div className="flex items-center flex-col">
                <span className="text-[13px] text-gray-500">Last Month</span>
                <span className="text-[13px] text-red-500"><KeyboardArrowDown/>$2,415</span>
            </div>
        </div>
    </div>
  )
}

export default Feature