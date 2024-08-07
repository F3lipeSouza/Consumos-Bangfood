
const formulario = document.querySelector('form');
let consumidos = [];

formulario.addEventListener('submit', (event) =>{

    event.preventDefault();

    //capturar elementos dos inputs do formulario;
    let produto = formulario.querySelector('#inputproduto');
    let quantidade = formulario.querySelector('#inputquantidade');
    let valor = formulario.querySelector('#inputvalor');

    //validar informações do formulario;

    if(produto.value == ''){
        alert('Informe o produto!');
    }

    if(quantidade.value == ''){
        alert('Informe a quantidade!');
    }
    
    if(valor.value == ''){
    alert('Informe o valor!');
    }

    

} );