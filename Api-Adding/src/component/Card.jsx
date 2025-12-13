import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Card() {
  let navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this student?")) {
      return;
    }

    axios
      .delete(`http://localhost:8080/${id}`)
      .then(() => {
        setStudents(students.filter((s) => s.id !== id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="bg-success">
      <div className="container ">
        <h2 className="text-center mb-4">Student Details</h2>

        <div className="row ">
          {students.map((s) => (
            <div className="col-md-4 mb-3" key={s.id}>
              <div className="card shadow-sm p-3 bg-success bg-light">
                <h4 className="card-title">{s.name}</h4>
                <p>
                  <strong>Email:</strong> {s.email}
                </p>
                <p>
                  <strong>Age:</strong> {s.age}
                </p>
                <p>
                  <strong>Contact:</strong> {s.contact}
                </p>
                <p>
                  <strong>Address:</strong> {s.address}
                </p>

                <button
                  onClick={() => navigate(`/edit/${s.id}`)}
                  className="btn btn-success mb-2"
                >
                  edit
                </button>

                <button
                  onClick={() => handleDelete(s.id)}
                  className="btn btn-warning"
                >
                  delete
                </button>
              </div>
            </div>
          ))}

          <button
            className="btn btn-primary btn-lg w-100 mt-2 mb-2"
            onClick={() => navigate("/")}
          >
            ADD MORE STUDENTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;




// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Card() {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [deleteclick, setDeleteCLick] = useState(false);

//   async function fetchData() {
//     let res = await fetch("http://localhost:8080/");
//     let d = await res.json();
//     setData(d);
//   }

//   async function handleDelete(id) {
//     let res = confirm("Are you sure want to delete?");
//     if (res) {
//       await fetch(`http://localhost:8080/${id}`, {
//         method: "DELETE",
//       });
//       setDeleteCLick(true);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, [deleteclick]);

//   return (
//     <div className="container">
//       <div className="row">
//         {data.map((e) => (
//           <div className="col-md-3" key={e.id}>
//             <div className="card p-3 mb-3">
//               <h3>{e.name}</h3>
//               <p>
//                 <strong>Email:</strong> {e.email}
//               </p>
//               <p>
//                 <strong>Contact:</strong> {e.contact}
//               </p>
//               <p>
//                 <strong>Age:</strong> {e.age}
//               </p>
//               <p>
//                 <strong>Address:</strong> {e.address}
//               </p>

//               <button
//                 onClick={() => navigate(`/edit/${e.id}`)}
//                 className="btn btn-warning me-2"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() => handleDelete(e.id)}
//                 className="btn btn-danger"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//         <div>
//             <button className="btn btn-primary" onClick={()=>navigate("/add")}>Add more Student</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// function AddStudent(params) {
//     let navigate=useNavigate()
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm();

//      async function submit(data) {
//         console.log(data);
//         let res=await fetch("http://localhost:8080/", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//           })
//           navigate("/")
//       }
//     return(
//         <>
//             <div class="container mt-5">
//     <div class="card shadow">
//         <div class="card-header bg-primary text-white">
//             <h4 class="mb-0">Student Information Form</h4>
//         </div>
//         <div class="card-body">

//             <form onSubmit={handleSubmit(submit)}>
                
//                 <div class="mb-3">
//                     <label for="name" class="form-label">Name</label>
//                     <input {...register('name')} type="text" class="form-control" id="name" placeholder="Enter your name"/>
//                 </div>

             
//                 <div class="mb-3">
//                     <label for="email" class="form-label">Email</label>
//                     <input {...register('email')} type="email" class="form-control" id="email" placeholder="Enter your email"/>
//                 </div>

             
//                 <div class="mb-3">
//                     <label for="contact" class="form-label">Contact</label>
//                     <input type="text" {...register('contact')} class="form-control" id="contact" placeholder="Enter your contact number"/>
//                 </div>

//                 <div class="mb-3">
//                     <label for="age" class="form-label">Age</label>
//                     <input type="number" {...register('age')} class="form-control" id="age" placeholder="Enter your age"/>
//                 </div>

                
//                 <div class="mb-3">
//                     <label for="address" class="form-label">Address</label>
//                     <textarea {...register('address')} class="form-control" id="address" rows="3" placeholder="Enter your address"></textarea>
//                 </div>

                
//                 <button type="submit" class="btn btn-primary w-100">Submit</button>
//             </form>

//         </div>
//     </div>
// </div>

//         </>
//     )
// }
// export default AddStudent
// import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate, useParams } from 'react-router-dom';

// function UpdateStudent(params) {
//     let navigate=useNavigate()
    
//     let {id}=useParams()
//     async function fetchData(params) {
//         let res=await fetch(`http://localhost:8080/${id}`);
//         let data=await res.json()
//         console.log(data);
        
//        reset(data)
//     }
//     useEffect(()=>{
//         fetchData()
//     },[])
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//       } = useForm();

//      async function submit(data) {
//         console.log(data);
//         let res=await fetch(`http://localhost:8080/${id}`, {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//           })
//           navigate("/")
//       }
//     return(
//         <>
//             <div class="container mt-5">
//     <div class="card shadow">
//         <div class="card-header bg-primary text-white">
//             <h4 class="mb-0">Student Information Form</h4>
//         </div>
//         <div class="card-body">

//             <form onSubmit={handleSubmit(submit)}>
                
//                 <div class="mb-3">
//                     <label for="name" class="form-label">Name</label>
//                     <input  {...register('name')} type="text" class="form-control" id="name" placeholder="Enter your name"/>
//                 </div>

             
//                 <div class="mb-3">
//                     <label for="email" class="form-label">Email</label>
//                     <input  {...register('email')} type="email" class="form-control" id="email" placeholder="Enter your email"/>
//                 </div>

             
//                 <div class="mb-3">
//                     <label for="contact" class="form-label">Contact</label>
//                     <input  type="text" {...register('contact')} class="form-control" id="contact" placeholder="Enter your contact number"/>
//                 </div>

//                 <div class="mb-3">
//                     <label for="age" class="form-label">Age</label>
//                     <input  type="number" {...register('age')} class="form-control" id="age" placeholder="Enter your age"/>
//                 </div>

                
//                 <div class="mb-3">
//                     <label for="address" class="form-label">Address</label>
//                     <textarea {...register('address')} class="form-control" id="address" rows="3"  placeholder="Enter your address"></textarea>
//                 </div>

                
//                 <button type="submit" class="btn btn-primary w-100">Submit</button>
//             </form>

//         </div>
//     </div>
// </div>

//         </>
//     )
// }
// export default UpdateStudent