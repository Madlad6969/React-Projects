import { useContext } from "react";
import { themeContext } from "../App";



export function Header(){
    let theme=useContext(themeContext)
    return(
        <>
        <h1 className="header" style={{backgroundColor:`${theme.bgcolor}`, color:`${theme.color}`}}>This is Header</h1>
        </>
    )
}