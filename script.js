document.addEventListener("DOMContentLoaded", function () {
  const homensInput = document.getElementById("homens");
  const mulheresInput = document.getElementById("mulheres");
  const criancasInput = document.getElementById("criancas");
  const calcularButton = document.getElementById("calcular");

  function checkInputs() {
    if (homensInput.value && mulheresInput.value && criancasInput.value) {
      calcularButton.disabled = false;
    } else {
      calcularButton.disabled = true;
    }
  }

  homensInput.addEventListener("input", checkInputs);
  mulheresInput.addEventListener("input", checkInputs);
  criancasInput.addEventListener("input", checkInputs);

  calcularButton.addEventListener("click", function () {
    const homens = parseInt(homensInput.value);
    const mulheres = parseInt(mulheresInput.value);
    const criancas = parseInt(criancasInput.value);

    const carne = homens * 500 + mulheres * 300 + criancas * 200;
    const frango = homens * 200 + mulheres * 200 + criancas * 100;
    const linguica = homens * 200 + mulheres * 200 + criancas * 200;
    const refrigerante = homens * 300 + mulheres * 400 + criancas * 200;
    const cerveja = homens * 800 + mulheres * 500;

    document.getElementById("carne").textContent = carne + " g";
    document.getElementById("frango").textContent = frango + " g";
    document.getElementById("linguica").textContent = linguica + " g";
    document.getElementById("refrigerante").textContent = refrigerante + " ml";
    document.getElementById("cerveja").textContent = cerveja + " ml";
  });
});
