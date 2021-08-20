import { itemList } from "./index";

export const completed = () => {
    for (let i = 0; i < itemList.length; i++) {
        var isComplete = itemList[i].completed;
    }
    return isComplete;
};
  