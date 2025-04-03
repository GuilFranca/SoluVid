// Lista de usuários cadastrados

const usuarios = [
    { usuario: "admin", senha: "13579" },
    { usuario: "admin2", senha: "123" }
]

const btnLogin = document.getElementById('btn__login');

// Função de login
function login() {
    let username = document.getElementById('username').value;
    let senha = document.getElementById('senha').value;
    let mensagemErro = document.getElementById('mensagem__erro');

    // Verificando se o usuário e senha existem na lista
    let usuarioEncontrado = usuarios.find(u => u.usuario === username && u.senha === senha);

    if (usuarioEncontrado) {
        localStorage.setItem("usuarioLogado", username); // Salva o usuário logado
        window.location.href = "main.html"
    } else {

    }


}

btnLogin.addEventListener('click', function() {
    login();
});
