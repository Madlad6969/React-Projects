import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function AddTask() {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting},
  } = useForm();

  async function submit(data) {
    
    console.log("Sending to API:", data);

    let res = await fetch("http://localhost:8070", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log("Response:", res);
    data.createdAt = new Date().toISOString().slice(0, 10);
data.updatedAt = new Date().toISOString().slice(0, 10);
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Add New Task</h2>

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
            
            </select>
          </div>

          {/* Auto Fields */}
          <div className="mb-3">
            <label className="form-label fw-bold">Created At</label>
            <input type="date" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Updated At</label>
            <input type="date" className="form-control"  />
          </div>

          <button type="submit" className="btn btn-success w-100 fs-5"  disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          
          </button>
           <Link to="/tasks" className="btn btn-primary btn-lg w-100 mt-2">
  All Tasks
</Link>

        </form>
      </div>
    </div>
  );
}

export default AddTask;
