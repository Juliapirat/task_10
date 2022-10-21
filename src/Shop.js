import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import uuid from "uuid";
import "./index.css";

export default function Shop() {
  const [items, setItems] = useState(() => {
    let value = JSON.parse(localStorage.getItem("items"));
    if (!value) {
      return [];
    }
    return value;
  });
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    if (items.length === 0) {
      document.title = "Товары отсутсвуют";
    } else {
      document.title = items.length + " товаров";
    }
    console.log(items.length);
  }, [items]);

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch("https://covid-shop-mcs.herokuapp.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, desc: desc })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }
    setItems([
      ...items,
      {
        id: uuid(),
        name: name,
        desc: desc
      }
    ]);
    setName("");
    setDesc("");
    setValid("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
<div className="flex  flex-col items-center justify-center  bg-gray-100">
        <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
      />
          <div className=" flex flex-col items-center justify-center bg-white shadow-md px-8 sm:px-6 md:px-8 lg:px-10 py-8 mb-10 mt-10 rounded-2xl w-80">
      <div>{items.length === 0 && <p>Добавьте первый товар</p>}</div>
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </div>
    </div>
    </>
  );
}
