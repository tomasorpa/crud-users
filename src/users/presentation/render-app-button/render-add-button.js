
import { showModal } from '../render-modals/render-modal';
import './render-add-button.css'

/**
 * 
 * @param {DivElementHTML} element 
 */
export const renderAddButton = (element) => {
    
    const addButton = document.createElement("button");
    addButton.classList.add("addButton")
    addButton.innerText="+"
    element.append(addButton)

    addButton.addEventListener("click", () => {
        showModal()
    })
}