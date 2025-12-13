import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function UpdateTask(){
    let navigate=useNavigate();
    let{id}=useParams();
   
   const {
       register,
       handleSubmit,
       reset,
       formState: { errors },
     } = useForm();
    
    async function fetchData() {
        let res=await fetch(`http://localhost:8070/${id}`)
        let data=await res.json();
        console.log(data);

        reset(data);
        
    }

    useEffect(()=>{
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

     async function submit(data) {
    console.log("Sending to API:", data);
   let res = await fetch(`http://localhost:8070/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
 console.log("Response:", res);
 data.createdAt = new Date().toISOString().slice(0, 10);
data.updatedAt = new Date().toISOString().slice(0, 10);

navigate("/tasks")
  }
   
    return(
        <>
        <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Update Task Details</h2>

        <form onSubmit={handleSubmit(submit)}>

          {/* Title */}
          <div className="mb-3">
            <label className="form-label fw-bold">Title</label>
            <input
              type="text"
              {...register("title")}
              className="form-control"
              placeholder="Enter task title"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea
              {...register("description")}
              className="form-control"
              rows="3"
              placeholder="Enter task details..."
              required
            ></textarea>
          </div>

          {/* Due Date */}
          <div className="mb-3">
            <label className="form-label fw-bold">Due Date</label>
            <input
              type="date"
              {...register("dueDate")}
              className="form-control"
              required
            />
          </div>

          {/* Status */}
          <div className="mb-3">
            <label className="form-label fw-bold">Status</label>
            <select {...register("status")} className="form-select">
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Open">Open</option>
            </select>
          </div>

          {/* Auto Fields */}
          <div className="mb-3">
            <label className="form-label fw-bold">Created At</label>
            <input type="date" {...register("createdAt")}className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Updated At</label>
            <input type="date"{...register("updatedAt")} className="form-control"  />
          </div>

          <button type="submit" className="btn btn-primary w-100 fs-5">
            Add Task
          </button>

        </form>
      </div>
    </div>
        
        </>
    )
}
export default UpdateTask