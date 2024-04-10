import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users:[],
}
//TODO:
const loadNextPage =async () => {
    const users = await loadUsersByPage(state.currentPage + 1);
    console.log('users.length:', users.length); 
    if (users.next === null) return;
    console.log(users)
    state.currentPage += 1;
    console.warn(state.currentPage)
    state.users = users;
}
const loadPreviousPage =async () => {
    const users=await loadUsersByPage(state.currentPage - 1);
    if (state.currentPage === 1) return;
    state.currentPage -= 1;
    state.users = users;
}
const onUserChanged = () => {
    throw new Error("Not implemented");
}
const reloadPage = () => {
    throw new Error("Not implemented");
}
export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    //Se hace una copia del objeto con el operador spread, quienes pasan por referencia
    getUsers: () => [...state.users],
    //No se hace copia por que al ser un valor primitivo se pasa por valor
    getCurrentPage:()=> state.currentPage,
}