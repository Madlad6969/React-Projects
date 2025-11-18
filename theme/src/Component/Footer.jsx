import { useContext } from "react"
import { themeContext } from "../App"

export function Footer () {
  let theme=useContext(themeContext)
    return (
        <>
          <h1 className="footer" style={{backgroundColor:`${theme.bgcolor}`, color:`${theme.color}`}}> This is a Footer</h1>
        </>
    )
}