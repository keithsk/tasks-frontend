import React, { useState, useEffect } from "react";
import TaskDataService from "../services/TaskService";

const Task = props => {
  const initialTaskState = {
    id: null,
    description: "",
    completed: false
  };
  const [currentTask, setCurrentTask] = useState(initialTaskState);
  const [message, setMessage] = useState("");

  const getTask = id => {
    TaskDataService.get(id)
      .then(response => {
        setCurrentTask(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTask(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTask({ ...currentTask, [name]: value });
  };

  const updateCompleted = status => {
    var data = {
      completed: status
    };

    TaskDataService.update(currentTask._id, data)
      .then(response => {
        setCurrentTask({ ...currentTask, completed: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTask = () => {
    // console.log(currentTask);

    var data = {
      description: currentTask.description
    };

    TaskDataService.update(currentTask._id, data)
      .then(response => {
        console.log(response.data);
        setMessage("The task was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTask = () => {
    TaskDataService.remove(currentTask._id)
      .then(response => {
        console.log(response.data);
        props.history.push("/tasks");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentTask ? (
        <div className="edit-form">
          <h4>Edit Task</h4>
          <form>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" id="description" name="description" rows="5" cols="50" 
              value={currentTask.description}
              onChange={handleInputChange}></textarea>
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
                {currentTask.completed === true ? (
                  <span className="badge badge-success">Completed</span> 
                ) : (
                  <span className="badge badge-secondary">Pending</span>
                )}
              
            </div>
          </form>

          {currentTask.completed === true ? (
            <button className="btn btn-primary mr-2" onClick={() => updateCompleted(false)}>
              Pending
            </button>
          ) : (
            <button className="btn btn-primary mr-2" onClick={() => updateCompleted(true)}>
              Completed
            </button>
          )}

          <button className="btn btn-danger mr-2" onClick={deleteTask}>Delete</button>

          <button type="submit" className="btn badge-success" onClick={updateTask}>
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Task...</p>
        </div>
      )}
    </div>
  );
};

export default Task;
