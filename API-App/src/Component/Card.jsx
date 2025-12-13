function Card({ data }) {
  return (
    <>
      <div className="col-md-3 mt-5">
        <div className="card h-100 shadow-sm">
          <img
            src={data.image}
            alt={data.title}
            className="card-img-top p-3"
            style={{
              height: "220px",
              objectFit: "contain",
              backgroundColor: "black",
              borderBottom: "1px solid #eee",
            }}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h6 className="card-title text-truncate">{data.title}</h6>
            <p className="card-text fw-semibold mb-2">${data.price}</p>
            <button className="btn btn-warning mt-auto">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
