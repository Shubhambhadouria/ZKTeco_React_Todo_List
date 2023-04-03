import React, { useState } from "react";

import "./todoList.css";
function TodoList() {
  const [action, setAction] = useState("");
  const [data, setData] = useState([]);
  const addAction = () => {
    if (action !== "") {
      setAction("");
      setData([...data, action]);
      // return updatedData;
    } else {
      alert("Field Should not be Empty");
    }
  };

  const removeAction = (i) => {
    const updatedRemovedData = data.filter((elem, id) => {
      return i != id;
    });
    setData(updatedRemovedData);
  };

  const updateAction = (i) => {

  }

  return (
    <div>
      <h1 className="heading">TODO LIST</h1>
      <input
        className="input-area"
        type="text"
        placeholder="Add Activity"
        value={action}
        onChange={(event) => setAction(event.target.value)
        }
      />
      <button className="add-btn" onClick={addAction}>
        Add
      </button>
      <h5 className="list-activity">
        Your Activity List Count is - {data.length}
      </h5>
      {data != [] &&
        data.map((data, i) => {
          return (
            <>
              <div key={i} className="data-points">
                <h4>{data}</h4>
                <div>
                  <button onClick={() => updateAction(i)} className="update-btn">Update</button>
                  <button
                    onClick={() => removeAction(i)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default TodoList;
