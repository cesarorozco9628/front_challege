import './style.css'
import javascriptLogo from './javascript.svg'
import morganaLogo from '/morgana-white.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
// <h1>Descubre cuánto pagarías al mes por vivir en tu casa ideal</h1>
// <p>Juega con nuestro simulador y descubre al instante las condiciones que necesitarías para conseguir tu mejor crédito hipotecario.</p>
//   <div class="container">
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${morganaLogo}" class="logo" alt="Morgana logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Morganers!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

setupCounter(document.querySelector('#counter'))
