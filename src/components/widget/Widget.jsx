import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutline, PersonOutlineOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material'
import React from 'react'

const Widget = ({type}) => {
  let data;

  const amount = 100
  const diff = 20

  if(type ==='user'){
    data= {
      title: "USERS",
      isMoney: false,
      link: "see all user",
      icon:PersonOutline
    }} else if (type === 'order'){
      data= {
        title: "ORDERS",
        isMoney: false,
        link: "see all orders",
        icon:ShoppingCartCheckoutOutlined
      }
    } else if (type === 'earning'){
      data= {
        title: "EARNING",
        isMoney: true,
        link: "see all earning",
        icon:MonetizationOnOutlined
      }
    } else if (type === 'balance'){
      data= {
        title: "BALANCE",
        isMoney: true,
        link: "see all balance",
        icon:AccountBalanceWalletOutlined
      }
    }
  
  return (
    <div className='widget flex flex-1 p-[20px] justify-between myBoxShadow lg:h-[120px] md:h-[150px]'>
      <div className="left flex flex-col justify-between">
        <span className="title font-bold text-[14px] text-[rgba(160,160,160)]">{data.title}</span>
        <span className="counter text-[28px] font-medium">{data.isMoney && '$'}{amount}</span>
        <span className='link underline'>{data.link}</span>
      </div>
      <div className="right flex flex-col justify-between">
        <div className="percentage flex items-center text-[14px] text-green-600">
          <KeyboardArrowUp />20%
        </div>
        {data.icon && <data.icon className="rounded p-[5px] self-end bg-slate-200" sx={{ fontSize: '30px', color: 'gray' }} />}

      </div>
      

    </div>
  )
}

export default Widget