
//captura dados do produto, quantidade e preço;
const formulario = document.querySelector('form');
const produto = formulario.querySelector('#inputproduto');
const quantidade = formulario.querySelector('#inputquantidade');
const valor = formulario.querySelector('#inputvalor');
const tabela = document.querySelector('table');
let total = 0;
const valorTotal = document.querySelector('#total'); 

//cria lista dos produtos que foram consumidos;
let consumidos = JSON.parse(localStorage.getItem('consumidos')) || Array();


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
const creatTable = (quant, prod, val) =>{
    //cria tabela na memoria;
    
    let tdQuant = tagTd(quant);
    let tdProduto = tagTd(prod);
    let tdValor = tagTd(val);

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


//funçao de submição ao click do botão '+'; 
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();



    if(validaDados() === false ){

    consumidos.push({id:consumidos.length +1, produto:produto.value, quantidade:quantidade.value, valor:valor.value});
    localStorage.setItem("consumidos", JSON.stringify(consumidos));
    creatTable(quantidade, produto, valor);
    somaTotal();
    formulario.reset();
    return consumidos
    }
});

//soma o valor total da aplicação;
const somaTotal = ()=>{
    valorTotal.innerHTML = '';
    
    let gasto = 0
    for(let i=0; i < consumidos.length; i++){
        let converteVirgula = consumidos[i].valor.replace(',', '.');
        gasto = consumidos[i].quantidade * converteVirgula;
    }
    total = total + gasto;
    valorTotal.innerHTML = total;
    return total
}



const apagaConsumo = (b) => {
    //apaga da memoria dados salvos de consumidos;
    let bId = b.target.id;
    console.log(consumidos);

    for(let i = 0; i < consumidos.length; i++)
        if(consumidos[i].id == bId){
            //subtrai valor na soma total;
            let converteVirgula = consumidos[i].valor.replace(',', '.');
            valorTotal.innerHTML = '';
            total -= consumidos[i].quantidade * converteVirgula;
            console.log(total);
            valorTotal.innerHTML = total;
            
            consumidos.splice(i, 1);
            
            //apaga da tela dados slavos de consumidos;
            let apagaTr = document.querySelector('#tr'+ bId)
            
            console.log(consumidos);
            tabela.removeChild(apagaTr);
            return total

        }
        
}
