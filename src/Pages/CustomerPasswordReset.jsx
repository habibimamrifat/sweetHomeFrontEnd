import React from 'react'
import PasswordReset from '../SharedComponents/PasswordReset'

const CustomerPasswordReset = () => {
  return (
    <div>
     <h2 className=' text-center text-2xl lg:text-5xl text-white mt-10'>Customer psassword Change</h2>
      <PasswordReset
      position={"customer"}/>
    </div>
  )
}

export default CustomerPasswordReset
