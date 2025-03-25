let botaoEl = document.querySelector("#botao");
let divReceitaEl = document.querySelector("#receita");

botaoEl.addEventListener("click", () => {
    divReceitaEl.classList.toggle("sumido");
}); 