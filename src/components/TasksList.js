import React, { useState, useEffect } from "react";
import TaskDataService from "../services/TaskService";
import { Link } from "react-router-dom";
import UserDataService from "../services/UserService";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchDesc, setSearchDesc] = useState("");
  
  
  useEffect(() => {
    retrieveTasks();
  }, []);

  /* const onChangeSearchDesc = e => {
    const searchDesc = e.target.value;
    setSearchDesc(searchDesc);
  }; */

  const retrieveTasks = () => {
    TaskDataService.getAll()
      .then(response => {
        setTasks(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  /* const refreshList = () => {
    retrieveTasks();
    setCurrentTask(null);
    setCurrentIndex(-1);
  }; */

  const setActiveTask = (task, index) => {
    setCurrentTask(task);
    setCurrentIndex(index);
  };

  /* const removeAllTasks = () => {
    TaskDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }; */

  /* const findByDesc = () => {
    TaskDataService.findByDesc(searchDesc)
      .then(response => {
        setTasks(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }; */

  /* const getUser = () => {
    UserDataService.get()
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }; */

  const logout = () => {
    localStorage.removeItem("token");
  };

  const logoutAll = () => {
    UserDataService.logoutAll()
      .then(response => {
        console.log(response.data);
        localStorage.removeItem('token');
      })
      .catch(e => {
        console.log(e);
      });
  };
  

  return (
    <div className="list row">
      {/* <div className="col-md-8">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search by Description"
            value={searchDesc}
            onChange={onChangeSearchDesc}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button"
              onClick={findByDesc}
            >
              Search
            </button>
          </div>
        </div>
      </div> */}
      <div className="col-md-6">
        <h4>Tasks List</h4>

        <ul className="list-group">
          {tasks &&
            tasks.map((task, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTask(task, index)}
                key={index}
              >
                {task.completed === true ? (
                  <span className="badge badge-success">Completed</span> 
                ) : (
                  <span className="badge badge-secondary">Pending</span>
                )} 
                <div>{task.description}</div>
              </li>
            ))}
        </ul>
        
        {/* <button className="m-3 btn btn-sm btn-danger" onClick={logout}>Logout</button>
        <button className="m-3 btn btn-sm btn-danger" onClick={logoutAll}>Logout All</button> */}

        {/* <button className="m-3 btn btn-success" onClick={getUser}>Me</button> */}

        {/* <button className="m-3 btn btn-sm btn-danger" onClick={removeAllTasks}>Remove All</button> */}
      </div>
      <div className="col-md-6">
        {currentTask ? (
          <div>
            <h4>Task</h4>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentTask.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentTask.completed ? "Completed" : "Pending"}
            </div>

            <Link to={"/tasks/" + currentTask._id} className="btn btn-warning">
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Task...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksList;
