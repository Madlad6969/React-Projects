function Card({data}){

    return(

        <>
        <div className="col-md-3 mt-5">
            <div className="card h-100 shadow-sm">
        <h5 style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{data.title}</h5>
        <p>{data.userId}</p>

            </div>
            </div>
        
        
        </>
    )
}
export default Card