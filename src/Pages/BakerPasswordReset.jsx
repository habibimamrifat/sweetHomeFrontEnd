import React from 'react'
import PasswordReset from '../SharedComponents/PasswordReset'

const BakerPasswordReset = () => {
    
  return (
    <div>
       <h2 className=' text-center text-5xl text-white mt-10'>Baker psassword Change</h2>

      <PasswordReset
      position={"baker"}/>
    </div>
  )
}

export default BakerPasswordReset
