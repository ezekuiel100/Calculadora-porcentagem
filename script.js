let numero = document.querySelector("#numero");
let porcentagem = document.querySelector("#porcentagem");
let botao = document.querySelector(".calcular");
let resultado = document.querySelector(".resultado");

botao.addEventListener("click", () => {
  if (!numero.value || !porcentagem.value) {
    alert("Insira ambos os valores");
    return;
  }

  if (numero.value < 0 || porcentagem.value < 0) {
    alert("Insira valores positivos");
    return;
  }

  let calculo = (porcentagem.value / 100) * numero.value;
  resultado.textContent = calculo.toFixed(2);
});
