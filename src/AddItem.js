import React from "react";

export default function AddItem(props) {
  return (
    
    <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 mb-10 mt-10 rounded-2xl w-50 max-w-md">

        <form className="p-4" onSubmit={props.onFormSubmit} >
        <div className="flex flex-col items-center justify-center">
          <div className="mb-10">
            <label htmlFor="item-name" className="mr-4 text-lg">Название:</label>
            <input 
              type="text"
              value={props.name}
              onChange={props.onNameChange}
              id="item-name"
              placeholder=" Название товара"
              className="rounded-sm s"
            />
           </div>

          <div className="mb-6">
            <label htmlFor="item-description" className="mr-4 text-lg">Описание:</label>
            <input
              type="text"
              value={props.desc}
              onChange={props.onDescChange}
              id="item-description"
              placeholder=" Описание товара"
              className="rounded-sm"
            />
          </div>
          </div>
          <div className="p-4">
            <div className="flex flex-col items-center justify-center mb-4">{props.valid}</div>
            <div className="flex items-center justify-center">
            <input type="submit" 
            className="
           bg-slate-300 hover:bg-slate-400  text-white p-4 rounded-lg w-80
            "
            value="Добавить" />
           </div>
            </div>
        </form>
       
       </div>
  );
}
