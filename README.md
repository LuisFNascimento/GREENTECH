# GreenTech E-commerce Application

Este projeto é uma aplicação de e-commerce mobile-first, construída utilizando o **Framework7** para criação de um design responsivo, com navegação entre abas, carrossel de banners, categorias de produtos e integração com o carrinho de compras. A aplicação também é projetada para ser utilizada como uma Progressive Web App (PWA).

## Estrutura do Projeto

### 1. **Cabeçalho (Head)**
- Definição das **metatags** para garantir que a aplicação seja responsiva e tenha uma boa visualização em dispositivos móveis.
- Inclusão de **links para arquivos CSS** essenciais, incluindo o Framework7, ícones Material Design, e CSS personalizado para o layout e design das páginas.

### 2. **Corpo (Body)**
A estrutura do corpo da aplicação é dividida em várias partes:

#### a) **Navegação Inferior (Tab Bar)**
A aplicação utiliza uma barra de navegação fixa no rodapé da página com quatro abas principais:
- **Home**: A página principal da aplicação.
- **Busca**: Para pesquisa de produtos.
- **Favoritos**: Para visualizar produtos favoritos.
- **Usuário**: Para gerenciamento do perfil do usuário.

#### b) **Página Inicial (Home)**
A página inicial contém:
- **Formulário de Busca**: Permite que o usuário procure produtos na loja.
- **Carrossel de Imagens**: Exibe banners publicitários usando o **Swiper**.
- **Categorias de Produtos**: Exibe diferentes categorias de produtos (celulares, laptops, smartwatches, etc.) com botões para filtragem.
- **Produtos**: Exibe produtos dinamicamente, com placeholders (skeletons) enquanto os dados estão sendo carregados.

#### c) **Carrinho de Compras**
A barra superior contém um ícone de **carrinho de compras** que é atualizado dinamicamente conforme o número de itens no carrinho.

### 3. **JavaScript**
O código JavaScript é responsável pela:
- **Navegação**: Usando o **Framework7** para a transição entre páginas.
- **Carregamento de Produtos**: Busca dados de produtos e os exibe dinamicamente na página.
- **Carrinho de Compras**: Mantém a contagem de itens no carrinho usando o `localStorage`.

## Funcionalidades

- **Navegação entre Abas**: A navegação entre as diferentes seções é feita por meio de abas fixas na parte inferior da tela.
- **Exibição Dinâmica de Produtos**: Os produtos são carregados e exibidos com placeholders enquanto aguardam os dados serem carregados.
- **Busca de Produtos**: O usuário pode procurar por produtos específicos.
- **Categorias de Produtos**: O usuário pode filtrar os produtos por categorias como celulares, laptops, etc.
- **Carrinho de Compras**: A quantidade de itens no carrinho é exibida no ícone do carrinho na parte superior direita.

## Dependências

- **Framework7**: Para construção da interface da aplicação e navegação.
- **jQuery**: Utilizado para manipulação do DOM.
- **Swiper**: Usado para criar o carrossel de imagens.
- **Cordova**: Para empacotar a aplicação como um aplicativo híbrido (caso seja necessário).

## Como Usar

1. **Instalação**:
   - Clone o repositório para seu ambiente local.
   - Certifique-se de ter o **Framework7** e as dependências do **Cordova** configuradas corretamente.
   - Abra o arquivo `index.html` em seu navegador ou utilize o Cordova para testar em dispositivos móveis.

2. **Execução Local**:
   Para visualizar o projeto em seu navegador, basta abrir o arquivo `index.html` após ter configurado o ambiente de desenvolvimento.
