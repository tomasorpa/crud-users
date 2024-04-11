// import usersStore from '../../store/users-store';
// import './render-table.css';

// let table;
// let tableHeader = document.createElement("thead");
// let tableBody = document.createElement("tbody");
// tableHeader.innerHTML = `
//     <tr> 
//         <th>Id</th>
//         <th>FirstName</th>
//         <th>LastName</th>
//         <th>Balance</th>
//         <th>Avatar</th>
//         <th>Gender</th>
//         <th>IsActive</th>
//         <th>Actions</th>
//     </tr>`;

// export const renderTable = (element) => {
//     element.append(tableHeader, tableBody);
//     if (!table) {
//         let users = usersStore.getUsers();
//         let tableContent = ''; // Esta variable almacenará el contenido de la tabla

//         users.forEach(user => {
//             console.log(user.id, user.firstName);
//             tableContent += `
//             <tr> 
//                 <td>${user.id}</td>
//                 <td>${user.firstName}</td>
//                 <td>${user.lastName}</td>
//                 <td>${user.balance}</td>
//                 <td>${user.avatar}</td>
//                 <td>${user.isActive}</td>
//                 <td>${user.gender}</td>
//                 <td>
//                 <a href="#" data-id= "${user.id}" >Select</a>
//                 |
//                 <a href="#" data-id= "${user.id}" >Delete</a>
//                 </td>
//             </tr>
//             `;
//         });

//         // Asignamos el contenido de la tabla al innerHTML de tableBody
//         tableBody.innerHTML = tableContent;
//     }
// };
import usersStore from '../../store/users-store';
import './render-table.css';
import { renderBtns } from '../render-buttons';
let table;
let tableHeader=document.createElement("thead")
let tableBody = document.createElement("tbody")
tableHeader.innerHTML = `
    <tr> 
        <th>Id</th >
        <th>FirstName</th>
        <th>LastName</th>
        <th>Balance</th>
        <th>Avatar</th>
        <th>IsActive</th>
        <th>Gender</th>
        <th>Actions</th>
    </tr>`;
export const renderTable = (element) => {
    element.append(tableHeader,tableBody)
    if (!table) {
        let users = usersStore.getUsers()
        let contentTable = "";
    users.forEach(user => {
        
        contentTable += `
        <tr> 
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            
            <td>${user.balance}</td>
            <td>${user.avatar}</td>
            
            <td>${user.isActive}</td><td>${user.gender}</td>
            <td>
            <a href="#" data-id= "${user.id}" >Select</a>
            |
            <a href="#" data-id= "${user.id}" >Delete</a>

            </td>
            </tr>
        `
        
        
    })
        tableBody.innerHTML = contentTable
            
    }
    ;
}

