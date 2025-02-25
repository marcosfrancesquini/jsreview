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
      for(let i = 3; i > 0; i++)
        mensagemErro.innerHTML("       ");
    });
    const senha = document.getElementById('password').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;
    if (senha !== confirmaSenha) {
        erros.push('As senhas não coincidem');        
    } 
    if (senha.length < 6 || senha.length > 8) {
        erros.push('A senha tem que estar entre 6 e 8 caracteres.');
    }

    erros.forEach(erro => {
        const mensagemErroElement = document.createElement('h6');
        mensagemErroElement.textContent = erro;
        mensagemErro.appendChild(mensagemErroElement);
    });
    //document.getElementById('mensagemErro').innerText = erros;
   
});

