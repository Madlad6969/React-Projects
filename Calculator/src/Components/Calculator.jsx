import { useState } from "react";
import Button from "./Button";
import Input from "./input";

function Calculator(){
const[data,setData] = useState("")
function fetchValue(e){
    if(e==="="){
        setData(String(eval(data)))
    }else if(e==="C"){
        setData("")
    }else if(e==="X"){
        setData(data.substring(0,data.length-1))
    }else if(e==="e"){
        // eslint-disable-next-line no-loss-of-precision
        setData(2.718281828459045235)
    }else{
        
        setData(data+e)
    }

}
return(
<>
<div className="container">
    <div className="row">
        <div className="col-md-5 mx-auto mt-5">
            <div className="card border border-dark rounded">
                <div className="card-body border border-dark rounded bg-dark">
                    <Input data={data}></Input>
                <Button fetchValue={fetchValue}></Button>
                </div>
            
            </div>
        </div>

    </div>
</div>
</>

)


}
export default Calculator



