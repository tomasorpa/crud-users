import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

import { loadUsersByPage } from './src/users/use-cases/load-users-by-page.js'
import { app } from './src/users/users-app.js'
document.querySelector('#app').innerHTML = `
  <div>
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>Users Information!</h1>
    <div class="card">
     
    </div>
    
  </div>
`


const element = document.querySelector(".card");
app(element)