
const PassResetFindCustomer =async (position, email, mobileNo) => {
  console.log(position,email,mobileNo)

  const searchCustomer =async (apiUrl)=>
  {
    const request = await fetch(`http://localhost:5000/${apiUrl}`,
        {
            method:"POST",
            headers:
            {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                mobileNo:mobileNo
            })
        }
    )
    const result = await request.json() 
    return result
  }



  if(position === "customer")
  {
    const apiUrl = "api/v2/customer/passworReset"
    return await searchCustomer(apiUrl)
  }
  else
  {
    const apiUrl = "api/v2/baker/passworReset"
    return await searchCustomer(apiUrl)
  }
    


  
}

export default PassResetFindCustomer
