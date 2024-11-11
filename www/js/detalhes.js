//RECUPERAR O ID DETALHE NO LOCALSTORAGE
var id = parseInt(localStorage.getItem('detalhe'));

//PEGAR OS PRODUTOS DO LOCALSTRORAGE
var produtos = JSON.parse(localStorage.getItem('produtos'));

var item = produtos.find(produto => produto.id === id);

if (item) {
    console.log('Produto encontrado: ', item);

    //ALIMENTAR COM OS VALORES DO ITEM
    $("#imagem-detalhe").attr('src', item.imagem);
    $("#nome-detalhe").html(item.nome);
    $("#rating-detalhe").html(item.rating);
    $("#like-detalhe").html(item.likes);
    $("#review-detalhe").html(item.reviews);
    $("#descricao-detalhe").html(item.descricao);
    $("#preco-detalhe").html(item.preco);
    $("#preco_promocao-detalhe").html(item.preco_promocional);

} else {
    console.log('Produto não encontrado');
}

