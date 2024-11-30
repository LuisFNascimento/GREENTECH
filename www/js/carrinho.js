var localCarrinho = localStorage.getItem('carrinho');

if (localCarrinho) {
    var carrinho = JSON.parse(localCarrinho);
    if(carrinho.length > 0){
        //TEM ITENS NO CARRINHO
        //RENDERIZAR O CARRINHO 
        //SOMAR TOTAIS DO PRODUTOS
    }else {
        //MOSTRAR CARRINHO VAZIO
        carrinhoVazio();
    }
} else {
    //MOSTRAR CARRINHO VAZIO
    carrinhoVazio();
}

function carrinhoVazio(){
    console.log('Carrinho está vazio');
    //ESVAZIAR LISTA CARRINHO
    $("#listaCarrinho").empty();

    //SUMIR OS ITENS DE BAIXO BOTÕES E TOTAIS
    $("#toolbarTotais").addClass('display-none');
    $("#toolbarCheckout").addClass('display-none');

    //MOSTRAR SACOLINHA VAZIA
    $("#listaCarrinho").html(`
        <div class="text-align-center">
            <img width="300" src="img/empty.gif">
            <br><span class="color-gray">Nada por enquanto...
        </div>
    `);
}

$("#esvaziar").on('click', function(){
    app.dialog.confirm('Tem certeza que quer esvaziar o carrinho?', '<strong>ESVAZIAR</strong>', function(){
        //APAGAR O LOCALSTORAGE DO CARRINHO
        localStorage.removeItem('carrinho');
        app.views.main.router.refreshPage();
    });
})

