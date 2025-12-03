import axios from "axios";
import { useEffect, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="bg-light min-vh-100">
        <div className="container">
          <h2 className="text-center mb-4">Task Details</h2>
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
