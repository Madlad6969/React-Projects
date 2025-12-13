// import { useEffect } from 'react';
// import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from './Component/Card';
// function App() {

//   const [products, setProducts] = useState([])
//   const [category, setCategory] = useState(["all"])
//   const [price, setPrice] = useState("all-price")

//   async function FetchData () {
//     try {
//       let res = await fetch("https://fakestoreapi.com/products");
//       let data = await res.json()
//       if(category=="all"){
//       setProducts(data)
//       }
//       else{
//         setProducts(data.filter(e=>e.category==category))
//       }

//       if(price==="all-price"){
//         setProducts(data)
//       }
//       if(price==="lowPrice"){
//         setProducts(data.filter(e=>e.price<100))
//       }
//       if(price==="medPrice"){
//         setProducts(data.filter(e=>e.price>=100 && e.price<500))
//       }
//       if(price==="highPrice"){
//         setProducts(data.filter(e=>e.price>=500 && e.price<=1000))
//       }
      
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useEffect (() =>{
//       FetchData()

//   },[category, price])

//   return (
//     <>
//       <div className="container">
//        {/* <h4 className="mb-3">🛍️ Filter by Category</h4>

//        <div className="col-md-4">
//         <select className="form-select" aria-label="Category select" onChange={e=>setCategory(e.target.value)}>
//           <option value="all">All Categories</option>
//           <option value="men's clothing">Men's Clothing</option>
//           <option value="women's clothing">Women's Clothing</option>
//           <option value="electronics">Electronics</option>
//           <option value="jewelery">Jewellery</option>
//         </select>
//       </div> */}

//       <h4 className="mb-3">🛍️ Filter by Price</h4>

//        <div className="col-md-4">
//         <select className="form-select" aria-label="Category select" onChange={e=>setPrice(e.target.value)}>
//           <option value="all-price">All Price</option>
//           <option value="lowPrice">Less than 100</option>
//           <option value="medPrice">100-500</option>
//           <option value="highPrice">Above 500</option>
//         </select>
//       </div>


//       <div className="row">
//         {products.map(e => <Card data={e}></Card>)}
//       </div>

   
     
//     </div>
//     </>
//   )
// }

// export default App