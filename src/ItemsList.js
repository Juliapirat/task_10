import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
<ul>
      {props.items.map((item) => (
         <div>
                   <li key={item.id}>
          <div className="mb-8">
          <Item info={item} />
          <button
            className="bg-slate-300 hover:bg-slate-400 p-4 w-40 rounded-lg text-white "
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
          </div>
        </li>
        </div>
      ))}
    </ul>
  );
}
