import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
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
      return prevToDos.map((todo) =>
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
    });
  };

  return (
    <li>
      <span>{text}</span>
      {categoryList?.map(
        (c) =>
          c.id !== category.id && (
            <button name={c.id + ""} onClick={onClick}>
              {c.text}
            </button>
          )
      )}
    </li>
  );
}

export default ToDo;
