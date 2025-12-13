import { Outlet,useNavigate } from "react-router-dom"

function Dashboard(){
    let Navigate=useNavigate()
    return(
        <>
        <h1>This is Dashboard</h1>
        <button onClick={()=>Navigate("/dashboard/student")} className="btn btn-primary">View Student Dashboard</button>
        <button onClick={()=>Navigate("/dashboard/teacher")} className="btn btn-success">View Teacher Dashboard</button>
        <Outlet></Outlet>
        </>
    )
}
export default Dashboard