import React from 'react'

const ChangePassword = async (position , userId, newPassword) => {
 console.log("change Password", position,userId, newPassword)

    const changeUserPassword =async (apiUrl)=>
        {
          const request = await fetch(`http://localhost:5000/${apiUrl}`,
              {
                  method:"PUT",
                  headers:
                  {
                      "Content-Type":"application/json"
                  },
                  body:JSON.stringify({
                      id:userId,
                      newPassword:newPassword
                  })
              }
          )
          const result = await request.json() 
          return result
        }
      
      
      
        if(position === "customer")
        {
          const apiUrl = "api/v2customer/changePassword"
          return await changeUserPassword(apiUrl)
        }
        else
        {
          const apiUrl = "api/v2baker/changePassword"
          return await changeUserPassword(apiUrl)
        }
          
 
}

export default ChangePassword
