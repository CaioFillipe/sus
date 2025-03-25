let botaoEl = document.querySelector("#botao");
let divReceitaEl = document.querySelector("#receita");

botaoEl.addEventListener("click", () => {
    divReceitaEl.classList.toggle("sumido");
}); 

let selecteL = document.querySelector("#selectzinho");

selecteL.addEventListener("change", () => {
    divReceitaEl.classList.add("sumido");
})