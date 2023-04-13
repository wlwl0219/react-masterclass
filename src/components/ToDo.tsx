import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, toDoState, categoryState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categoryList = useRecoilValue(categoryState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    const moveCategory = categoryList.filter((c) => c.id === Number(name));

    setToDos((prevToDos) => {
      const makeToDos = prevToDos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              category: {
                id: Number(name),
                text: moveCategory[0].text,
              },
            }
          : todo
      );
      // localStorage.setItem("TODO_LS", JSON.stringify(makeToDos));
      return makeToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {categoryList?.map(
        (c) =>
          c.id !== category.id && (
            <button key={c.id} name={c.id + ""} onClick={onClick}>
              {c.text}
            </button>
          )
      )}
    </li>
  );
}

export default ToDo;
