const ondeVoceEsta = document.querySelector("#elementoOndeVoceEsta");

ondeVoceEsta.parentElement.style.color = "blue";
ondeVoceEsta.firstElementChild.innerText = "Primeiro Filho Do Filho!";

console.log(ondeVoceEsta.parentElement.firstElementChild); //Acessando "primeiroFilho" por Pai
console.log(ondeVoceEsta.previousElementSibling); //Acessando "primeiroFilho" por elemento "OndeVoceEsta"
console.log(ondeVoceEsta.nextSibling); //Acessando proximo nó por elemento "OndeVoceEsta"
console.log(ondeVoceEsta.nextElementSibling); //Acessando "TerceiroFilho" por elemento "OndeVoceEsta"
console.log(ondeVoceEsta.parentElement.lastElementChild.previousElementSibling); //Acessando "TerceiroFilho" por Pai

const irmaoOndeVoceEsta = document.createElement("section");
irmaoOndeVoceEsta.id = "irmaoOndeVoceEsta";
ondeVoceEsta.parentElement.appendChild(irmaoOndeVoceEsta);

const FilhoOndeVoceEsta = document.createElement("section");
FilhoOndeVoceEsta.id = "FilhoOndeVoceEsta";
ondeVoceEsta.appendChild(FilhoOndeVoceEsta);

const FilhoDoPrimeiroFilhoDoFilho = document.createElement("section");
FilhoDoPrimeiroFilhoDoFilho.id = "FilhoDoPrimeiroFilhoDoFilho";
ondeVoceEsta.firstElementChild.appendChild(FilhoDoPrimeiroFilhoDoFilho);

console.log(FilhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling); //Acessando "TerceiroFilho" por FilhoDoPrimeiroFilhoDoFilho

const pai = document.querySelector("#pai");

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = pai.childNodes[index];
    console.log(currentChildren);
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
      currentChildren.remove();
    }
}

  const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
  segundoEUltimoFilhoDoFilho.remove();