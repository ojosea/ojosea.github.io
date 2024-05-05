function calculatePlants() {
    const spacingP = parseFloat(document.getElementById('spacingP').value);
    const spacingC = parseFloat(document.getElementById('spacingC').value);
    const hectares = parseFloat(document.getElementById('hectares').value);
    const hectareArea = 10000; // Em metros quadrados
    const totalArea = hectares * hectareArea;

    const plantArea = spacingP * spacingC;
    const numPlants = Math.floor(totalArea / plantArea);

    document.getElementById('result').innerText = `Você pode plantar aproximadamente ${numPlants} plantas de café em ${hectares} hectares.`;
}