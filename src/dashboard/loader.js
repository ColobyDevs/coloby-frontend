import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loader = () => {
  return (
    <> <Skeleton height={"12rem"} width={"14rem"}/>
    <Skeleton height={"12rem"} width={"14rem"}/>
    <Skeleton height={"12rem"} width={"14rem"}/>
    <Skeleton height={"12rem"} width={"14rem"}/>
    </>
  )
}

export default Loader