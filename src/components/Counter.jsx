import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [countBy, setCountBy] = useState(1);

  return (
    <div className="p-4 d-flex flex-column align-items-center">
      <p className="lead fs-1"> Counter : {counter}</p>
      <div className="w-50 mt-1 mb-4">
        <label className="form-label"> Count By </label>
        <input
          className="form-control"
          type="number"
          min={1}
          value={countBy}
          onChange={(e) => setCountBy(Number(e.target.value))}
        />
      </div>
      <div className="button-group">
        <button
          className="btn btn-primary me-3"
          onClick={() => setCounter(counter + countBy)}
        >
          Increment
        </button>

        <button
          className="btn btn-danger me-3"
          onClick={() => {
            if (counter > 0) setCounter(counter - countBy);
          }}
        >
          Decrement
        </button>
        <button className="btn btn-warning" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
