import { renderAddButton } from "./presentation/render-app-button/render-add-button";
import { renderBtns } from "./presentation/render-buttons";
import { renderModal } from "./presentation/render-modals/render-modal";
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
    
       
    renderBtns(element)
    renderTable(element)
    renderAddButton(element)
    try {
         renderModal(element)
    } catch (error) {
        console.error(error)
    }
}