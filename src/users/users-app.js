import { renderAddButton } from "./presentation/render-app-button/render-add-button";
import { renderBtns } from "./presentation/render-buttons";
import { renderModal } from "./presentation/render-modals/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./use-cases/save-users";

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
    renderModal(element,async (userLike) => {
        const user = await saveUser(userLike);
        onUserChanged(user);
        renderTable(element)
    })
    
}