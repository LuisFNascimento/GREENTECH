//RECUPERAR O ID DETALHE NO LOCALSTORAGE
var id = parseInt(localStorage.getItem("detalhe"));

//PEGAR OS PRODUTOS DO LOCALSTRORAGE
var produtos = JSON.parse(localStorage.getItem("produtos"));

var item = produtos.find((produto) => produto.id === id);

if (item) {
  console.log("Produto encontrado: ", item);

  //ALIMENTAR COM OS VALORES DO ITEM
  $("#imagem-detalhe").attr("src", item.imagem);
  $("#nome-detalhe").html(item.nome);
  $("#rating-detalhe").html(item.rating);
  $("#like-detalhe").html(item.likes);
  $("#review-detalhe").html(item.reviews);
  $("#descricao-detalhe").html(item.descricao);
  $("#preco-detalhe").html(item.preco.toLocaleString("pr-Br",{style: "currency", currency: "BRL"}));
  $("#preco_promocao-detalhe").html(item.preco_promocional.toLocaleString("pr-Br",{style: "currency", currency: "BRL"}));

  var tabelaDetalhes = $("#tabdetalhes");

  item.detalhes.forEach(detalhe=>{
    var linha = `
    <tr>
        <td>${detalhe.caracteristica}</td>
        <td>${detalhe.detalhes}</td>
    </tr>
    `;

    tabelaDetalhes.append(linha);
  });

} else {
  console.log("Produto não encontrado");
}

var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

//FUNÇÃO PARA ADICIONAR CARRINHO
function adicionarAoCarrinho(item, quantidade){
    var itemNoCarrinho = carrinho.find(c=> c.item.id === item.id);

    if(itemNoCarrinho){
        //JA TEM O ITEM NO CARRINHO
        //ADICIONAR QUANTIDADE
        itemNoCarrinho.quantidade += quantidade;
        itemNoCarrinho.total_item = itemNoCarrinho.quantidade * item.preco_promocional; 
    }else {
        carrinho.push({
            item: item,
            quantidade: quantidade,
            total_item: quantidade * item.preco_promocional
        })
    }

    //ATUALIZAR O LOCALSTORAGE DE CARRINHO
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

}

//CLICOU NO ADICIONAR CARRINHO
$(".add-cart").on('click', function(){
    //ADICIONAR CARRINHO
    adicionarAoCarrinho(item, 1);
    
    var toastCenter = app.toast.create({
        text: `${item.nome} adicionado ao carrinho`,
        position: 'center',
        closeTimeout: 2000,
      });

      toastCenter.open();
})

