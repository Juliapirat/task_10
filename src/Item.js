import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal((prev) => prev + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal((prev) => prev - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div >
      <div className="flex items-center justify-center ">
        <div className="flex flex-row mb-2">
        <h2 className="text-lg mr-4">{info.name}</h2>
        <p className="text-lg">{info.desc}</p>
        </div>
      </div>
      <div className="flex  flex-col items-center justify-center mb-4">
      <div className="flex flex-row">
        <button
          className="mr-4"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 >{total ? total : ""}</h3>
        <button className="ml-4" onClick={handleAddClick}>
          +
        </button>
      </div>
      </div>
    </div>
  );
}
