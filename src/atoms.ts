import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export interface ICategory {
  id: number;
  text: string;
}

export interface IToDo {
  text: string;
  id: number;
  category: ICategory;
}

export const selectedCategoryState = atom<ICategory>({
  key: "SelectedCategory",
  default: { id: 1, text: "todo" },
});

export const categoryState = atom<ICategory[]>({
  key: "category",
  default: [
    { id: 1, text: "todo" },
    { id: 2, text: "done" },
    { id: 3, text: "doing" },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(selectedCategoryState);
    return toDos.filter((toDo) => toDo.category.id === category.id);
  },
});
