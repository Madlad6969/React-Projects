function Button({fetchValue}){
    let Buttons=["C","X","%","/","7","8","9","*","4","5","6","-","1","2","3","+","e","0",".","="]

    return(
<>
 <div className="d-grid gap-2 mt-3">
 <div className="row row-cols-6 g-2">

{Buttons.map(e=><button className="py-2 px-3 m-3 " onClick={()=>fetchValue(e)
}>{e}</button>)}


</div>
</div>


</>


    )
}

export default Button