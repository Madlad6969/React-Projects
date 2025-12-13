/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react"

function useFetch(url) {
    const[data,setData]=useState([])
    async function fetchData() {
        let res=await fetch(url)
        let d=await res.json()
        setData(d)
    }

    useEffect(()=>{
        fetchData()
    },[])
    return data
}
export default useFetch