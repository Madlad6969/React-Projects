import { useEffect, useState } from "react";
import Card from "./Card";
function Home({search}) {
    let[datas,setDatas]=useState([])
    // async function fetchData() {
    //     let res=await fetch('https://fakestoreapi.com/products')
    //     let data=await res.json()
    //     console.log(data);
        
    //     setDatas(data)
    // }
    // useEffect(()=>{
    //     fetchData()
    // },[])

    useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products/');
      let data = await res.json();
      console.log(search);
      
      if(search){
            data=data.filter(e=>e.title.toLowerCase().includes(search.toLowerCase()))
            setDatas(data)
      }else{
        setDatas(data)
      }
      // setDatas(data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();
}, [search]);

    return(
        <>
        <div className="container">
            <div className="row">
                {datas.map(e=>(<Card data={e}></Card>))}
            </div>
        </div>
        </>
    )
}
export default Home;   