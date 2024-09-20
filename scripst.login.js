const email = 'admin@gmail.com';
const senha = '123456';
const form = document.querySelector('form');

//certifia que email e senha estão corretos;
let logado = () => {
    const inputEmail = document.querySelector('#loginEmail');
    const inputSenha = document.querySelector('#loginSenha');

    if(email === inputEmail.value && senha === inputSenha.value){
        sessionStorage.setItem('logado', true);
        window.location.href = 'index.html';
    }else{
        alert('usuario ou senha incorretos!');
    };
}


form.addEventListener('submit', (evt)=>{
    evt.preventDefault();

    logado();

})

