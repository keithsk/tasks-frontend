import React, { useState } from "react";
import TaskDataService from "../services/TaskService";

const AddTask = () => {
  const initialTaskState = {
    id: null,
    description: ""
  };
  const [task, setTask] = useState(initialTaskState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const saveTask = () => {
    var data = {
      description: task.description
    };

    TaskDataService.create(data)
      .then(response => {
        setTask({
          id: response.data.id,
          description: response.data.description
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTask = () => {
    setTask(initialTaskState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      <h4>Add Task</h4>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTask}>Add</button>
        </div>
      ) : (
        <div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" name="description" rows="5" cols="50" 
              value={task.description}
              onChange={handleInputChange}></textarea>
          </div>

          <button onClick={saveTask} className="btn btn-success">Submit</button>
        </div>
      )}
    </div>
  );
};

export default AddTask;
