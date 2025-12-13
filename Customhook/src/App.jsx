import useFetch from "./assets/useFetch"

function App() {
 const data=useFetch("https://fakestoreapi.com/products")
 console.log(data);
 
  return (
    <>
     <h1>hello custom hook </h1>
    </>
  )
}

export default App
