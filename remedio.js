function calcular() {
  // Obter os valores dos campos do formulário
  const quantidadePes = parseFloat(document.getElementById('quantidadePes').value);
  const dosePorPlanta = parseFloat(document.getElementById('dosePorPlanta').value);
  const dosePorBomba = parseFloat(document.getElementById('dosePorBomba').value);
  const valorProduto = parseFloat(document.getElementById('valorProduto').value);
  const quantidadeProduto = parseFloat(document.getElementById('quantidadeProduto').value) * 1000; // Converter kg para g ou litros para ml

  // Verificar se todos os campos estão preenchidos e são válidos
  if (!quantidadePes || !dosePorPlanta || !dosePorBomba || !valorProduto || !quantidadeProduto || isNaN(quantidadePes) || isNaN(dosePorPlanta) || isNaN(dosePorBomba) || isNaN(valorProduto) || isNaN(quantidadeProduto)) {
    document.getElementById('resultado').textContent = "Por favor, preencha todos os campos com valores válidos.";
    return; // Parar a execução se algum campo estiver vazio ou não for um número
  }

  // Calcular o resultado de "Faz cada bomba"
  const fazCadaBomba = 20000 / dosePorPlanta; // Capacidade da bomba em ml dividido pela dose por planta

  // Calcular o resultado de "Gasto total de bombas"
  let gastoTotalBombas = quantidadePes / fazCadaBomba;
  gastoTotalBombas = Math.ceil(gastoTotalBombas); // Arredonda para cima

  // Calcular o resultado de "Valor gasto por bomba"
  const valorGastoBomba = (valorProduto / quantidadeProduto) * dosePorBomba;

  // Calcular o resultado de "Gasto total"
  const gastoTotal = valorGastoBomba * gastoTotalBombas;

  // Calcular o resultado de "Gasto total de produto"
  const gastoTotalProduto = gastoTotalBombas * (quantidadeProduto / 1000); // Converter de ml ou g para litros ou kg

  // Calcular o resultado de "Gasto total em litros"
  const gastoTotalLitros = gastoTotalBombas * 20;
  const gastoTotalEmLitros = gastoTotalLitros / 1000; // Converter mililitros para litros

  // Exibir os resultados
  const resultado = `
    Faz cada bomba: ${fazCadaBomba.toFixed(2)} (pes)
    Gasto total de bombas: ${gastoTotalBombas} bomba(s)
    Valor gasto por bomba: R$ ${valorGastoBomba.toFixed(2)}
    Gasto total: R$ ${gastoTotal.toFixed(2)}
    Gasto total de produto: ${gastoTotalProduto.toFixed(1)} 
    Gasto total em litros: ${gastoTotalEmLitros.toFixed(1)} litros
  `;
  document.getElementById('resultado').textContent = resultado;
}