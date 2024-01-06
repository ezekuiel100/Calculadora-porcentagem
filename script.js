let numero = document.querySelector("#numero");
let porcentagem = document.querySelector("#porcentagem");
let botaoCalcular = document.querySelector(".calcular");
let resultado = document.querySelector("#resultado");

botaoCalcular.addEventListener("click", () => {
  if (!numero.value || !porcentagem.value) {
    alert("Insira ambos os valores");
    return;
  }

  if (numero.value < 0 || porcentagem.value < 0) {
    alert("Insira valores positivos");
    return;
  }

  let calculo = (porcentagem.value / 100) * numero.value;
  resultado.value = calculo;
});
