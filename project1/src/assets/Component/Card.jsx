import { useNavigate } from "react-router-dom"

function Card({data}){
    let navigate=useNavigate()
    function handleClick(id){
        navigate(`/detail/${id}`)
    }
    return(
        <>
        <div className="col-md-3 mt-5">
            <div className="card">
                <div className="card-body" onClick={()=>handleClick(data.id)}>
                    <img src={data.image}alt="" width="100%" height="270px"/>
                    <h6>{data.title}</h6>
                    <h4>{data.price}</h4>
                    <p> {data.rating.rate} ({data.rating.count} reviews)</p>
                </div>
            </div>
        </div>
        </>
    )

}
export default Card