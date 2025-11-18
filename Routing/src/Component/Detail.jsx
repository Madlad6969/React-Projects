import { useParams } from "react-router-dom"

function Detail(){

    let{id}=useParams("id")
    console.log(id);
    

    return(
<>
<h1>detail page</h1>
<p>  id is {id}</p>
</>
    )

}
export default Detail