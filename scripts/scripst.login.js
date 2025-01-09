
let login = JSON.parse(sessionStorage.getItem('logado'));
if(login){
    window.location.href = 'index.html';
}

const form = document.querySelector('form');
const email = 'admin@gmail.com';
const senha = '123456';
const button = form.querySelector('#cadastreSe');
    button.addEventListener('click', ()=>{
        window.location.href = 'register.html';
    })


//certifia que email e senha estão corretos;
let logado = async () => {
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



