import React, {useContext} from 'react'
import { Context } from './context/context'
import GoogleLoginAuth from './authentication/googleLogin'
const LandingPage =()=> {
    const {coloby} = useContext(Context)
  return (
    <div className='ml-10 mt-5'>

   <GoogleLoginAuth/>
    </div>

  )
}
export default LandingPage