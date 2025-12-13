import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Completed() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8070")
  .then((res) => {
    console.log("ALL TASKS:", res.data);

    const completedTasks = res.data.filter(
      (task) => task.status?.toLowerCase() === "completed"
    );

    console.log("FILTERED:", completedTasks);

    setTasks(completedTasks);
  })
  .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="bg-light min-vh-100">
        <div className="container">
          <h2 className="text-center mb-4">Completed Tasks</h2>
          <div className="row">
            {tasks.length > 0 ? (
              tasks.map((t) => (
                <div className="col-md-4 mb-3" key={t.id}>
                  <div className="card shadow-sm p-3 bg-light">
                    <h4 className="card-title">{t.title}</h4>
                    <p><strong>Description:</strong> {t.description}</p>
                    <p><strong>Status:</strong> {t.status}</p>
                    <p><strong>Due Date:</strong> {t.dueDate}</p>
                    <p><strong>Created At:</strong> {t.createdAt}</p>
                    <p><strong>Updated At:</strong> {t.updatedAt}</p>

                    <button
                      onClick={() => navigate(`/edit/${t.id}`)}
                      className="btn btn-primary mb-2"
                    >
                      Edit Task
                    </button>

                    <button className="btn btn-danger">
                      Delete Task
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h4 className="text-center mt-5 text-muted">
                No completed tasks found
              </h4>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Completed;
