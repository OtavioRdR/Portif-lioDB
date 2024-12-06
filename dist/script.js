"use strict";
// Função para alternar o tema
var toggleTheme = function () {
    var body = document.body;
    body.classList.toggle('dark-mode');
};
// Espera o DOM ser carregado para garantir que o botão esteja disponível
document.addEventListener('DOMContentLoaded', function () {
    var themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        // Adiciona o ouvinte de evento para alternar o tema ao clicar no botão
        themeButton.addEventListener('click', toggleTheme);
    }
    function moveUp(element) {
        element.style.transform = "translateY(-20px)";
        setTimeout(() => {
          element.style.transform = "translateY(0)";
        }, 300); // Volta ao lugar após 300ms
      }
      
});
