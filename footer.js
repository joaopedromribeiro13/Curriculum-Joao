function atualizarEstiloComBaseNaTela() {
  var larguraDaTela = window.innerWidth;
  let el = document.getElementById('grid-footer');

  if (larguraDaTela < 975) {
    el.style.justifyContent = 'center';
    el.style.paddingLeft = '0';
    el.style.paddingRight = '0';
  } else {
    el.style.justifyContent = 'space-between';
    el.style.paddingLeft = '10%';
    el.style.paddingRight = '10%';
  }
}

window.addEventListener("resize", atualizarEstiloComBaseNaTela);
atualizarEstiloComBaseNaTela();
