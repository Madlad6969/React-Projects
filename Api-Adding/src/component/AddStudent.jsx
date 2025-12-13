import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
function AddStudent() {


     const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors,isSubmitting },
  } = useForm();

  async function submit(data){
    await new Promise(resolve=>setTimeout(resolve,3000))
    console.log(data);
   // eslint-disable-next-line no-unused-vars
   let res=await fetch("http://localhost:8080/",{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(data)
    
    
   })
    
  }


    return(
       <>
       <>
  <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
    
    <div className="card shadow-lg bg-success text-white px-4 py-4" 
         style={{ width: "450px", borderRadius: "18px" }}>
      
      {/* Header */}
      <div className="card-header bg-success text-white text-center border-0 mb-3">
        <h3 className="fw-bold">Student Information Form</h3>
      </div>

      {/* Form */}
      <div className="card-body">
        <form onSubmit={handleSubmit(submit)}>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input 
              type="text"
              {...register("name")}
              className="form-control form-control-lg"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input 
              type="email"
              {...register("email")}
              className="form-control form-control-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Contact */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Contact</label>
            <input 
              type="tel"
              {...register("contact")}
              className="form-control form-control-lg"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Age */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Age</label>
            <input 
              type="number"
              {...register("age")}
              className="form-control form-control-lg"
              placeholder="Enter your age"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Address</label>
            <textarea
              {...register("address")}
              className="form-control form-control-lg"
              rows="3"
              placeholder="Enter your address"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="btn btn-dark btn-lg w-100 mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
     <Link to="/card" className="btn btn-primary btn-lg w-100 mt-2">
  Go to card
</Link>

        </form>
      </div>
    </div>
  </div>
</>


        </>
    )
}
export default AddStudent