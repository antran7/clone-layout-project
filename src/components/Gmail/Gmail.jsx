import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Emailist from './Emailist'
const Gmail = () => {
  return (
    <div className="App">
        <Header/>  
        <div className="app_body">
        <Sidebar/>
        <Emailist/>
        
        </div>
        
    </div>
  )
}

export default Gmail
