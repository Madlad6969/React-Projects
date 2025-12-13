import React from "react";
function Temp({name,greet}){
    console.log("i am render");
    function expensesCalculation(){
        for(let i=1;i<=10000000;i++){
//ggg
        }
        }
    
    expensesCalculation()
    return(
        <>
        <h1>temp component </h1>
        <h2>my name is {name}</h2>
        </>
    )
}
export default React.memo(Temp);