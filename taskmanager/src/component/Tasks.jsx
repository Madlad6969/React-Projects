import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Tasks() {
  let navigate=useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(id){
    if (!window.confirm("Are you sure you want to delete this student?")) {
      return;
    }

    axios
      .delete(`http://localhost:8070/${id}`)
      .then(() => {
        setTasks(tasks.filter((t) => t.id !== id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="bg-light min-vh-100">
        <div className="container">
          <h2 className="text-center mb-4">Task Cards</h2>
          <div className="row">
            {tasks.map((t) => (
              <div className="col-md-4 mb-3" key={t.id}>
                <div className="card shadow-sm p-3 bg-light">
                  <h4 className="card-title">{t.title}</h4>
                  <p><strong>Description:</strong> {t.description}</p>
                  <p><strong>Status:</strong> {t.status}</p>
                  <p><strong>Due Date:</strong> {t.dueDate}</p>
                  <p><strong>Created At:</strong> {t.createdAt}</p>
                  <p><strong>Updated At:</strong> {t.updatedAt}</p>
                  <button onClick={() => navigate(`/edit/${t.id}`)}className="btn btn-primary mb-2">Edit Task</button>
                  <button onClick={()=>handleDelete(t.id)}className="btn btn-danger">Delete Task</button>
    
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tasks;
