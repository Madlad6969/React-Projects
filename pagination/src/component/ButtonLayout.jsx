function ButtonLayout({curpage,setCurPage}){
    return(
        <>

        <div className="d-flex justify-content-between mt-5">
            {curpage>1?<button className='btn btn-primary' onClick={()=>setCurPage(curpage-1)}>Prev</button>:""}
        {/* <button className={`btn ${curpage === 1 ? "btn-primary" : "btn-primary"}`}onClick={() => setCurPage(1)}>1</button>
         <button className={`btn ${curpage === 2 ? "btn-primary" : "btn-primary"}`}onClick={() => setCurPage(2)}>2</button>
          <button className={`btn ${curpage === 3 ? "btn-primary" : "btn-primary"}`}onClick={() => setCurPage(3)}>3</button>
           <button className={`btn ${curpage === 4 ? "btn-primary" : "btn-primary"}`}onClick={() => setCurPage(4)}>4</button>
            <button className={`btn ${curpage === 5 ? "btn-primary" : "btn-primary"}`}onClick={() => setCurPage(5)}>5</button>
             <button className={`btn ${curpage === 6 ? "btn-primary" : "btn-primary"}`}onClick={() => setCurPage(6)}>6</button>
              <button className={`btn ${curpage === 7 ? "btn-primary" : "btn-primary"}`}onClick={() => setCurPage(7)}>7</button>
               <button className={`btn ${curpage === 8 ? "btn-primary" : "btn-primary"}`}onClick={() => setCurPage(8)}>8</button>
                <button className={`btn ${curpage === 9 ? "btn-primary" : "btn-primary"}`}onClick={() => setCurPage(9)}>9</button>
                 <button className={`btn ${curpage === 10 ? "btn-primary" : "btn-primary"}`}onClick={() => setCurPage(10)}>10</button> */}


        <button className='btn btn-primary'onClick={() => setCurPage(1)}>1</button>
         <button className= 'btn btn-primary'onClick={() => setCurPage(2)}>2</button>
          <button className='btn btn-primary'onClick={() => setCurPage(3)}>3</button>
           <button className='btn btn-primary'onClick={() => setCurPage(4)}>4</button>
            <button className='btn btn-primary'onClick={() => setCurPage(5)}>5</button>
             <button className='btn btn-primary'onClick={() => setCurPage(6)}>6</button>
              <button className='btn btn-primary'onClick={() => setCurPage(7)}>7</button>
               <button className='btn btn-primary'onClick={() => setCurPage(8)}>8</button>
                <button className='btn btn-primary'onClick={() => setCurPage(9)}>9</button>
                 <button className='btn btn-primary'onClick={() => setCurPage(10)}>10</button>

         {curpage < 10? <button className="btn btn-primary"onClick={() => setCurPage(curpage + 1)}>Next</button>:""}
           

        </div>
        </>
    )
}
export default ButtonLayout