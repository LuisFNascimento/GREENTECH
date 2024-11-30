var localCarrinho = localStorage.getItem("carrinho");

if (localCarrinho) {
  var carrinho = JSON.parse(localCarrinho);
  if (carrinho.length > 0) {
    //TEM ITENS NO CARRINHO
    //RENDERIZAR O CARRINHO
    renderizarCarrinho();
    //SOMAR TOTAIS DO PRODUTOS
  } else {
    //MOSTRAR CARRINHO VAZIO
    carrinhoVazio();
  }
} else {
  //MOSTRAR CARRINHO VAZIO
  carrinhoVazio();
}

function renderizarCarrinho() {
  //ESVAZIAR A ÁREA DOS ITENS
  $("#listaCarrinho").empty();

  //PERCORRER O NOSSO CARRINHO E ALIMENTAR A ÁREA
  $.each(carrinho, function (index, itemCarrinho) {
    var itemDiv = `
            <!--ITEM DO CARRINHO-->
            <div class="item-carrinho" data-index="${index}">
                <div class="area-img">
                    <img src="${itemCarrinho.item.imagem}" />
                </div>
                    <div class="area-details">
                        <div class="sup">
                            <span class="name-prod"> ${itemCarrinho.item.nome} </span>
                            <a class="delete-item" href="#">
                            <i class="mdi mdi-close"></i>
                            </a>
                        </div>
                            <div class="middle">
                            <span>${itemCarrinho.item.principal_caracteristica}</span>
                            </div>
                        <div class="preco-quantidade">
                            <span>${itemCarrinho.item.preco_promocional.toLocaleString("pr-Br",{style: "currency", currency: "BRL"})}</span>
                            <div class="count">
                            <a class="minus" data-index="${index}" href="#">-</a>
                            <input readonly class="qtd-item" type="text" value="${itemCarrinho.quantidade}" />
                            <a class="plus" data-index="${index}" href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $("#listaCarrinho").append(itemDiv);
  });
}

function calcularTotal(){
    var totalCarrinho = 0;
    $.each(carrinho, function (index, itemCarrinho){
        totalCarrinho += itemCarrinho.total_item;
    });

    
}

function carrinhoVazio() {
  console.log("Carrinho está vazio");
  //ESVAZIAR LISTA CARRINHO
  $("#listaCarrinho").empty();

  //SUMIR OS ITENS DE BAIXO BOTÕES E TOTAIS
  $("#toolbarTotais").addClass("display-none");
  $("#toolbarCheckout").addClass("display-none");

  //MOSTRAR SACOLINHA VAZIA
  $("#listaCarrinho").html(`
        <div class="text-align-center">
            <img width="300" src="img/empty.gif">
            <br><span class="color-gray">Nada por enquanto...
        </div>
    `);
}

$("#esvaziar").on("click", function () {
  app.dialog.confirm(
    "Tem certeza que quer esvaziar o carrinho?",
    "<strong>ESVAZIAR</strong>",
    function () {
      //APAGAR O LOCALSTORAGE DO CARRINHO
      localStorage.removeItem("carrinho");
      app.views.main.router.refreshPage();
    }
  );
});
