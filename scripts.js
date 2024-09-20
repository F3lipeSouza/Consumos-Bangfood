//verifica se usuario esta logado no sistema;
let logado = JSON.parse(sessionStorage.getItem('logado'));
if(!logado){
    window.location.href = 'login.html';
}

//captura dados do produto, quantidade e preço;
const formulario = document.querySelector('form');
const produto = formulario.querySelector('#inputproduto');
const quantidade = formulario.querySelector('#inputquantidade');
const valor = formulario.querySelector('#inputvalor');
const tabela = document.querySelector('.tabela');
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
    return inf
}

//cria tabela dinamica de produtos consumidos;
const creatTable = (quant, prod, val) =>{
    //cria tabela na memoria;
    
    let tdQuant = tagTd(quant);
    let tdProduto = tagTd(prod);
    let tdValor = tagTd(val);

    let btnApaga = document.createElement('button');
    btnApaga.innerHTML = 'X';
    btnApaga.addEventListener('click', apagaConsumo);

    //lança na tela dados de consumidos;
    let tdApaga = document.createElement('td');
    tdApaga.append(btnApaga);

    let postTable = document.createElement('tr');
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
    creatTable(quantidade.value, produto.value, valor.value);
    somaTotal();
    atualizaId();
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



//apaga da memoria dados salvos de consumidos;
const apagaConsumo = (b) => {
    let bId = b.target.id;

    for(let i = 0; i < consumidos.length; i++){
        if(consumidos[i].id == bId){
            //subtrai valor na soma total;
            let converteVirgula = consumidos[i].valor.replace(',', '.');
            total -= consumidos[i].quantidade * converteVirgula;
            valorTotal.innerHTML = total;
            
            consumidos.splice(i, 1);
            localStorage.setItem('consumidos', JSON.stringify(consumidos));
          
            console.log(localStorage.getItem('consumidos'));

            //apaga da tela dados slavos de consumidos;
            let tr = document.getElementById(bId);
            
            tabela.removeChild(tr);
            
            atualizaId();
             
            return total
            
        }
    }    
}

//atualiza o id dos botões e tr's;
const atualizaId = () =>{
    let botões = document.querySelectorAll('button');
    let tr = document.querySelectorAll('tr');

    for(let i = 0; i < botões.length; i++){
        botões[i].id =  i + 1;
        tr[i].id = i + 1;
    }
    for(let i = 0; i < consumidos.length; i++){
        consumidos[i].id = i +1;
    }
}

//inicia aplicaçao com valores salvos do navegador;
const iniciaValores = () =>{
    if(consumidos){
        for(let i = 0; i < consumidos.length; i++){
            creatTable(consumidos[i].quantidade, consumidos[i].produto, consumidos[i].valor);
            somaTotal();
            atualizaId();
        }
    }
}
iniciaValores()

//localStorage.clear();