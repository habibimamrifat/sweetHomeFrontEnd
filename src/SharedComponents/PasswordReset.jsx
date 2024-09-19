import React, { useRef, useState } from 'react'
import NormalCard from "./NormalCard"
import { ButtonWhiteSubmit } from './ButtonAndText'
import PassResetFindCustomer from '../Utility/PassResetFindCustomer'
import ChangePassword from '../Utility/ChangePassword'


const PasswordReset = ({position}) => {

  const [newPasswordField,setNewPasswordField]= useState(false)
  const newPassword = useRef(null)
  const userId = useRef(null)

  const userRefrance = useRef({
    email:null,
    mobileNo:null
  })

  const gatherInput =(e)=>{
    const {name,value}=e.target
    userRefrance.current[name]=value
    console.log(name, value)
  }

  const handlePasswordReset =async (e)=>
  {
    e.preventDefault()

    const targetCustomer= await PassResetFindCustomer(position,userRefrance.current.email, userRefrance.current.mobileNo)
    if(targetCustomer)
    {
      setNewPasswordField(true)
      userId.current= targetCustomer._id
    }
    else{
      alert("your information didnyt match any data")
    }
  }

  const gatherNewPasswordInput = (e)=>
  {
    newPassword.current = e.target.value
    // console.log(newPassword.current)
  }

  const updatePassword  = async (e)=>
  {
    e.preventDefault()
    console.log("updated" ,position,userId.current,newPassword.current)
    const passwordChanged = await ChangePassword(position,userId.current,newPassword.current)

    console.log("password change", passwordChanged)

  }

  return (
   <div>
    {
      newPasswordField ?
      (
        <form className=" w-[95%] lg:w-[75%] mt-5 mx-auto" onSubmit={updatePassword}>

        <NormalCard>
          <div className="p-2 lg:p-10 flex flex-col gap-5">

            <div className="flex justify-between items-center">
              <i>
                <h2 className="lg:text-[24px] font-semibold text-white">
                  New Password:
                </h2>
              </i>
              <input
              name='newPassword'
                type="password"
                required
                className="w-[70%] lg:h-12 bg-transparent border-b-2 rounded-lg border-white text-white pl-2 outline-none font-bold italic"
    
                onChange={gatherNewPasswordInput}
              />
            </div>
    
            <div type="submit" className=" w-[75%] lg:w-[25%] lg:h-12 lg:text-[24px] mx-auto mt-7 ">
              <ButtonWhiteSubmit buttonInnerText={"Change Password"} />
            </div>
    
    
          </div>
        </NormalCard>
    
    
      </form>
      )
      :
      (
        <form className=" w-[95%] lg:w-[75%] mt-5 mx-auto" onSubmit={handlePasswordReset}>

        <NormalCard>
          <div className="p-2 lg:p-10 flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <i>
                <h2 className="lg:text-[24px] font-semibold text-white">
                  Email:
                </h2>
              </i>
              <input
              name='email'
                type="text"
                required
                className="w-[70%] lg:h-12 bg-transparent border-b-2 rounded-lg border-white text-white pl-2 outline-none font-bold italic"
    
                onChange={gatherInput}
              />
            </div>
    
            <div className="flex justify-between items-center">
    
              <i>
                <h2 className="lg:text-[24px] font-semibold text-white">
                 Mobile No:
                </h2>
              </i>
    
              <input
              name='mobileNo'
                type="number"
                required
                className="w-[70%] lg:h-12 bg-transparent border-b-2 rounded-lg border-white text-white pl-2 outline-none font-bold italic"
                
                onChange={gatherInput}
              />
            </div>
    
            <div type="submit" className=" w-[75%] lg:w-[25%] lg:h-12 lg:text-[24px] mx-auto mt-7 ">
              <ButtonWhiteSubmit buttonInnerText={"Submit"} />
            </div>
    
    
          </div>
        </NormalCard>
    
    
      </form>
      )
      
    }
   </div>
  )
}

export default PasswordReset
