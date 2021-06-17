
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Requisitos

## Introdução

A rede de restaurantes Coco Bambu possui um cardápio tão extenso que a equipe de cada unidade não tem conhecimento profundo sobre todos os itens. Assim, a concepção desse projeto foi elaborar um site que seria acessado na cozinha para que as receitas pudessem ser consultadas e atualizadas com facilidade.

Lembre-se: o site deve ser responsivo para funcionar em tablets (a partir de 768px de largura) e desktops.


## Login

O sistema deve possuir um tela de login (arquivo `0 - Gestão-cozinha.jpg`) que deve validar se o username e senha estão corretos.

A validação pode ser feita diretamente no front-end para um par determinado de username e senha (ex.: testeusername / testesenha).


## Lista de Receitas

Após o login, o usuário deve ser direcionado para a tela de lista de receitas (arquivo `1 - Gestão-cozinha.jpg`). Observe que essa tela inicialmente foi concebida para que cada receita gerasse diversos pedidos, mas, por simplicidade, essa tela deve apenas listar as receitas.

Portanto, as informações relativas ao pedido não precisam ser exibidas (ex.: a mensagem “Prato Finalizado“ e a bolinha cinza indicando o horário no qual o pedido foi feito).
A barra de busca por texto, localizada no cabeçalho, deve filtrar as receitas em memória.


## Detalhes da Receita

Após clicar em “Ver receita“, o usuário deve ser direcionado para a página de detalhes da receita (arquivo `2 - Gestão-cozinha1.jpg`).
Por simplicidade, essa página precisa apenas listar todos os ingredientes e passos da preparação em caixas de seleção. Enquanto existir algum ingrediente ou passo da preparação desmarcado, o botão do final da página deve estar desabilitado.

Após tudo ser marcado, o estado deve ser o do arquivo `3 - Gestão-cozinha1.jpg`. Ao clicar no botão “Finalizar“, o sistema deve exibir uma janela modal com uma mensagem genérica de prato finalizado (arquivo `3 - Gestão-cozinha2.jpg`).


## API

A API deve ser desenvolvida em Node.js e deve ser a fonte de dados de receita da aplicação. Não é obrigatório que estejam armazenados em um banco de dados, mas isso seria um bônus interessante.


## Versionamento

O código deve ser disponibilizado em um repositório do GitHub, Bitbucket ou similar, e deve conter um arquivo do tipo README para nos instruir como executar seu projeto em nosso ambiente.

## Conclusão

Caso algo não esteja claro, fique à vontade para fazer perguntas.
