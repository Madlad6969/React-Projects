/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './component/Layout'
import ButtonLayout from './component/ButtonLayout'
import Card from './component/Card';


function App() {
  let[data,setData]=useState([])
  let[curpage,setCurPage]=useState(1)

  async function fetchData(params) {
    let res=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${curpage}&_limit=10`)
    let data=await res.json()
    setData(data)
    
  }

  useEffect(()=>{
    fetchData();
  },[curpage])
  

  return (
 <>
     <Layout>
     {data.map(e=><Card data={e}></Card>)}
     <ButtonLayout curpage={curpage} setCurPage={setCurPage}></ButtonLayout>

     </Layout>
 

    </>
  )
}

export default App
