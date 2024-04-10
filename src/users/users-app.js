import { renderBtns } from "./presentation/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const app =async (element) => {
    element.innerHTML = "Loading...";
    await usersStore.loadNextPage();
    element.innerHTML = "";
    renderTable(element)
    renderBtns(element)
}