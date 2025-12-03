// import { useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useForm } from "react-hook-form";


function App() {
  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting},
  } = useForm();

  // const[username,setUsername]=useState("")
  // const[email,setEmail]=useState("")
  // const[password,setPassword]=useState("")
  // console.log("i am render");

  // let username=useRef("")
  // let email=useRef("")
  // let password=useRef("")

  // function handleSubmit(e){
  //   e.preventDefault();
  //   // console.log(username,email,password);
  //   console.log(username.current.value,email.current.value,password.current.value);

  // }

  async function my(data) {
    await new Promise(resolve=>setTimeout(resolve,3000))
    console.log(data);
  }

  return (
    <>
      {/* < div className="container">
   <div className="row">
    <div className="col-md-6 mx-auto mt-5">
      <div className="card">
        <div className="card-body">
          <form onSubmit={(e)=>handleSubmit(e)}> 
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUsername(e.target.value)}/>
    </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  
  <button type="submit" class="btn btn-success w-100">Submit</button>
</form>

        </div>
      </div>
    </div>
   </div>

   </div> */}

      {/* < div className="container">
   <div className="row ">
    <div className="col-md-6 mx-auto mt-5 ">
      <div className="card">
        <div className="card-body">
          <form onSubmit={(e)=>handleSubmit(e)}> 
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={username}/>
    </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" ref={password}/>
  </div>
  
  <button type="submit" class="btn btn-success w-100">Submit</button>
</form>

        </div>
      </div>
    </div>
   </div>

   </div> */}

      <div className="bg-dark">
      <div className="container d-flex justify-content-center align-items-center min-vh-100 ">
        <div className="row w-100 justify-content-center ">
          <div className="col-md-6 mx-auto mt-5 ">
            <div className="card p-4 shadow-lg " >
              <div className="card-body">
                <form onSubmit={handleSubmit(my)} noValidate>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      {...register("username", {
                        required: true,
                        minLength: 6,
                        maxLength: 10,
                         pattern: /^[a-zA-Z-]+$/,
                      })}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    {errors.username && (
      <>
        {errors.username.type === "required" && (
          <p className="text-danger">Username is required!</p>
        )}

        {errors.username.type === "minLength" && (
          <p className="text-danger">Username must be at least 6 characters!</p>
        )}

        {errors.username.type === "maxLength" && (
          <p className="text-danger">
            Username cannot be more than 10 characters!
          </p>
        )}

        {errors.username.type === "pattern" && (
          <p className="text-danger">
            Username must contain only letters and hyphens!
          </p>
        )}
      </>
    )}
  </div>

  
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      // eslint-disable-next-line no-useless-escape
                      {...register("email",{required:{value:true,message:"email is required"},pattern:{value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"email is not valid" }})}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                    
                      {...register("password",{required:{value:true,message:"password is required"}
                    ,pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                    ,message:"Password must be at least 8 characters long and include at least 1 letter, 1 number, and 1 special character"}})}
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  {errors.password && <p className="text-danger">{errors.password.message}</p>}
                  <input type="submit" class="btn btn-success w-100" disabled={isSubmitting} value={isSubmitting?"submitting....":"submit"}/>
                    
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
