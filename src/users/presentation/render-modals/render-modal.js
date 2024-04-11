import modalHTML from "./render-modal.html?raw"
import "./render-modal.css"
let modal,form,buttonSubmit;


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const renderModal = (element) => {
    
    if (modal) return;
    modal = document.createElement("div");
   
    modal.innerHTML =modalHTML;
    modal.className = "modal-styles modal-hidden";
    element.append(modal);
    form = modal.querySelector("form");
    
    modal.addEventListener('click', (event) => {
        if ( event.target.className === 'modal-dialog' ) {
            hideModal();
        }  
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        const userLike = {};
        for (let [key,value] of formData) {
        

            // TODO: balance value to number
            if (key === "balance") {
                userLike[key]= +value
                continue
            }
            
            // TODO: IsActive value to true or false
            if (key === "isActive") {
                userLike[key] = (value === "off") ? false : true;
                
                continue
            }
            userLike[key]= value
            
        }console.log(userLike)
        hideModal()
    })
}
export const showModal = () => {
    modal?.classList.remove("modal-hidden");
}
const hideModal = () => {
    modal?.classList.add("modal-hidden");
    form.reset()
}