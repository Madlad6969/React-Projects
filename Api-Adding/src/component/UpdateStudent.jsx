/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function UpdateStudent() {
  let navigate = useNavigate();
  let { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();   // ✅ define useForm FIRST

  async function fetchData() {
    let res = await fetch(`http://localhost:8080/${id}`);
    let data = await res.json();
    console.log(data);

    reset(data);   // ✅ now reset works correctly
  }

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function submit(data) {
    console.log(data);
    await fetch(`http://localhost:8080/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    navigate("/card");
  }

  return (
    <>
      <div className="container mt-5">
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Student Information Form</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(submit)}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input {...register("name")} type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input {...register("email")} type="email" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Contact</label>
                <input {...register("contact")} type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Age</label>
                <input {...register("age")} type="number" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea {...register("address")} className="form-control" rows="3"></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateStudent;
