import React, {useState, useContext, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import {Context} from '../context/context'

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [testData, setTestData] = useState('')
    const {token, setToken}= useContext(Context).auth

    const dataFetch = async ()=>{
        try{
            setIsLoading(true)
            const response = await fetch('https://dummyjson.com/quotes')
            const responseData = await response.json()
            console.log(responseData.quotes[2].quote);
            setToken(responseData.quotes[2].quote)
            

        }catch(err){
            console.log(err);
        } finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        dataFetch()
    }, [])
    console.log(token);
  return (
      <>
      {
      isLoading? <p>jjj</p>: <Outlet/>
    }
      </>
  )
}

export default PersistLogin