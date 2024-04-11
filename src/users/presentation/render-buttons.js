import usersStore from "../store/users-store";
import { renderTable } from "./render-table/render-table";





export const renderBtns = (element) => {
    const previousUsersBtn = document.createElement("button");
    previousUsersBtn.innerText = "Prev"
    
    const nextUsersBtn = document.createElement("button");
    nextUsersBtn.innerText="Next"
    const currentPage = document.createElement("span");
    currentPage.style.margin="0 10px"
    currentPage.innerText=`${usersStore.getCurrentPage()}`
    
    
    previousUsersBtn.addEventListener("click",async () => {
        await usersStore.loadPreviousPage();
        currentPage.innerText=`${usersStore.getCurrentPage()}`
        renderTable(element)
    });
    nextUsersBtn.addEventListener("click",async () => {
        await usersStore.loadNextPage();
        currentPage.innerText=`${usersStore.getCurrentPage()}`
        renderTable(element)
    });
  element.append(previousUsersBtn,currentPage ,nextUsersBtn)
}