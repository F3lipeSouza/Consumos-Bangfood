
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
    const inputEmail = document.querySelector('#loginEmail').value;
    const inputSenha = document.querySelector('#loginSenha').value;


    try{
        const response = await fetch('http://localhost:3000/login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({inputEmail, inputSenha})
        })    
        const data = await response.json();
        if(data.success){
            sessionStorage.setItem('logado', true);
            window.location.href = 'index.html';
        }else{
            alert('usuario ou senha incorretos!')
        }
    }catch{}        
}


form.addEventListener('submit', (evt)=>{
    evt.preventDefault();

    logado();

})



