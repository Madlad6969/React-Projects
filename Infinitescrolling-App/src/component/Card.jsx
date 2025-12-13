function Card({data}){
    return(
        <>
        <div className="col-md-3 mt-4">
            <div className="card">
                <div className="card-body">
                    <img src={data.download_url} alt="" width="100%" height="280px"/>
                </div>
            </div>
        </div>
        
        
        </>
    )
}
export default Card