let entrantesText = document.getElementById('entrante');
let bebidasText = document.getElementById('bebida');
let carneText = document.getElementById('carne');


let entrantesMenu = document.getElementById('entrantes');
let bebidasMenu = document.getElementById('bebidas');

entrantesText.addEventListener("click", entrantes)
bebidasText.addEventListener("click", bebidas)



function entrantes() {
  bebidasMenu.style.display = 'none';
  entrantesMenu.style.display = 'flex';

  bebidasText.style.color='white'; 
  entrantesText.style.color='var(--primary-color)';
}

function bebidas() {
  entrantesMenu.style.display = 'none';
  bebidasMenu.style.display = 'flex';

  entrantesText.style.color='white'; 
  bebidasText.style.color='var(--primary-color)';
}

