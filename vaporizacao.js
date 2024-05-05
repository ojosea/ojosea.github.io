function calculate() {
    const plantsPerHectare = parseFloat(document.getElementById('plantsPerHectare').value);
    const area = parseFloat(document.getElementById('area').value);
    const dosePerPlant = parseFloat(document.getElementById('dosePerPlant').value);
    const pumpCapacity = parseFloat(document.getElementById('pumpCapacity').value);
    const dosePerPump = parseFloat(document.getElementById('dosePerPump').value);
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const priceUnit = document.getElementById('priceUnit').value;

    const totalPlants = plantsPerHectare * area;
    const totalLiters = totalPlants * dosePerPlant / 1000; // Convertendo ml para litros
    const pumpsNeeded = Math.ceil(totalLiters / pumpCapacity);
    const totalProductLiters = pumpsNeeded * dosePerPump / 1000; // Convertendo ml para litros

    let pricePerMl = productPrice / 1000; // Convertendo o preço de litro para ml
    let pumpValue = dosePerPump * pricePerMl; // Valor por bomba
    let totalValue = pumpValue * pumpsNeeded; // Valor total gasto

    document.getElementById('totalBombs').textContent = `Total de bombas gastas: ${pumpsNeeded} bombas`;
    document.getElementById('totalLiters').textContent = `Total de litros necessários: ${totalLiters.toFixed(2)} litros`;
    document.getElementById('totalProduct').textContent = `Total de produto necessário: ${totalProductLiters.toFixed(2)} litros (${(totalProductLiters * productPrice).toFixed(2)} reais)`;
    document.getElementById('pumpValue').textContent = `Valor por bomba: ${pumpValue.toFixed(2)} reais`;
    document.getElementById('totalValue').textContent = `Valor total gasto: ${totalValue.toFixed(2)} reais`;

    document.getElementById('result').style.display = 'block';
}