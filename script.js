let numero = document.querySelector("#numero");
let porcentagem = document.querySelector("#porcentagem");
let butao = document.querySelector(".calcular");
let resultado = document.querySelector(".resultado");

butao.addEventListener("click", () => {
  let a = (porcentagem.value / 100) * numero.value;
  resultado.textContent = a;
});
