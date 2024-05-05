function calcularAdubacao() {
  const pesInput = document.getElementById('pes');
  const gemasPorPeInput = document.getElementById('gemasPorPe');
  const valorSacoInput = document.getElementById('valorSaco');
  const numAdubacoesInput = document.getElementById('numAdubacoes');

  const pes = parseFloat(pesInput.value);
  const gemasPorPe = parseInt(gemasPorPeInput.value);
  const valorSaco = parseFloat(valorSacoInput.value);
  const numAdubacoes = parseInt(numAdubacoesInput.value);

  if (!isNaN(pes) && !isNaN(gemasPorPe) && !isNaN(valorSaco) && !isNaN(numAdubacoes) && numAdubacoes >= 1) {
    const pesoSaco = 50; // Peso do saco de adubo em kg
    const pésPorSaco = Math.floor(pesoSaco / (gemasPorPe / 1000)); // Quantidade de pés que um saco de 50kg aduba
    const sacosPorPé = Math.ceil(pes / pésPorSaco); // Quantidade de sacos necessários para adubar os pés
    const sacosTotal = sacosPorPé * numAdubacoes;
    const custoTotal = sacosTotal * valorSaco;

    const resultado = `Cada saco de adubo de 50 kg aduba aproximadamente ${pésPorSaco} pés. Para ${pes} pés, serão necessários ${sacosPorPé} sacos de adubo. Para ${numAdubacoes} adubações, serão necessários ${sacosTotal} sacos de adubo, totalizando R$ ${custoTotal.toFixed(2)}.`;
    document.getElementById('resultado').textContent = resultado;
  } else {
    document.getElementById('resultado').textContent = "Por favor, preencha todos os campos com valores válidos.";
  }
}