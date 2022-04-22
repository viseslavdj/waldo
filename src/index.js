import { home } from './home.js';

import "./styles.css";

let content = document.getElementById('content');
content.classList.add('content');
content.appendChild(home());