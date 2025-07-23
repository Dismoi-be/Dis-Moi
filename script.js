// Este arquivo pode ser usado para interatividade do site, como validação de formulários, etc.
// Exemplo de como adicionar um alerta simples no login:
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login efetuado com sucesso!");
});
