import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  const red = () => setColor("red");
  const green = () => setColor("green");
  const yellow = () => setColor("yellow");
  const blue = () => setColor("blue");

  return (
    <div
      style={{
        
        backgroundColor: color,
        height: "100vh", // full viewport height
        width: "100vw",  // full viewport width
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "background-color 0.3s ease",
        overflow: "hidden", // avoid scrollbars
      }}
    >
      <h1 style={{ color: "black", marginBottom: "20px" }}>
        Background Color Changer 🎨
      </h1>

      <div>
        <button
          onClick={red}
          style={{
            backgroundColor: "red",
            color: "white",
            margin: "10px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Red
        </button>

        <button
          onClick={green}
          style={{
            backgroundColor: "green",
            color: "white",
            margin: "10px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Green
        </button>

        <button
          onClick={yellow}
          style={{
            backgroundColor: "yellow",
            color: "black",
            margin: "10px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Yellow
        </button>

        <button
          onClick={blue}
          style={{
            backgroundColor: "blue",
            color: "white",
            margin: "10px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;




  

   



  // let [count,setCount]=useState(0)

 // let increment=()=>{

    //   SetCount(count+1)
    // }

    // let decrement=()=>{
    //   SetCount(count-1)
    // }

    // let reset=()=>{
    //   SetCount(0)
    // }


    // return(
    // <>
    {/* <h1>Count is {count}</h1>
    <button onClick={()=>increment()}>+</button>
     <button onClick={()=>decrement()}>-</button>
     <button onClick={()=>reset()}>Reset</button>  */}

     
//     </>
//   )
// }