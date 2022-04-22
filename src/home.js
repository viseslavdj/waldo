import { game } from './game.js'

function home(){
  let content = document.getElementById('content');
  content.classList.add('content');

  let container = document.createElement('div');
  container.classList.add('container');

  
  let headline = document.createElement('h2');
  headline.innerHTML = "Let's find Wally and company";
  container.appendChild(headline);

  let image = document.createElement('img');
  image.src="./images/beach_easy.jpg"
  image.classList.add("lvl")
  container.appendChild(image);

  image.addEventListener("click", function(){render ('game');})

  function render(page){
      let content = document.getElementById('content');
    
      switch (page){
        case 'game':
          console.log("game");
          content.appendChild(game());
          break;
        
        default:
    
      }
    }
    
    

  

  return container;

}
 export { home };