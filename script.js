// JavaScript para manipulação das mensagens de erro
const mensagemErro = document.getElementById('mensagemErro');
const btnRegistrar = document.getElementById('btnRegistrar');

function mostrarMensagemErro(mensagens) {
    mensagemErro.style.display = 'block';
    mensagemErro.style.opacity = '1';
    mensagemErro.innerHTML = ''; // Limpa o conteúdo anterior

    mensagens.forEach(mensagem => {
        const mensagemErroElement = document.createElement('h6');
        mensagemErroElement.textContent = mensagem;
        mensagemErro.appendChild(mensagemErroElement);
    });
}

btnRegistrar.addEventListener('click', function (event) {
    event.preventDefault();
    const senha = document.getElementById('password').value;
    const confirmaSenha = document.getElementById('confirmPassword').value;

    let erros = [];

    if (senha !== confirmaSenha) {
        erros.push('As senhas não coincidem.');
    }
    if (senha.length < 6 || senha.length > 8) {
        erros.push('A senha deve ter entre 6 e 8 caracteres.');
    }
    if (!/[A-Z]/.test(senha)) {
        erros.push('A senha deve conter pelo menos uma letra maiúscula.');
    }
    if (!/[a-z]/.test(senha)) {
        erros.push('A senha deve conter pelo menos uma letra minúscula.');
    }
    if (!/(?=.*[!@#$%^&*(),.?":{}|<>]{2,})/.test(senha)) {
        erros.push('A senha deve ter ao menos 2 caracteres especiais.');
    }
    if (!/[0-9]/.test(senha)) {
        erros.push('A senha deve conter pelo menos um número.');
    }

    if (erros.length === 0) {
        mostrarMensagemErro(['Acesso concedido...']);
    } else {
        mostrarMensagemErro(erros);
    }
});
