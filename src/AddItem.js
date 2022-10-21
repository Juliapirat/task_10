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
            bg-sky-500 hover:bg-sky-600 shadow-lg p-4 w-80 ml-4 rounded-lg text-white    
            hover: scale-105  transition duration-500 
            "
            value="Добавить" />
           </div>
            </div>
        </form>
       
       </div>
  );
}
