function Card({data}){
    return(
        <>
        <div className="col-md-3 mt-5">
            <div className="card">
                <div className="card-body">
                <h3>UserId:{data.userId}</h3>
                   <h5>Id:{data.id}</h5>
                   <h6>Title:{data.title}</h6>
                   <p>Body:{data.body}</p>

                </div>
            </div>
        </div>
        </>
    )
}
export default Card