import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Detail() {
    let[detail,setDetail]=useState({})
    let {id}=useParams("id")

    // async function fetchData() {
    //     let res=await fetch(`https://fakestoreapi.com/products/${id}`)
    //     let data=await res.json()
    //     setDetail(data)
    // }
    
    // useEffect(()=>{
    //     fetchData()
    // },[])

    useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setDetail(data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();
}, [id]);


    return(
        <>
        
        {/* <h1>this is detail page{id}</h1> */}
        <div className="container text-center mt-4">
          <h1>{detail.title} </h1>
            <p> {detail.rating?.rate} ({detail.rating?.count} reviews)</p>
         <img
              src={detail.image}
              alt={detail.title}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
            <h3>Price: ${detail.price}</h3>
            <h4>Description:</h4>
            <p>{detail.description}</p>




        </div>



        
        </>
    )
}
export default Detail