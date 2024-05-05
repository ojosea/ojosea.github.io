function mostrarMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = 'block';
}

function fecharModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

window.onload = function() {
  // Verifica se o cookie "visited" está definido
  if (document.cookie.indexOf('visited=') === -1) {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    // Define o cookie "visited" com duração de 30 dias
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    document.cookie = 'visited=true; expires=' + expirationDate.toUTCString() + '; path=/';
  }
}