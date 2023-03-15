import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, selectedCategoryState } from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const category = useRecoilValue(categoryState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const selectedCategory = category.filter(
      (c) => c.id === Number(event.currentTarget.value)
    );
    setSelectedCategory({
      id: Number(event.currentTarget.value),
      text: selectedCategory[0].text,
    });
  };

  return (
    <div>
      <h1>Create to do</h1>
      <CreateToDo />
      <hr />
      <h1>Create category</h1>
      <CreateCategory />
      <hr />
      <select value={selectedCategory.id} onInput={onInput}>
        <option value="">카테고리선택</option>
        {category?.map((category) => (
          <option value={category.id}>{category.text}</option>
        ))}
      </select>
      <h1>{selectedCategory.text} List</h1>
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
