import modalHTML from "./render-modal.html?raw"
import "./render-modal.css"
import { saveUser } from "../../use-cases/save-users";
let modal,form,buttonSubmit;


/**
 * 
 * @param {HTMLDivElement} element 
 * @param {{userLike}=>Promise<void> }callback
*/

export const renderModal = (element,callback) => {
    
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
    form.addEventListener("submit",async (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        const userLike = {};
        if(!formData.get('isActive')){
            formData.append('isActive', 'off');
        }
        for (let [key,value] of formData) {
        
            if (key === "balance") {
                userLike[key]= +value
                continue
            }
        
            if (key === "isActive") {
                userLike[key] = (value === "off") ? false : true;     
                try {
                    console.log(userLike[key])
                } catch (error) {
                    console.error(error)
                }
                continue
            }
            userLike[key]= value
            
        }
        await callback(userLike)
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