
const formulario = document.querySelector('form');
const produto = formulario.querySelector('#inputproduto');
const quantidade = formulario.querySelector('#inputquantidade');
const valor = formulario.querySelector('#inputvalor');
let consumidos = [];

function entradaVazia (entrada, mensagem){
    if(entrada.value === ''){
        alert(mensagem);
        return true;
    }
    return false;
}

function validaDados (){

    if(
        entradaVazia (produto, 'Informe um produto!') ||
        entradaVazia (quantidade, 'Informe a quantidade!') ||
        entradaVazia (valor, 'Informe um valor')    
    ){
        return true;
    }
    return false;
    
}


const creatTable = () =>{
    let tdQuant = document.createElement('td');
    tdQuant.innerHTML = consumidos[consumidos.length -1].quantidade;

    let tdProduto = document.createElement('td');
    tdProduto.innerHTML = consumidos[consumidos.length -1].produto;

    let tdValor = document.createElement('td');
    tdValor.innerHTML = consumidos[consumidos.length -1].valor;

    let btnApaga = document.createElement('button');
    btnApaga.innerHTML = 'X';

    let tdApaga = document.createElement('td');
    tdApaga.append(btnApaga);
    


    console.log(tdQuant);
    console.log(tdProduto);
    console.log(tdValor);
    console.log(btnApaga);
    console.log(tdApaga);
}

 

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    if(validaDados() === false ){

    consumidos.push({produto:produto.value, quantidade:quantidade.value, valor:valor.value});
    console.log(consumidos);
    creatTable();
    }
});