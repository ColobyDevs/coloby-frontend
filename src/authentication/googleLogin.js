import React, {useEffect, useState} from 'react'
import { jwtDecode } from 'jwt-decode'


function GoogleLoginAuth({type}) {

    const btnLabel = type === 'login' && 'Continue with Google' || type === 'signin' && 'Sign up with Google'

const [currLocation, setCurrLocation] = useState()



function handleCallBackResponse(response){
  console.log(response, response.credential);
    const decoded = jwtDecode(response.credential)
    console.log(decoded);
}
useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
        client_id: '668444211742-f4kiimq957krf5t62hmbkjgo56ejpo9k.apps.googleusercontent.com',
        callback: handleCallBackResponse
    })
    google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        {theme: 'outline', size:'large'}
    )
}, [])



  
  return (

    <div>

      <div id = 'signInDiv'>Sign In</div>
    </div>
  )
}
export default GoogleLoginAuth