import React from 'react'
import './Emailist.css'
import EmailSetting from './EmailSetting'
import Emailtype from './Emailtype'
import Emailbody from './Emailbody'

function Emailist() {
  return (
    <div className='emaillist'>
      <EmailSetting />
      <Emailtype />
      <Emailbody name="Vercel "  message="Deploy your project today " time="9:00 AM
      " />
      <Emailbody name="Discord  "  message="Bạn đã bỏ lỡ tin nhắn trong Samland 🎮 " time="10:00 AM
      " />
      <Emailbody name="Facebook "  message="Bạn có tin nhắn chưa đọc" time="12:00 AM" />
      <Emailbody name="Instagram "  message="Bạn có 1 thông báo mới " time="18:00 PM " />
      <Emailbody name="Youtube"  message="Mixigaming đã đăng 1 video mới." time="1:00 PM " />



    </div>
  )
}

export default Emailist
