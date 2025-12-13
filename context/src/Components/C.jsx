import { useContext } from "react"
import { countContext} from "../App"

 function C () {

    let data = useContext(countContext);
    return(
        <>
        <h1>C Component</h1>
        <p>The value of count is {data[0]}</p>
        <h2>My name is {data[1]}</h2>
        </>
    )
}
export default C