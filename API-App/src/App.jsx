import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from './Component/Card';




function App() {
  const[products,setProducts]=useState([])
  const[category,setCategory]=useState("all")
  const[price,setPrice]=useState("all")
   async function fetchData() {
      try {
        let res=await fetch("https://fakestoreapi.com/products");
        let data =await res.json()
        let filtered = data;

        if(category=="all"){
            setProducts(data)
        }
       else{
        setProducts(data.filter(e=>e.category==category))
       }


         // filter by price range
    if (price !== "all") {
      if (price === "below50") {
        filtered = filtered.filter(e => e.price < 50);
      } else if (price === "50to100") {
        filtered = filtered.filter(e => e.price >= 50 && e.price <= 100);
      } else if (price === "above100") {
        filtered = filtered.filter(e => e.price > 100);
      }
    }
        setProducts(filtered);
      } catch (error) {
        console.log(error);
        
      }   
  }


  useEffect(()=>{
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[category,price])





  return (

    <>
    <div style={{backgroundColor: "#0066cc"}}>
    
      <div className="container">
        <div className="col-mb-4">
          <div className="col-md-3">
            <h5>Filter by Category</h5>
            <select className="form-select" onChange={e=>setCategory(e.target.value)}>
            <option value="all">All Categories</option>
              <option value="men's clothing">Men's clothing</option>
             <option value="women's clothing">Women's clothing</option>
             <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
            </div>
            </div>
           <div className="col-md-3">
            <h5>Filter by Price</h5>
            <select className="form-select" onChange={e=>setPrice(e.target.value)}>
        <option value="all">All Products</option>
  <option value="below50">Below $50</option>
  <option value="50to100">$50 - $100</option>
  <option value="above100">Above $100</option>
            </select>
            </div>
          



        
        <div className="row">
          {products.map(e=><Card data={e}></Card>)}
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
