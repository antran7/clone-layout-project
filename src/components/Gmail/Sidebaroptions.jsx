import React from 'react'
import './Sidebaroptions.css'

function Sidebaroptions({Icon,title,number, isactive}){
  return (
    <div className={`SidebarOptions ${isactive && 'SidebarOptions--active'}`}>
      <Icon/>
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  )
}

export default Sidebaroptions
