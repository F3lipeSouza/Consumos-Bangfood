//captura dados do produto, quantidade e preço;
const formulario = document.querySelector('form');
const produto = formulario.querySelector('#inputproduto');
const quantidade = formulario.querySelector('#inputquantidade');
const valor = formulario.querySelector('#inputvalor');
const tabela = document.querySelector('table');
const valorTotal = document.querySelector('#total');

//cria lista dos produtos que foram consumidos;
let consumidos = [];

//verifica se entradas foram preenchidas;
function entradaVazia (entrada, mensagem){
    if(entrada.value === ''){
        alert(mensagem);
        return true;
    }
    return false;
}

//lança alerta caso não tenha preenchido entradas corretamente
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

 const tagTd = (inf)=>{
    document.createElement('td');
    innerHTML = consumidos[consumidos.length -1].inf;
    return inf.value
 }

//cria tabela dinamica de produtos consumidos;
const creatTable = () =>{
    //cria tabela na memoria;
    let tdQuant = tagTd(quantidade);
    let tdProduto = tagTd(produto);
    let tdValor = tagTd(valor);

    let btnApaga = document.createElement('button');
    btnApaga.innerHTML = 'X';
    btnApaga.id = consumidos.length;
    btnApaga.addEventListener('click', apagaConsumo);

    //lança na tela dados de consumidos;
    let tdApaga = document.createElement('td');
    tdApaga.append(btnApaga);

    let postTable = document.createElement('tr');
    postTable.id = 'tr' + consumidos.length;
    postTable.append(tdQuant, tdProduto, tdValor, tdApaga);

    let table = document.querySelector('.tabela');
    table.append(postTable);
}

const somaTotal = ()=>{
    let total = 0
    let valor = quantidade*valor;
    console.log(total)
    return total
}
 


//funçao de submição ao click do botão '+'; 
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    if(validaDados() === false ){

    consumidos.push({id:consumidos.length +1, produto:produto.value, quantidade:quantidade.value, valor:valor.value});
    console.log(consumidos);
    creatTable();
    valorTotal = somaTotal();
    formulario.reset();
    
    }
});


const apagaConsumo = (b) => {
    //apaga da memoria dados salvos de consumidos;
    let bId = b.target.id;
    console.log(consumidos);

    for(let i = 0; i < consumidos.length; i++)
        if(consumidos[i].id == bId){
            consumidos.splice(i, 1);
            
            //apaga da tela dados slavos de consumidos;
            let apagaTr = document.querySelector('#tr'+ bId)
            
            console.log(consumidos);
            tabela.removeChild(apagaTr);
        }
        
    }
    


