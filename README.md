
## Procedimento

Após clonar o repositório de frontend, execute os comandos a seguir, em sequencia:

### `yarn`
### `yarn start`

Isso fará com que as dependências sejam baixadas e em seguida o serviço fique disponível para visualização em modo de desenvolvimento.


Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.


# Requisitos

## Introdução
...


## Login

O sistema deve possuir um tela de login (arquivo que deve validar se o username e senha estão corretos.

A validação pode ser feita diretamente no front-end para um par determinado de username e senha (ex.: testeusername / testesenha).


## Lista de Receitas

Após o login, o usuário é direcionado para a tela de lista de receitas. 

A barra de busca por texto, localizada no cabeçalho, filtra filtrar as receitas em memória.


## Detalhes da Receita

Após clicar em “Ver receita“, o usuário deve é direcionado para a página de detalhes da receita.

Enquanto existir algum ingrediente da preparação desmarcado, o botão do final da página abre um modal dizendo que ainda falta selecionar todos os ingredientes.

Uma vez selecionado, o botão permite que o cronometro comece a marcar o tempo.

A progress bar calcula o andamento do preparo. Quando chegar em 100%, o botão muda para 'finalizar', e, ao abri o modal, no caso de apertar o botão de 'Entendi' lá dentro, a página é redirecionada para página de pedidos.
