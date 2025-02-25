let erros = []

const letraMaiuscula = !/[A-Z]/;
//if (letraMaiuscula.test(password)){
//  erros.push("A senha deve conter pelo menos um caractere masúsculo.");
//};

let mensagemErro = document.getElementById('mensagemErro');
//mensagemErro.innerHTML = erros.join(<br/>);

const btnRegistrar = document.getElementById('btnRegistrar');

btnRegistrar.addEventListener('click', function (event) {
    // letraMaiuscula(test)
    event.preventDefault();
    const senha = document.getElementById('password').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;
    if (senha !== confirmaSenha) {
        document.getElementById('mensagemErro').innerText = 'As senhas não coincidem!';
    } else {        
        document.getElementById('mensagemErro').innerText = '';
    }
});

