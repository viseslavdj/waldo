import { clear } from "./timer";

import "./styles.css";

function game(){

 
  clear();
 
  let content = document.getElementById('content');
  content.classList.add('content');

  let container = document.createElement('div');
  container.classList.add('container');

  let para = document.createElement('p');
  para.classList.add("param");
  para.innerHTML = "Let's find them all (without dog)"
  para.classList.add("game-text");
  container.appendChild(para);

  let allpeople = document.createElement('div');
  allpeople.classList.add("allpeople");
  let fimg = document.createElement('img');
  fimg.src = "./images/wheres-wally.jpg";
  fimg.classList.add("people");
  allpeople.appendChild(fimg);
  container.appendChild(allpeople);

  let game_picture = document.createElement('div');
  game_picture.classList.add("slika");
  let image = document.createElement('img');
  image.src="./images/beach_easy.jpg";
  image.classList.add("game_pic");
  game_picture.appendChild(image);
  container.appendChild(game_picture);

 
  

  return container; //content.appendChild(container);


}
 export { game };
 